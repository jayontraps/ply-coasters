var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var pleeease = require('gulp-pleeease');

var css = {
    pleeeaseOpts: {
        autoprefixer: { browsers: ['last 2 versions', '> 2%'] },
        rem: ['16px'],
        pseudoElements: true,
        mqpacker: true
    }
};



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        // server: "./"
        proxy: "localhost/coasters",
    });

    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/screen.scss")
    	.pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'nested'}))
        .pipe(pleeease(css.pleeeaseOpts))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);