let a21 = document.querySelector('.a21');
let a22 = document.querySelector('.a22');
let btn = document.querySelector('#b-2');
let result = document.querySelector('.out-2');

btn.onclick = function () {
    if (+a21.value > +a22.value) {
        result.innerHTML = +a21.value;
    } else result.innerHTML = +a22.value;

};