let test = new Test();
console.log(test);
console.log(test.testProp = '');

const test2 = new Test2();
console.log(test2.testProp = 'bbb');
console.log(test2);
console.log(test2.setTestProp(''));
console.log(test2);
console.log(test2.testProp);

const test3 = new Test3();
console.log(test3.testProp = 'bbb');
console.log(test3);
console.log(test3.setTestProp(''));
console.log(test3);
console.log(test3.testProp);

const test4 = new Test4(3264);
console.log(test4.testProp);