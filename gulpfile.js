// Load Plugins.
// --------------------------------------------------------------
var gulp = require('gulp');
var sass = require('gulp-sass');

// Task: `sass`.
// --------------------------------------------------------------
function sass() {

    return gulp
	.src( style/style.scss )
	.pipe( sass() )
	.pipe( gulp.dest( style/style.css) );

}

// Watch.
// --------------------------------------------------------------
function watch() {

	sass();
	gulp.watch( ['./assets/*/.scss'], sass );

}

// Export tasks
// --------------------------------------------------------------
exports.default = watch;