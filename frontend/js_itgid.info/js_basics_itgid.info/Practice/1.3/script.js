let i31 = document.querySelector('.i-31');
let i32 = document.querySelector('.i-32');
let btn = document.querySelector('#b-3');
let result = document.querySelector('.out-3');
btn.onclick = () => {
    if (+i31.value > +i32.value) {
        result.innerHTML = +i31.value;
    } else result.innerHTML = +i32.value;
};