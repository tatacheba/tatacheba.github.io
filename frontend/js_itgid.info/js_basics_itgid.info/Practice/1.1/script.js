let inputNum = document.querySelector('input');
let btn = document.querySelector('#b-1');
let result = document.querySelector('.out-1');

btn.onclick = function () {
    let a = inputNum.value;
    if (a == 4) {
        result.innerHTML = 'true';
    } else result.innerHTML = "false";
};