'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var size = require('gulp-size');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var twig = require('gulp-twig');
var uglify = require('gulp-uglify');
var prettify = require('gulp-html-prettify');

gulp.task('sass', function () {
  var s = size();
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(s)
    .pipe(gulp.dest('./dist/css'))
    .pipe(notify({
      onLast: true,
      message: function () {
        return 'SASS Compiled. Total size minified ' + s.prettySize;
      }
    }));
});

gulp.task('watcher', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.twig', ['twig']);
  gulp.watch('./src/js/*.js', ['javascript']);
  gulp.watch('./src/images/**/*.*', ['images']);
});

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      open: true,
      host: '0.0.0.0',
      port: 8000
    }));
});

gulp.task('javascript', function() {
  gulp.src('./src/js/*.js')
    .pipe(rename({suffix: '.min'}))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('images', function () {
  gulp.src([
    './src/images/**/*.*'
    ])
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('dependecies', function () {
  gulp.src([
      // './bower_components/mediaelement/build/mediaelementplayer.css'
    ])
    .pipe(gulp.dest('./dist/css'))
  gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/jquery/dist/jquery.min.map'//,
      // './bower_components/jquery-timeago/jquery.timeago.js',
      // './bower_components/slick-carousel/slick/slick.min.js',
      // './bower_components/mediaelement/build/mediaelement-and-player.min.js',
      // './bower_components/typed.js/js/typed.js'
    ])
    .pipe(gulp.dest('./dist/js'))
  gulp.src([
      // './bower_components/slick-carousel/slick/fonts/slick.eot',
      // './bower_components/slick-carousel/slick/fonts/slick.svg',
      // './bower_components/slick-carousel/slick/fonts/slick.ttf',
      // './bower_components/slick-carousel/slick/fonts/slick.woff',
      './src/fonts/*.*'
    ])
    .pipe(gulp.dest('./dist/fonts'))
  gulp.src([
    // './bower_components/slick-carousel/slick/ajax-loader.gif',
    // './bower_components/mediaelement/build/controls.svg',
    // './bower_components/mediaelement/build/loading.gif',
    ])
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('twig', function () {
  gulp.src('./src/*.twig')
    .pipe(twig({
      filters: [
        {
          name: "color",
          func: function (args) {
            var letters = '012345'.split('');
            var darkColor = '';
            for (var i = 0; i < 6; i++) {
                darkColor += letters[Math.round(Math.random() * 5)];
            }
            var letters = '9ABCDE'.split('');
            var lightColor = '';
            for (var i = 0; i < 6; i++ ) {
                lightColor += letters[Math.round(Math.random() * 5)];
            }
            if (args == 'both') {
              return lightColor + '/' + darkColor;
            } else {
              return {'light': lightColor, 'darkColor': darkColor};
            }
          }
        }
      ]
    }))
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./dist'))
    .pipe(notify({
      onLast: true,
      message: function () {
        return 'HTML gerated';
      }
    }));
});

gulp.task('build', ['sass', 'twig', 'javascript', 'images', 'dependecies']);
gulp.task('watch', ['build', 'watcher']);
