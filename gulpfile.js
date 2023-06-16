const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles () {
    return gulp.src('./src/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/*.scss', gulp.parallel(styles))
}