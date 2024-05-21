let inputPass = document.querySelector('input[type=password]');
let btn = document.querySelector('button');
let result = document.querySelector('.out-6');

btn.onclick = () => {
    if (inputPass.value == "") {
        alert("Введите значение");
    } else {
        result.innerHTML = inputPass.value;
    };
};