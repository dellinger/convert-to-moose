var gulp = require('gulp');
var ts = require('gulp-typescript');
var bower = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var bower = require('gulp-bower');

gulp.task('default',['build']);
gulp.task('build', function(callback) {
   runSequence(
       'bower',
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
        .pipe(inject(gulp.src(bower()),{name: 'bower'}))
        .pipe(inject(
            gulp.src('public/src/**/*.js', {read: false}),
            {relative: true}
        ))
        .pipe(rename("index.html"))
        .pipe(gulp.dest('public/'));
});

gulp.task('bower', function(){
  return bower();
})
