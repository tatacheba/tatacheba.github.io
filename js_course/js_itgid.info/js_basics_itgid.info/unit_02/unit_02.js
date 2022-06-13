// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7,
    b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7,
    d = 9;
document.querySelector('.out-2').textContent = c / d;

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3,
    f = 5;
document.querySelector('.out-3').textContent = e + f;

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3',
    f1 = 5;

document.querySelector('.out-4').textContent = f1 + e1;

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3,
    f2 = 0;

document.querySelector('.out-5').textContent = e2 / f2;

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3,
    f3 = 'Hello';

document.querySelector('.out-6').textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3,
    f4 = 'Hello';
document.querySelector('.out-7').textContent = e4 * f4;

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inputDataTask8 = document.querySelector('.i-8'),
    outDataTask8 = document.querySelector(' .out-8');

function t8() {
    a = inputDataTask8.value;
    outDataTask8.textContent = a;
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inputDataTask9 = document.querySelector(' .i-9'),
    outDataTask9 = document.querySelector(' .out-9');
// console.log(inputDataTask9);

function t9() {
    a = inputDataTask9.value;
    outDataTask9.textContent = a;
    inputDataTask9.value = '';
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inputDataTask10 = document.querySelector('.i-10'),
    outDataTask10 = document.querySelector(' .out-10');

function t10() {
    a = inputDataTask10.value;
    outDataTask10.textContent = a * 10;
    inputDataTask10.value = '';
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let inputDataTask11 = document.querySelector('.i-11'),
    outDataTask11 = document.querySelector(' .out-11');

function t11() {
    a = +inputDataTask11.value;
    outDataTask11.textContent = a + 10;
    inputDataTask11.value = '';
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputDataTask12_1 = document.querySelector('.i-12_1'),
    inputDataTask12_2 = document.querySelector('.i-12_2'),
    outDataTask12 = document.querySelector(' .out-12');

function t12() {
    outDataTask12.textContent = 'Hello ' + inputDataTask12_1.value + ' ' + inputDataTask12_2.value;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.
let inputDataTask13_1 = document.querySelector('.i-13_1'),
    inputDataTask13_2 = document.querySelector('.i-13_2'),
    outDataTask13 = document.querySelector(' .out-13');

function t13() {
    a =
        outDataTask13.textContent = +inputDataTask13_1.value + +inputDataTask13_2.value;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let inputDataTask14 = document.querySelector('.i-14'),
    btnTask14 = document.querySelector('.b-14');

inputDataTask14.value = 77;
btnTask14.onclick = t14;

function t14() {
    inputDataTask14.value = 'Hello';
};

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15');

document.querySelector('.b-15').onclick = function () {
    y.style.border = '2px solid red'
};

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inputDataTask16_1 = document.querySelector('.i-16_1'),
    inputDataTask16_2 = document.querySelector('.i-16_2'),
    outDataTask16 = document.querySelector('.out-16');

function t16() {
    outDataTask16.textContent = +inputDataTask16_1.value + +inputDataTask16_2.value;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let inputDataTask17 = document.querySelector('.i-17'),
    outDataTask17 = document.querySelector('.out-17');

function t17() {
    t = inputDataTask17.value;
    console.log(t);
    t = parseInt(t);
    outDataTask17.textContent = t;
}
// Если первый символ не получилось сконвертировать в число, то возвращается NaN. 

document.querySelector('.b-17').onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let inputDataTask18 = document.querySelector('.i-18'),
    outDataTask18 = document.querySelector('.out-18');

function t18() {
    t = inputDataTask18.value;
    console.log(t);
    t = parseFloat(t);
    outDataTask18.textContent = t;
}
// Если первый символ не получилось сконвертировать в число, то возвращается NaN. 
document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let inputDataTask19_1 = document.querySelector('.i-19_1'),
    inputDataTask19_2 = document.querySelector('.i-19_2'),
    outDataTask19 = document.querySelector('.out-19');

function t19() {
    t1 = parseInt(inputDataTask19_1.value);
    t2 = parseInt(inputDataTask19_2.value);
    outDataTask19.textContent = t1 + t2;

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let inputDataTask20_1 = document.querySelector('.i-20_1'),
    inputDataTask20_2 = document.querySelector('.i-20_2'),
    inputDataTask20_3 = document.querySelector('.i-20_3'),
    inputDataTask20_4 = document.querySelector('.i-20_4'),
    outDataTask20 = document.querySelector('.out-20');

function t20() {
    outDataTask20.textContent = "Уважаемый " + inputDataTask20_1.value + " " + inputDataTask20_2.value + "," + " ваш возраст " + inputDataTask20_3.value + " года/лет," + " по профессии вы " + inputDataTask20_4.value + ".";
}

document.querySelector('.b-20').onclick = t20;