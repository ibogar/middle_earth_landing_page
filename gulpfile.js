const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');


function compileSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/styles'));
}

function minifyImg() {
    return gulp.src('./source/images/**/*.{jpg,jpeg,png,webp}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.series(
    compileSass,
    minifyImg
);
