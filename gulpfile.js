var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('debug', function () {
    nodemon({
            script: 'index.js'
          , env: { 'NODE_ENV': 'development'  }
    });
});
