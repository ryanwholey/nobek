const questionApi = require('../api/questions');
const Proimise = require('bluebird');

module.exports = function(server) {
    server.get('api/questions/random', (req, res, next) => {
        questionApi.getRandomQuestion() 
            .then((question) => res.send(question[0]))
            .catch((err) => console.log(err))
            .finally(next);
    });
}
