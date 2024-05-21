// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch';
}
document.querySelector('.div-1').addEventListener('touchstart', t1, {
    passive: true
});
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let click = 0;

function t2() {
    click++;
    document.querySelector('.out-2').innerHTML = click;
}
document.querySelector('.div-2').addEventListener('touchstart', t2, {
    passive: true
});
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
    document.querySelector('.out-3').innerHTML = e.srcElement.innerHTML;
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3, {
    passive: true
});
document.querySelector('.div-3_2').addEventListener('touchstart', t3, {
    passive: true
});


// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', touch_t4, {
        passive: true
    });


};

function touch_t4() {
    document.querySelector('.out-4').innerHTML = 'touch';
};

document.querySelector('.b-4').onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', touch_t4, false)
}
document.querySelector('.b-5').onclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').innerHTML = 'touchend';
}
document.querySelector('.div-4').addEventListener('touchend', t6)
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.background = 'red';
}
document.querySelector('.div-7').addEventListener('touchend', t7, {
    passive: true
})
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    document.querySelector('.div-8').style.background = a8[Math.floor(Math.random() * Math.floor(a8.length))];
}
document.querySelector('.div-8').addEventListener('touchend', t8, {
    passive: true
});
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9() {
    click++;
    document.querySelector('.out-9').innerHTML = click;
}
document.querySelector('.div-9').addEventListener('touchend', t9, {
    passive: true
});

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let block = 75,
    div_10 = document.querySelector('.div-10');

function t10() {
    block++;
    div_10.style.width = block + 'px';
}
div_10.addEventListener('touchmove', t10, {
    passive: true
});
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let div_11 = document.querySelector('.div-11');

function t11(e) {
    let out = document.querySelector('.out-11');
    out.innerHTML = `radiusX=${e.changedTouches[0].radiusX}   radiusY=${e.changedTouches[0].radiusY}`;

}
div_11.addEventListener('touchend', t11, {
    passive: true
});
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function active() {
    images.forEach(item => {
        item.classList.remove('active-img');
    });
    images[count].classList.add('active-img');
    let a = images[count].getAttribute('src');
    document.querySelector('.div-12-max .img-12-max').setAttribute('src', a);

};

function nextFunction() {
    count++;
    if (count == images.length) count = 0;
    active();
}

function prevFunction() {
    count--;
    if (count < 0) count = images.length - 1;
    active();
}

function resetFunction() {
    count = 0;
    active();
}


// ваше событие здесь!!!