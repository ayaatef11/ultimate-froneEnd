import gulp from "gulp";
import concat from "gulp-concat";
import { compile } from "sass";
import autoprefixer from "gulp-autoprefixer";
import pug from "gulp-pug";
import livereload from "gulp-livereload";
import sourcemaps from "gulp-sourcemaps";
import minify from "gulp-minify";

gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss", "stage/css/main.scss"])
    // Initialize sourcemaps
    .pipe(sourcemaps.init())
    // Compile Sass files and log errors if any occur
    .pipe(sass().on("error", sass.logError))
    // Add vendor prefixes to CSS properties
    .pipe(autoprefixer())
    // Concatenate all CSS files into a single file
    .pipe(concat("main.css"))
    // Write sourcemaps to the same directory
    .pipe(sourcemaps.write("."))
    // Output the resulting CSS file to the distribution directory
    .pipe(gulp.dest("dist/css"))
    // Trigger livereload to notify browsers about changes
    .pipe(livereload());
});


gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

gulp.task("watch", function () {
  livereload.listen();
  gulp.watch("stage/html/**/*.pug", gulp.series("html"));
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
});
