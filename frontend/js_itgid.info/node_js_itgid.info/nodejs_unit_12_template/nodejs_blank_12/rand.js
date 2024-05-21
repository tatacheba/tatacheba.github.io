module.exports = function (a, b) {
    return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b));
};