var gulp = require('gulp'),
uglify = require("gulp-uglify"),
rename = require("gulp-rename"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


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
      gulp.watch('build/js/*.js').on('change', browserSync.reload);//browser only looks in build folder
});

 //gulp watch function
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
}); 





 
gulp.task('stream', function () {
    // Endless stream mode 
    return watch('css/**/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });    
});
 
gulp.task('default',["watch", "browser-sync"]);