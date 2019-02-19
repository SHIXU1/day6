var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("scss", function() {
    return gulp.src("./str/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./str/css"))
})
gulp.task("auto", function() {
    return gulp.watch("./str/scss/**/*.scss", gulp.series("scss"))
})