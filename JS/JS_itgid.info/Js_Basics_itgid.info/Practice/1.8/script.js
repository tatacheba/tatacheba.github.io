let inputRange = document.querySelector('input[type=range]');
let btn = document.querySelector('.button')

inputRange.oninput = () => {
    btn.style.background = '#' + inputRange.value;
    console.log(btn.style.background);
}