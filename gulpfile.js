const gulp = require("gulp");
const sass = require("gulp-sass");

const originRoots = {
    html: './src/**/*.html',
    js: './src/assets/js/*.js',
    scss: './src/assets/scss/*.scss'
}

const finalRoots = {
    html: './dist/',
    js: './dist/assets/js/',
    css: './dist/assets/css/'
}

gulp.task("processHTML", function () {
    gulp.src(originRoots.html)
        .pipe(gulp.dest(finalRoots.html))
    console.log("corre html")
});

gulp.task("processJS", function () {
    gulp.src(originRoots.js)
        .pipe(gulp.dest(finalRoots.js))
    console.log("corre js")
});

gulp.task("processCSS", function () {
    gulp.src(originRoots.scss)
        .pipe(sass({
                outputStyle: 'expanded'
            })
            .on('error', sass.logError))
        .pipe(gulp.dest(finalRoots.css))
    console.log(originRoots.scss)
});

gulp.task("processAll",["processHTML","processJS","processCSS"]);
