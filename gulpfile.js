import { src, dest, watch, series, parallel } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import cssnano from 'cssnano';
import concat from 'gulp-concat';
import terser from 'gulp-terser-js';
import rename from 'gulp-rename';
import rollup from 'gulp-rollup';

// Inicializar Sass con dart-sass
const sass = gulpSass(dartSass);

const paths = {
  scss: 'public/scss/**/*.scss',
  js: 'public/js/**/*.js',
};

// --- Tareas ---

export function css() {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('public/build/css'));
}

export function javascript() {
  return src(paths.js)
    .pipe(rollup({
      input: 'public/js/main.js',
      output: { format: 'esm' } // formato ES6
    }))
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('public/build/js'));
}

// Si ya tienes funciones definidas para imágenes y webp, las puedes importar o definir aquí
// import { imagenes, versionWebp } from './tareas/imagenes.js'

export function watchArchivos() {
  watch(paths.scss, css);
  watch(paths.js, javascript);
}

// Tareas disponibles para Gulp
export default parallel(css, javascript, watchArchivos);
