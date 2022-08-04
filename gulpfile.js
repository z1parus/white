const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const del = require('del');
const imagecomp = require('compress-images');

function browsersync(){
  browserSync.init({
    server: { baseDir: 'app/' },
    online: true,
    notify: false,
  })
}

// .pipe(uglify()) - это минификация я удалил ее нахер.

function scripts() {
  return src([
    // 'node_modules/jquery/dist/jquery.min.js', //Это подключение JQuery если не нужно можно удалить.
    'app/js/app.js',
  ])
  .pipe(concat('app.min.js'))
  // минификация была тут
  .pipe(dest('app/js/'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('app/sass/main.scss')
  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
  .pipe(cleancss(( { level: { 1: { specialComments: 0 } }/*, format: 'beautify' */} )))
  .pipe(dest('app/css/'))
  .pipe(browserSync.stream())
}

async function images() {
	imagecomp(
		"app/images/#src/**/*", // Берём все изображения из папки источника
		"app/images/dest/", // Выгружаем оптимизированные изображения в папку назначения
		{ compress_force: false, statistic: true, autoupdate: true }, false, // Настраиваем основные параметры
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, // Сжимаем и оптимизируем изображеня
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { // Обновляем страницу по завершению
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}

function cleanimg() {
	return del('app/images/dest/**/*', { force: true }) // Удаляем все содержимое папки "app/images/dest/"
}

function buildcopy(){
  return src([
    'app/css/**/*min.css',
    'app/js/**/*.min.js',
    'app/images/dest/**/*',
    'app/**/*.html',
  ], { base: 'app' })
  .pipe(dest('dist'));
}

function cleandist(){
  return del('dist/**/*')
}

function startwatch(){
  watch('app/**/*.scss', styles);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch('app/**/*.html').on('change', browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleandist = cleandist;
exports.cleanimg = cleanimg;
exports.images = images;

exports.build = series(cleandist, styles, scripts, images, buildcopy);

exports.default = parallel(scripts, styles, browsersync, startwatch);