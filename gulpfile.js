'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('serve', function(){

	browserSync.init({
		server: {
			baseDir: './',
			open: false
		}
	});

	gulp.watch('./*.sass', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);

});

gulp.task('sass', function(){
	return gulp.src('./styles.sass')
		.pipe(sass())
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream);
});

gulp.task('default', ['serve']);