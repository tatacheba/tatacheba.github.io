let inputColor = document.querySelector('input[type=text]');
let btn = document.querySelector('button');

btn.onclick = function () {
    let a = inputColor.value;
    let b = document.body.style;
    switch (+a) {
        case 1:
            b.backgroundColor = "red";
            break;
        case 2:
            b.backgroundColor = "green";
            break;
        case 3:
            b.backgroundColor = "yellow";
            break;
        case 4:
            b.backgroundColor = "gray";
            break;
        case 5:
            b.backgroundColor = "blue";
            break;
        default:
            alert("Данные не входят в диапазон от 1 до 5");

    };
};