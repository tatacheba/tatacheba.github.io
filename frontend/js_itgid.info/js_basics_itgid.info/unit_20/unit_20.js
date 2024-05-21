// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    document.querySelector('.out-1').innerHTML = e.key;
}

document.querySelector('.i-1').onkeypress = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    // console.log(e);
    document.querySelector('.out-2').innerHTML = e.keyCode;
}

document.querySelector('.i-2').onkeypress = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    console.log(e);
    let out = document.querySelector('.out-3');
    if (e.keyCode >= 48 && e.keyCode <= 57) out.innerHTML = false;
    else if (e.keyCode >= 97 && e.keyCode <= 122) out.innerHTML = true;
}
document.querySelector('.i-3').onkeypress = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let i_4 = document.querySelector('.i-4');
let out_4 = document.querySelector('.out-4');

function t4(e) {
    if (e.keyCode <= 90 && e.keyCode >= 65) {
        out_4.innerHTML += '';
    } else {
        out_4.innerHTML += e.key;
    }
}
i_4.onkeypress = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let i_5 = document.querySelector('.i-5');
let out_5 = document.querySelector('.out-5');

function t5(e) {
    out_5.innerHTML += e.key.toUpperCase();
}
i_5.onkeypress = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let i_6 = document.querySelector('.i-6');
let out_6 = document.querySelector('.out-6');

function t6(e) {
    if (e.keyCode <= 90 && e.keyCode >= 65) {
        out_6.innerHTML += e.key.toLowerCase();
    } else {
        out_6.innerHTML += e.key;
    }
}
i_6.onkeypress = t6;
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
let i_7 = document.querySelector('.i-7');
let out_7 = document.querySelector('.out-7');

function t7() {
    const a7 = [1, 43, 'r', 54, 'e', 3, 'd', 6, 69, 'h', 'n'];
    let random = Math.floor(Math.random() * (a7.length));
    out_7.innerHTML = a7[random];


}
i_7.onkeypress = t7;
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let i_8 = document.querySelector('.i-8');
let out_8 = document.querySelector('.out-8');

function t8(e) {
    console.log(e);
    switch (e.key) {
        case 'i':
            out_8.innerHTML += 1;
            break;
        case 'o':
            out_8.innerHTML += 0;
            break;
        case 'l':
            out_8.innerHTML += 7;
            break;
        default:
            out_8.innerHTML += e.key;
    };

}
i_8.onkeypress = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let i_9 = document.querySelector('.i-9');
let out_9 = document.querySelector('.out-9');
let valueArrowDown = 0;

function t9(e) {
    // console.log(e);
    if (e.key == 'ArrowDown') valueArrowDown++;
    out_9.innerHTML = valueArrowDown;
}

i_9.onkeyup = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let i_10 = document.querySelector('.i-10');
let img_10 = document.querySelector('.div-10 img');
let w_10 = 75;
let h_10 = 75;

function t10(e) {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
        w_10++;
        img_10.style.width = w_10 + 'px';
    } else if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
        h_10++;
        img_10.style.height = h_10 + 'px';
    }
}
i_10.onkeyup = t10;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/
let i_11 = document.querySelector('.i-11');
let out_11 = document.querySelector('.out-11');
let clav = document.querySelectorAll('.key');

function t11(e) {
    let arrExtra = ['Enter', 'ControlRight', 'ControlLeft', 'AltLeft', 'AltRight'];
    let a = arrExtra.find(elem => {
        if (elem == e.code) {
            return true;
        }
    });
    clav.forEach(item => {
        item.classList.remove('active');
        if (e.code.toLowerCase() == item.getAttribute('data-key')) {
            item.classList.add('active');
            if (a != undefined) {
                out_11.innerHTML += '';
            } else {
                out_11.innerHTML += e.key;
            }
        }

    });
}

i_11.onkeyup = t11;
// ваше событие здесь!!!