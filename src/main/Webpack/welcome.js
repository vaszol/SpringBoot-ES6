'use strict';

module.exports = function (message) {
    if (process.env.NODE_ENV == 'development') {
        console.log(message);
    }
    alert(process.env.USER);
    alert(`Welcome ${message}`);
};