'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var SCSS_SRC = './src/assets/scss/**/styles.scss';
var SCSS_FLS = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css/';


gulp.task('sass', function(){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(SCSS_DEST))
});

gulp.task('watch', function(){
  gulp.watch(SCSS_FLS, ['sass']);
});

gulp.task('default', ['watch']);
