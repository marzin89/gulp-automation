// Inkludera Gulp (objekt med funktioner)
const { src, dest, watch, series, parallel } = require('gulp');
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
// Exportera tasks
exports.default = series(
    parallel(htmlTask)
)