module.exports = (function() {
    'use strict';

    const User = require('../../db/models/User');

    const getUsers = () => User.findAll();
    const getUser = (where) => User.findAll({where});

    return {
        getUsers,
        getUser
    };

})();
