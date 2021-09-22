// Inkludera Gulp (objekt med funktioner)
const { src, dest, watch, series, parallel } = require('gulp');
// Inkludera gulp-concat
const concat = require('gulp-concat');
// Inkludera gulp-cssnano
const cssnano = require('gulp-cssnano');
// Inkludera gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
// Inkludera Browsersync
const browserSync = require('browser-sync').create();
// Inkludera gulp-image
const image = require('gulp-image');
// Inkludera gulp-dart-sass
const sass = require('gulp-dart-sass');
// Sökvägar till HTML, CSS, JS och bilder
const paths = {
    html: 'src/**/*.html',
    sass: 'src/**/*.scss',
    js: 'src/**/*.js',
    images: 'src/images/*'
}
// Tasks
// Kopiera html-filer från src till pub
function htmlTask() {
    return src(paths.html)
    .pipe(dest('pub'));
}
// Kompilera, slå samman, minifiera och kopiera sass-filer från src till pub, ladda om
function sassTask() {
    return src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
}
// Slå samman, minifiera och kopiera JS-filer från src till pub
function jsTask() {
    return src(paths.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'));
}
// Komprimera och kopiera bilder från src till pub
function imageTask() {
    return src(paths.images)
    .pipe(image())
    .pipe(dest('pub/images'));
}
// Lyssna och utför tasks vid ändring
function watchTask() {
    // Starta en webbserver
    browserSync.init({
        server: "./pub"
    });
    // Lyssna, utför tasks och ladda om webbläsaren
    watch(
        [paths.html, paths.sass, paths.js, paths.images],
        parallel(htmlTask, sassTask, jsTask, imageTask)
    ).on('change', browserSync.reload);
}
// Exportera tasks
exports.default = series(
    parallel(htmlTask, sassTask, jsTask, imageTask),
    watchTask
);