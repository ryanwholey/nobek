const Sequelize = require('sequelize');
const env = require('../.env');

let sequelize;

if (!sequelize) {
    console.log('creating db connection');
    sequelize = new Sequelize(env.DATABASE, env.USERNAME, env.PASSWORD);
}

module.exports = (function() {
    return sequelize;
}());

