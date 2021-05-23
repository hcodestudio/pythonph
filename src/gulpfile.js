const { task, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

var tailwindFiles = ['./tailwind.config.js', './Styles/site.css'];

var jsSources = [
	'js/jquery-3.6.0.min.js',
	'js/bootstrap.bundle.min.js',
	'js/swiper-bundle.min.js',
	'js/aos.js',
	'js/pythonph.js',
];

task('watch', () => {
	return gulp.watch(tailwindFiles, gulp.series('css'));
});

function generateCSS(cb) {
	src('sass/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(
			postcss([
				require('precss'),
				require('tailwindcss'),
				require('autoprefixer'),
			])
		)
		.pipe(dest('../assets/css'));
	cb();
}

task('purge', () => {
	return (
		src('../assets/css/styles.css')
			.pipe(sourcemaps.init())
			.pipe(
				postcss([
					require('precss'),
					require('tailwindcss'),
					require('autoprefixer'),
				])
			)
			.pipe(
				purgecss({
					content: ['../**/*.html'],
				})
			)
			.pipe(
				cleanCSS({
					compatibility: 'ie8',
					level: {
						2: {
							removeDuplicateRules: true, // turns on removing duplicate rules
						},
					},
				})
			)
			// .pipe(sourcemaps.write('.'))
			.pipe(dest('../assets/css'))
	);
});

task('js', (cb) => {
	src(jsSources)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(dest('../assets/js'));

	cb();
});

exports.css = generateCSS;
