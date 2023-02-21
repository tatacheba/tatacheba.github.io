"use strict";
// enum httpMethod { 
//     "post","get"
// }
function responseUrl(a, b) {
    return b;
}
console.log(responseUrl('gggg', "get"));
console.log(new Date)

function zipWith(fn, a0, a1) {
    const resultArr = [];
    const shortLengthArr = Math.min(a0.length, a1.length);
    for (let index = 0; index < shortLengthArr; index++) {
        resultArr.push(fn(a0[index], a1[index]));
    }
    return resultArr;

    // return [];
}
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));