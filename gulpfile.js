// Inkludera Gulp (objekt med funktioner)
const { src, dest, watch, series, parallel } = require('gulp');
// Inkludera gulp-concat
const concat = require('gulp-concat');
// Inkludera gulp-cssnano
const cssnano = require('gulp-cssnano');
// Inkludera gulp-uglify-es
const uglify = require('gulp-uglify-es').default;
// Sökvägar till HTML, CSS, JS och bilder
const paths = {
    html: 'src/**/*.html',
    css: 'src/**/*.css',
    js: 'src/**/*.js',
    images: 'src/images/*'
}
// Tasks
// Kopiera html-filer från src till dest
function htmlTask() {
    return src(paths.html)
    .pipe(dest('pub'));
}
// Slå samman, minifiera och kopiera CSS-filer från src till pub
function cssTask() {
    return src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'));
}

function jsTask() {
    return src(paths.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('pub/js'));
}
// Exportera tasks
exports.default = series(
    parallel(htmlTask, cssTask, jsTask)
)