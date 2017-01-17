const restify = require('restify');
const fs = require('fs');

const server = restify.createServer({
    name: 'jeopardyServer'
});

server.listen(8080);

const routes = require('./routes')(server);

