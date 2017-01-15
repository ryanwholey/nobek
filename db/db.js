const Sequelize = require('sequelize');
const env = require('../.env');

let sequelize;

if (!sequelize) {
    console.log('creating db connection');
    sequelize = new Sequelize(env.DATABASE, env.USER, env.PASS);
}

module.exports = (function() {
    return sequelize;
}());

