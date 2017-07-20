var gulp = require('gulp'),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
eslint = require('gulp-eslint');


//gulp tasks below
gulp.task('scripts', function(){
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build/js'))
});
gulp.task('say_hello', function(){
    console.log('Hello!');
});

//reload browser
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //end of browser synch init
      gulp.watch(['build/js/*.js','index.html']).on('change', browserSync.reload);//browser only looks in build folder
});

 //gulp watch function
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
}); 

//this is lint
gulp.task('lint',function() {   
    gulp.src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.format())
});



 

 
gulp.task('default',["watch", "browser-sync"]);