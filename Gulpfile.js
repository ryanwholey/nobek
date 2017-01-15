var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('./.env');
var MODELS_PATH = `${env.MODEL_DIR}/_models`;
var fs = require('fs');

gulp.task('autoModel', shell.task([
        [
            'mkdir -p env.MODEL_DIR &&',
            `${env.NODE_MODULES_BIN}/sequelize-auto`,
            `--host ${env.HOST}` ,
            `--port ${env.PORT}`,
            `--user ${env.USER}`,
            (env.PASSWORD ? `--pass ${env.PASSWORD}` : ''),
            `--database ${env.DATABASE}`,
            `--output ${MODELS_PATH}`,
            '--dialect mysql',
            '--camel'
        ].join(' ')
    ]));

