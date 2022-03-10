const gulp = require('gulp');
const less = require('gulp-less');
// const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
// sass.compiler = require('node-sass');
// const sourcemaps = require('gulp-sourcemaps');

gulp.task('less-common', async function () {
  return gulp.src('./src/less/common/common.less')
    .pipe(less())
    .pipe(concat('common.css'))
    .pipe(autoprefixer())
    // .pipe(cleanCSS())
    .pipe(gulp.dest('./output/css'));
});

gulp.task('less-style', async function () {
  return gulp.src('./src/less/components/*.less')
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./output/css'));
});

// gulp.task('scss-common', async function () {
//   return gulp.src('./src/scss/common.scss')
//     .pipe(sass({
//       outputStyle:  'expanded',
//       sourceComments:  false // 주석
//     }))
//     .pipe(concat('common.css'))
//     .pipe(autoprefixer())
//     .pipe(gulp.dest('./output/css'));
// });

// gulp.task('scss-style', async function () {
//   return gulp.src('./src/scss/style.scss')
//     .pipe(sass({
//       outputStyle:  'expanded',
//       sourceComments:  false // 주석
//     }))
//     .pipe(concat('style.css'))
//     .pipe(autoprefixer())
//     .pipe(gulp.dest('./output/css'));
// });

// 파일 변경 감지
gulp.task('watch', async function () {
  gulp.watch('./src/less/*/*.less', gulp.series(['less-common', 'less-style']));
  // gulp.watch('./src/scss/*.scss', gulp.series(['scss-common', 'scss-style']));
});

//gulp를 실행하면 default 로 minifycss, watch task를 실행
gulp.task('default', gulp.series(['less-common', 'less-style', 'watch']));
// gulp.task('default', gulp.series(['scss-common', 'scss-style', 'watch']));