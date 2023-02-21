module.exports = function (a, b) {
    let c = new Object();
    a.forEach(e => c[e[b]] = e)
    return c;
};