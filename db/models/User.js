try {
    var users = require('./_models/users');
} catch(e) {
    console.log('models not created, try running npm run autoModel');
    process.exit(1);
}
var db = require('../db');
var Sequelize = require('sequelize');

module.exports = users(db, Sequelize);
