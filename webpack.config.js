const path = require('path');

const dbTestFiles = [
    'db/**/*.spec.js'
];

const jsLoader = {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {presets: ['es2015', 'stage-0']}
};

module.exports = {
    resolve: {
        extensions: ['', '.js'],
    },
    externals: {
        //sequelize: 'sequelize'
    },
    module: {
        devtool: 'inline-source-map',
        preLoaders: [{ test: /\.json$/, loader: 'json'}],
        loaders: [jsLoader]
    }
};

