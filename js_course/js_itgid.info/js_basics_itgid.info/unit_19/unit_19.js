// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    return document.querySelector('.out-1').innerHTML = document.querySelector('.div-1').innerHTML;
}

document.querySelector('.div-1').onclick = t1;
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
    let out = document.querySelector('.out-2');
    if (e.altKey) {
        return out.innerHTML = true;
    } else {
        return out.innerHTML = false;
    }
}
document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div_3 = document.querySelector('.div-3');

function t3() {
    w3 += 5;
    div_3.style.width = w3 + 'px';
}
document.querySelector('.div-3').onclick = t3;
// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4(e) {
    return document.querySelector('.out-4').innerHTML = document.querySelector('.div-4').innerHTML;
}
document.querySelector('.div-4').addEventListener('dblclick', t4);
// ваше событие здесь!!!


// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    return document.querySelector('.div-5').classList.toggle('active');
}
document.querySelector('.div-5').addEventListener('dblclick', t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}

document.querySelector('.div-6').addEventListener('dblclick', t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    document.querySelector('.div-7').classList.toggle('active');
}
document.querySelector('.div-7').addEventListener('contextmenu', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    let a = document.querySelector('.ch-8');
    if (a.checked) {
        document.querySelector('body').oncontextmenu = () => {
            return false;
        }
    } else {
        document.querySelector('body').oncontextmenu = () => {
            return true;
        }
    }

}
document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    let img = document.querySelector('.div-9 img');
    img.removeAttribute('src');
    img.setAttribute('src', 'img/2.png');
}
document.querySelector('.div-9').oncontextmenu = t9;
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    let img = document.querySelector('.div-10 img');
    img.removeAttribute('src');
    img.setAttribute('src', 'img/2.png');
}
document.querySelector('.div-10 ').addEventListener('mouseenter', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let img_11 = document.querySelector('.div-11 img');
let div_11 = document.querySelector('.div-11');

function t11() {

}

div_11.addEventListener('mouseenter', () => {
    img_11.removeAttribute('src');
    img_11.setAttribute('src', 'img/2.png');
});
div_11.addEventListener('mouseleave', () => {
    img_11.removeAttribute('src');
    img_11.setAttribute('src', 'img/1.png');
});
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// () => {

// }
let div_12 = document.querySelector('.div-12');
div_12.addEventListener('mousedown', () => {
    div_12.classList.add('active');
})
// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div_13 = document.querySelector('.div-13');
div_13.addEventListener('mousedown', () => {
    div_13.classList.add('active');
});
div_13.addEventListener('mouseup', () => {
    div_13.classList.remove('active');
});
// () =>  {

// }

// () =>  {

// }


// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector('.div-14').classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let div_15 = document.querySelector('.div-15');
let a = 1;

function t15() {
    a++;
    div_15.innerHTML = a;
}
// ваше событие здесь!!!
document.querySelector('.div-15').addEventListener('mousemove', t15);

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div_16 = document.querySelector('.div-16');
let b = 75;

function t16() {
    div_16.setAttribute('style', `width: ${b}px;`);
    b++;
}
div_16.addEventListener('mousemove', t16);
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div_16.addEventListener('mousemove', t16);
}

function t17Off() {
    div_16.removeEventListener('mousemove', t16, false)
}
document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let div_18 = document.querySelector('.div-18');

function t18() {
    div_18.innerHTML = div_18.offsetWidth;
}
div_18.onmouseenter = t18;
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let div_19 = document.querySelector('.div-19');

function t19() {
    div_19.innerHTML = div_19.classList.item('class');

}
div_19.onmouseout = t19;
// ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let progress = document.querySelector('progress');
let value_20 = progress.getAttribute('value');
// console.log(value_20);

function t20() {
    value_20++;
    progress.value = value_20;
}
progress.addEventListener('mousemove', t20);
// ваше событие здесь!!!