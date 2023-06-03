const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

const scssFilesPath = "./styles/**/*.scss";

function buildStyles() {
	return src(scssFilesPath).pipe(sass().on("error", sass.logError)).pipe(rename("style.css")).pipe(dest("./styles"));
}

function watchSass() {
	watch(scssFilesPath, buildStyles);
}

exports.default = series(buildStyles, watchSass);
