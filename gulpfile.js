var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

//var livereload = require('gulp-livereload');
var livereload = require('tiny-lr')();

function notifyLiveReload(event) {
    var fileName = require('path').relative(__dirname, event.path);

    livereload.changed({
        body: {
            files: [fileName]
        }
    });
}

gulp.task('develop', function() {
    livereload.listen(35729);
    nodemon({
        script: 'server.js',
        ext: 'js ejs',
    }).on('restart', function() {
        setTimeout(function() {
            livereload.changed({});
        }, 500);
    });
});

gulp.task('styles', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            style: 'expanded',
            compass: true
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['styles']);
    gulp.watch('app/views/*.swig', notifyLiveReload);
    gulp.watch('public/css/*.css', notifyLiveReload);
});

gulp.task('default', ['develop', 'styles', 'watch']);

