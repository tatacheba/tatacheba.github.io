const rand = require('../rand');
const config = require('./config');

module.exports = function (a) {
    let b = [];
    for (let i = 0; i < a; i++) {
        b.push(config[rand(0, config.length)])
    }
    return b.join("");
}