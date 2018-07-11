'use strict';

module.exports = {
    mode: 'development',
    entry: "./home",
    output: {
        filename: "build.js",
        library: "home"
    },
    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'source-map'
}