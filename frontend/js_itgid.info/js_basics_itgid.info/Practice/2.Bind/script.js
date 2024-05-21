/*
Написать свою функцию bind 
Пример работы:

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1={name: '', age: 22, job: 'Frontend'};
const person2={name: '', age 19, job: 'SMM'};

bind(person1, logPerson);
bind(person2,logperson);
*/

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
    name: 'Михаил',
    age: 22,
    job: 'Frontend'
};
const person2 = {
    name: 'Ася',
    age: 19,
    job: 'SMM'
};

function bind(context, func) {
    return function (...args) {
        return func.apply(context, args);
    };
}
bind(person1, logPerson)();
bind(person2, logPerson)();