'use strict';

// const NODE_ENV = process.environment.NODE_ENV || 'development';
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: "./home",
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? 'source-map' : false﻿,
    plugins: [
        // new webpack.EnvironmentPlugin('NODE_ENV', 'USER')
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
}