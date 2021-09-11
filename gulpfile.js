// Inkludera Gulp (objekt med funktioner)
const { src, dest, watch, series, parallel } = require('gulp');
// Inkludera gulp-concat
const concat = require('gulp-concat');
// Inkludera gulp-cssnano
const cssnano = require('gulp-cssnano');
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

function cssTask() {
    return src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'));
}
// Exportera tasks
exports.default = series(
    parallel(htmlTask, cssTask)
)