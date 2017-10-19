var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    bs = require('browser-sync');

gulp.task('default', function(){
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/html'));
});
gulp.task('concat', function(){
    return gulp.src('src/*/*.css')
    .pipe(concatCSS('css/main.css'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('server', function(){
    bs.init({
        server: {
            baseDir: "src/"
        }
    }),
    gulp.watch("src/**/.css").on('change', bs.stream);
    gulp.watch("src/*.html").on('change', bs.reload);
});