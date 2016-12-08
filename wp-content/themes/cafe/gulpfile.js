var gulp       = require('gulp');
var sass       = require('gulp-sass');
var bourbon    = require('node-bourbon');
// var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task("default", ['sass', 'scripts', 'watch']);

gulp.task("watch", function() {
  gulp.watch("./js/**/*.js", ["scripts"]);
  gulp.watch("./sass/**/*.scss", ["sass"]);
});

gulp.task('sass', function () {
  gulp.src('sass/style.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass({includePaths: bourbon.includePaths }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});


gulp.task('scripts', function() {
  gulp.src([
    'js/main.js'
  	])
    .pipe(concat('footer-scripts.js'))
    .pipe(gulp.dest('./js/'));

   gulp.src([
    'js/lib/conditionizr-4.3.0.min.js',
   	'js/lib/modernizr-2.7.1.min.js',
   	])
   	.pipe(concat('header-scripts.js'))
   	.pipe(gulp.dest('./js/'));
});
