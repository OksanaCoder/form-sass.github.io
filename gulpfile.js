var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
 
gulp.task('sass', function () {
  return gulp.src('app/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css/'));
});


gulp.task('html', function () {
	gulp.src('app/index.html')
		.pipe(rigger())
		.pipe(gulp.dest('build/'));
});

 
gulp.task('watch', function () {
  gulp.watch('app/styles/**/*.scss', ['sass']);
  gulp.watch('app/*.html', ['html']);
});


gulp.task("default", function () {
  gulp.start("sass");

});



gulp.task("default", ['watch']);



