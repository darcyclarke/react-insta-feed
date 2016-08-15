// ----------------------------------
// Require
// ----------------------------------

var _ = require('underscore')
var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()
var runSequence = require('run-sequence')
var colors = require('colors')
var browserSync = require('browser-sync').create()
var config = require('./config')

// ----------------------------------
// Utils
// ----------------------------------

function handleError (err) {
  console.error(colors.red(err))
}

// ----------------------------------
// Fonts Task
// ----------------------------------

gulp.task('fonts', () => {
  return gulp.src(config.paths.fonts.source)
    .pipe(gulp.dest(config.paths.fonts.destination))
    .pipe(browserSync.stream({ match: '**/*.{ttf,otf,wof,eot,svg}' }))
})

// ----------------------------------
// Images Task
// ----------------------------------

gulp.task('images', () => {
  return gulp.src(config.paths.images.source)
    .pipe(plugins.imagemin({ progressive: true }))
    .pipe(gulp.dest(config.paths.images.destination))
    .pipe(browserSync.stream({ match: '**/*.{jpeg,jpg,gif,png,svg,ico}' }))
})

// ----------------------------------
// Styles Task
// ----------------------------------

gulp.task('styles', () => {
  return gulp.src(config.paths.styles.source)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.destination))
    .pipe(browserSync.stream({ match: '**/*.css' }))
})

// ----------------------------------
// Scripts Task
// ----------------------------------

gulp.task('scripts', () => {
  return gulp.src(config.paths.scripts.source)
    .pipe(gulp.dest(config.paths.scripts.destination))
    .pipe(browserSync.stream({ match: '**/*.js' }))
})

// ----------------------------------
// Start/Watch Task
// ----------------------------------

gulp.task('start', ['server'], () => {
  browserSync.init({ proxy: `${config.server.port}${config.port.ip}`, ui: false })
  gulp.watch(config.paths.fonts.watch, [ 'fonts' ])
  gulp.watch(config.paths.images.watch, [ 'images' ])
  gulp.watch(config.paths.scripts.watch, [ 'scripts' ])
  gulp.watch(config.paths.styles.watch, [ 'styles' ])
})

// ----------------------------------
// Server Task
// ----------------------------------

gulp.task('server', () => {
  return plugins.nodemon({ script: 'server.js' })
})

// ----------------------------------
// Clean Task
// ----------------------------------

gulp.task('clean', () => {
  return gulp.src(config.paths.destination).pipe(plugins.rimraf())
})

// ----------------------------------
// Default Task
// ----------------------------------

gulp.task('default', () => {
  runSequence('clean', [ 'fonts', 'images', 'styles', 'scripts' ], 'start')
})
