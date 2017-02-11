var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');

gulp.task('debug', function () {
    nodemon({
        script: 'lib/index.js',
        env: { 'NODE_ENV': 'development'  },
        tasks: ['test']
    });
});

gulp.task('coverage', function() {
    return gulp.src(['lib/*.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
});


gulp.task('test', ['coverage'], function() {
    return gulp.src(['spec/*.js'])
    .pipe(mocha())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90  }  }));
});
