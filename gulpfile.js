var gulp = require('gulp');
var ts = require('gulp-typescript');
var bower = require('main-bower-files');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var bower = require('gulp-bower');

gulp.task('default',['typescript']);


gulp.task('typescript', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('.'));
});
