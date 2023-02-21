const config = require('./config');
const randomInt = require('./rand');
const indexArray = require('./indexArray');
let a = [{
        id: 24,
        name: 'Test',
        age: 23
    },
    {
        id: 34,
        name: 'User',
        age: 33
    }
];
const hash = require('./hash');


console.log(config);
console.log(randomInt(20, 30));
console.log(indexArray(a, "age"));
console.log(hash(7));