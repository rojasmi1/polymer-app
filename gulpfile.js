const gulp = require('gulp');
let $ = require('gulp-load-plugins')({lazy: true});
const config = require('./gulp.config')();
const del = require('del');
const path = require('path');
const vulcanize = require('gulp-vulcanize');
let port = process.env.PORT || config.defaultPort;


gulp.task('vulcanize',()=>{
  console.log('Vulcanizing Files');
  return gulp.src(config.polymerElements)
  .pipe(vulcanize())
  .pipe(gulp.dest(config.build));
});
