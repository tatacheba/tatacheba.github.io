let inputNum = document.querySelector('input');
let btn = document.querySelector('button[type=button]');

btn.onclick = () => {

    if (inputNum.value == "") {
        alert("Введите значение");
        inputNum.value = "";
    } else {
        alert(inputNum.value);
        inputNum.value = "";
    }
};