var gulp = require('gulp');
var ts = require('gulp-typescript');
var bower = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');

gulp.task('build', function(callback) {
   runSequence(
       'typescript',
       'inject-dependencies',
       callback);
});

gulp.task('typescript', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('public'));
});

gulp.task('clean', function(){
    return gulp.src('public/', {read:false})
        .pipe(clean());
});

gulp.task('inject-dependencies', function(){
    return gulp.src('index.tpl.html')
        .pipe(inject(
            gulp.src(bower({paths:'.'}), {read: false}),
            {name: 'bower', relative: true, addPrefix: '..'}))
        .pipe(inject(
            gulp.src('dist/src/**/*.js', {read: false}),
            {relative: true}
        ))
        .pipe(rename("index.html"))
        .pipe(gulp.dest('public/'));
});

