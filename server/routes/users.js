const userApi = require('../api/users');
const Promise = require('bluebird');
const ERROR = require('restify-errors');
const logError = require('../../common/utils').logError;


module.exports = function(server) {

    server.get('/api/users', (req, res, next) => {
        userApi.getUsers()
        .then((users) => res.send(users))
        .catch((err) => console.log('errrrrrrrrrrrrrr'))
        .finally(next)
    });

    server.get('/api/users/:id', (req, res, next) => {
        Promise.resolve({id: req.params.id}) 
        .then((data) => userApi.getUser(data))
        .then((data) => res.send(data))
        .catch((err) => res.send(new ERROR.InternalError('error grabbing users by id')))
        .finally(next);
    });
            
};
