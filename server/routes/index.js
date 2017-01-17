module.exports = function(server) {
    const routes = [
        './users',
        './questions'
    ];

    routes.forEach((route) => require(route)(server));
}

