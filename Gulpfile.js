var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('./.env');
var NODE_BIN = 'node_modules/.bin/';
var MODELS_PATH = './db/models/_models';
var fs = require('fs');

gulp.task('autoModel', shell.task([
        [
            `${NODE_BIN}sequelize-auto`,
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

