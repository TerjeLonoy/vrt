var gulp = require('gulp'),
	phantomcss = require('gulp-phantomcss'),
	sass = require('gulp-sass');

gulp.task('vrt-desktop', function () {
	gulp.src('./vrt.js')
		.pipe(phantomcss({
			viewportSize: [1200, 1200],
			screenshots: "screenshots-desktop"
		}));
});

gulp.task('vrt-tablet', function () {
	gulp.src('./vrt.js')
		.pipe(phantomcss({
			viewportSize: [800, 800],
			screenshots: "screenshots-tablet"
		}));
});

gulp.task('vrt-mobile', function () {
	gulp.src('./vrt.js')
		.pipe(phantomcss({
			viewportSize: [640, 640],
			screenshots: "screenshots-mobile"
		}));
});

gulp.task('vrt', function() {
    gulp.start('vrt-desktop', 'vrt-mobile', 'vrt-tablet');
});

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dev/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});