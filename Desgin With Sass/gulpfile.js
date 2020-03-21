var gulp = require('gulp'),
    sass = require('gulp-sass');

    gulp.task('sass', function(){
        gulp.src(['css/*.scss','css/sass/*/*.scss'])
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('css/'));
    });

    gulp.task('watch', function(){
        gulp.watch(['css/*.scss','css/sass/*/*.scss'],['sass']);
    });

gulp.task('default',['sass','watch']);