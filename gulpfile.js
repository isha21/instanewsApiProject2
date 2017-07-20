var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create(),
  eslint = require('gulp-eslint'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  prettyError = require('gulp-prettyerror');

// gulp tasks below
gulp.task('scripts', ['lint'], function () {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
})
gulp.task('say_hello', function () {
  console.log('Hello!')
})

// reload browser
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  }) // end of browser synch init
  gulp.watch(['build/js/*.js', 'index.html', 'build/css/*.css']).on('change', browserSync.reload) // browser only looks in build folder
})

// gulp watch function
gulp.task('watch', function () {
  gulp.watch('./js/*.js', ['scripts'])
  gulp.watch('./sass/*.scss', ['sass'])
})

// this is lint 
gulp.task('lint', function () {
  return gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

// this is for scss

gulp.task('sass', function () {
  gulp.src('./sass/style.scss')
    .pipe(prettyError())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'))
})




gulp.task('default', ['watch', 'browser-sync'])
