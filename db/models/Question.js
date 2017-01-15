try {
    var questions = require('./_models/questions');
} catch(e) {
    console.log('no models not created, try running npm run autoModel');
    process.exit(1);
}
var db = require('../db');
var Sequelize = require('sequelize');

module.exports = questions(db, Sequelize);
