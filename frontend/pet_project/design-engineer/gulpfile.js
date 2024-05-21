//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// const watch = require('gulp-watch');


//Порядок подключения css файлов
const cssFiles = [
   './src/css/main.css'

]
const scssFiles = [
   './src/scss/*.scss'
]
//Порядок подключения js файлов
const jsFiles = [
   './src/js/lib.js',
   './src/js/main.js'
]

//  Чтение scss
function scssCompl() {
   // gulp.task('sass', function () { // Создаем таск "sass"
   return gulp.src(scssFiles) // Берем источник
      .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
      // .pipe(sourcemaps.init())
      // .pipe(sass().on('sass', sass.logError))
      // pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./src/css')) // Выгружаем результата в папку app/css
}


//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов CSS
   //Все файлы по шаблону './src/css/*.css'
   return gulp.src(cssFiles)
      //Объединение файлов в один
      .pipe(concat('style.css'))
      //Добавить префиксы
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 2 versions'],
         cascade: false
      }))
      //Минификация CSS
      // .pipe(cleanCSS({
      //    level: 2
      // }))
      //Выходная папка для стилей
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
      //Объединение файлов в один
      .pipe(concat('script.js'))
      //Минификация JS
      // .pipe(uglify({
      //    toplevel: true
      // }))
      //Выходная папка для скриптов
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
}



//Удалить всё в указанной папке
// function clean() {
//    return del(['build/*'])
// }

//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
         baseDir: "./"
      }
   });
   //Следить за CSS файлами
   gulp.watch('./src/css/**/*.css', styles)
   //Следить за JS файлами
   gulp.watch('./src/js/**/*.js', scripts)
   // Следить за SCSS файлами
   // gulp.watch('./src/scss/**/*.scss', scssCompl)
   //При изменении HTML запустить синхронизацию
   gulp.watch("./*.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск вызывающий функцию scss
// gulp.task('scssCompl', scssCompl);
// //Таск для очистки папки build
// gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
// gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(gulp.parallel(styles, scripts)));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build', 'watch'));