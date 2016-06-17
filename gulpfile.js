var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var twig = require('gulp-twig');
var htmlmin = require('gulp-htmlmin');
var prettify = require('gulp-prettify');
var replace = require('gulp-replace');

var fs = require('fs');
var data = JSON.parse(fs.readFileSync('src/json/data.json'));

// html
gulp.task('html', function () {

    return gulp.src('src/docs/index.twig')

        // compile
        .pipe(twig({ data: data }))

        // minify
        .pipe(htmlmin({
            preserveLineBreaks: false,
            collapseWhitespace: true
        }))

        // prettify
        .pipe(prettify({
            indent_size: 4,
            preserve_newlines: true
        }))

        // replace
        .pipe(replace(/(\n[^<]+<!-- [^\/]*? -->)/g, "\n$1"))
        .pipe(replace(/(\n[^<]+<!-- \/\/.*? -->)/g, "$1\n"))

        // dist
        .pipe(gulp.dest('dist'))

        // reload
        .pipe(connect.reload());
});

// sass
gulp.task('sass', function () {
    return gulp.src('src/docs/styles/docs.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload());
});

// assets
gulp.task('assets', function(){
    gulp.src('src/docs/**/*.{jpg,png,svg,ico}')
        .pipe(gulp.dest('dist'));
});

// connect
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: {
            port: 4377
        },
        port: 4376
    });
});

// build
gulp.task('build', ['assets', 'html', 'sass']);

// watch
gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.twig', ['html']);
});

// default
gulp.task('default', ['connect', 'build', 'watch']);