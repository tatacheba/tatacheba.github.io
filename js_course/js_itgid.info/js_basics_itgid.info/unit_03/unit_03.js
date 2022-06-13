// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let inputDataTask1 = document.querySelector('.i-1'),
    outDataTask1 = document.querySelector('.out-1');

function f1() {
    let a = +inputDataTask1.value;
    if (a == 4) {
        outDataTask1.textContent = true;
    } else {
        outDataTask1.textContent = false;
    }
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let a21 = 45;
let a22 = 32;
let outDataTask2 = document.querySelector('.out-2');

function f2() {
    if (a21 < a22) {
        outDataTask2.textContent = a22;
    } else {
        outDataTask2.textContent = a21;
    }
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна вычитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let inputDataTask31 = document.querySelector('.i-31'),
    inputDataTask32 = document.querySelector('.i-32'),
    outDataTask3 = document.querySelector('.out-3');

function f3() {
    let a = +inputDataTask31.value;
    let b = +inputDataTask32.value;
    if (a > b) {
        outDataTask3.textContent = a;

    } else {
        outDataTask3.textContent = b;

    }
}

document.querySelector('.b-3').onclick = f3;


// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let inputDataTask4 = document.querySelector('.i-4'),
    outDataTask4 = document.querySelector('.out-4');

function f4() {
    let a = +inputDataTask4.value;
    if (a >= 18) {
        outDataTask4.textContent = 1;
    } else {
        outDataTask4.textContent = 0;
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let inputDataTask5 = document.querySelector('.i-5'),
    outDataTask5 = document.querySelector('.out-5');

function f5() {
    let a = +inputDataTask5.value;
    if (a < 0) {
        outDataTask5.textContent = "m";
    } else if (a == 0) {
        outDataTask5.textContent = 0;
    } else if (a >= 1) {
        outDataTask5.textContent = 1;
    }
}

document.querySelector('.b-5').onclick = f5;


// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let inputDataTask6 = document.querySelector('.i-6'),
    outDataTask6 = document.querySelector('.out-6');

function f6() {
    let a = +inputDataTask6.value;
    if (a % 2 == 0) {
        outDataTask6.textContent = "четное";
    } else {
        outDataTask6.textContent = "нечетное";
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let inputDataTask71 = document.querySelector('.i-71'),
    inputDataTask72 = document.querySelector('.i-72'),
    outDataTask7 = document.querySelector('.out-7');

function f7() {
    let a = +inputDataTask71.value;
    let b = +inputDataTask72.value;
    outDataTask7.textContent = Math.pow(a, b);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let selectDataTask8 = document.querySelector('.s-8'),
    outDataTask8 = document.querySelector('.out-8');

function f8() {
    let a = +selectDataTask8.value;
    switch (a) {
        case 1:
            outDataTask8.textContent = "one";
            break;
        case 2:
            outDataTask8.textContent = "two";
            break;
        case 3:
            outDataTask8.textContent = "three";
            break;
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let inputDataTask9 = document.querySelector('.i-9'),
    outDataTask9 = document.querySelector('.out-9');

function f9() {
    let a = +inputDataTask9.value;

    if (a >= 1 && a <= 32) {
        outDataTask9.textContent = 1;
    } else if (a > 32 && a <= 43) {
        outDataTask9.textContent = 2;
    } else if (a > 43 && a <= 64) {
        outDataTask9.textContent = 3;
    } else {
        outDataTask9.textContent = 0;
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let selectDataTask10 = document.querySelector('.s-100'),
    outDataTask10 = document.querySelector('.out-10');

function f10() {
    outDataTask10.textContent = selectDataTask10.value;
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let selectDataTask11 = document.querySelector('.s-110'),
    outDataTask11 = document.querySelector('.out-11');

function f11() {
    outDataTask11.textContent = selectDataTask11.value;
}

document.querySelector('.s-110').onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector('.i-120');

function f12() {
    let v = i120.value;
    document.querySelector('.out-12').innerHTML = (typeof v);
    if (typeof v === 'number') {
        console.log('num');
    } else {
        console.log('str');
    }

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let inputDataTask13 = document.querySelector('.i-130'),
    outDataTask13 = document.querySelector('.out-13');

function f13() {
    let v = inputDataTask13.value;
    outDataTask13.innerHTML = (typeof v);
    if (typeof v === 'number') {
        console.log('num');
    } else {
        console.log('str');
    }
}

// document.querySelector('.b-13').onclick = f13;

// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let selectDataTask14 = document.querySelector('.s-143'),
    inputDataTask141 = document.querySelector('.i-141'),
    inputDataTask142 = document.querySelector('.i-142'),
    outDataTask14 = document.querySelector('.out-14');

function f14() {
    switch (selectDataTask14.value) {
        case '+':
            outDataTask14.textContent = +inputDataTask141.value + +inputDataTask142.value;
            break;
        case '-':
            outDataTask14.textContent = inputDataTask141.value - inputDataTask142.value;
            break;
        case '/':
            outDataTask14.textContent = inputDataTask141.value / inputDataTask142.value;
            if (inputDataTask142.value == 0) {
                outDataTask14.textContent = "На ноль делить нельзя";
            }
            break;
        case '*':
            outDataTask14.textContent = inputDataTask141.value * inputDataTask142.value;
            break;

    }
}

document.querySelector('.b-14').onclick = f14;


// Task     15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let selectDataTask151 = document.querySelector('.s-151'),
    selectDataTask152 = document.querySelector('.s-152'),
    selectDataTask153 = document.querySelector('.s-153'),
    outDataTask15 = document.querySelector('.out-15');


function f15() {
    switch (selectDataTask153.value) {
        case "&&":
            outDataTask15.textContent = selectDataTask151.value && selectDataTask152.value;
            break;
        case "||":
            outDataTask15.textContent = selectDataTask151.value || selectDataTask152.value;
            break;

    }
}

// document.querySelector('.b-15').onclick = f15;