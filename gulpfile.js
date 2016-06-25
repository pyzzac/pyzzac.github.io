var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('minify-css', function(){
  return gulp.src('app/css/styles.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/css/styles.css', ['minify-css']); 
})
