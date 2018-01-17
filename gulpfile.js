var gulp = require("gulp");
var ts = require("gulp-typescript").createProject("tsconfig.json");

gulp.task("default", function () {
     gulp.src("./src/**/*")
        .pipe(ts())
        .pipe(gulp.dest("dist"));
});

