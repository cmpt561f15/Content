var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var PATHS = {
    src: 'app/**/*.ts'
};

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
    //var tsResult = gulp.src(PATHS.src)
    var tsResult = gulp.src(PATHS.src, { base: "./" })
        .pipe(typescript({
            noImplicitAny: true,
            module: 'system',
            target: 'ES5',
            moduleResolution: 'node',
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }));

    //return tsResult.js.pipe(gulp.dest('js'));
    return tsResult.js.pipe(gulp.dest('.'));
});

gulp.task('run', ['ts2js'], function () {
    //watch changes to ts files
    gulp.watch(PATHS.src, ['ts2js']);

    nodemon({
        script: 'app.js'
        , ext: 'js html'
    }).on('restart', function () {
        console.log('restarted!')
    })
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['run']);

