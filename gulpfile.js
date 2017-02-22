var gulp = require('gulp');
var gulpUglify = require('gulp-uglify');
var gulpRename = require('gulp-rename');

var destinationFolder = "dist/";

var src_js_file = "src/angular-ticking-clock.js";
var dest_js_file_min = "dist/angular-ticking-clock.min.js";
var dest_Js_file = "dist/angular-ticking-clock.js";


gulp.task('minify', function() {
    return gulp.src(src_js_file)
    	.pipe(gulpUglify())
    	.pipe(gulpRename({ suffix: '.min' }))
        .pipe(gulp.dest(destinationFolder));
});
