const list_1 = new List(['one', 'two', 'three', 'four']);
document.body.append(list_1.render());
console.log(list_1);

let list_2 = new List2(['one', 'two', 'three', 'four'], 'cssc');
document.body.append(list_2.render());
console.log(list_2);

let list_3 = new List2(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);
document.body.append(list_3.render());
console.log(list_3);