let btn = document.querySelector('button');
let numTask = document.querySelector('h1 span');

btn.onclick = () => {
    alert("Номер задачи: " + numTask.textContent);
}

// Для IE
// btn.onclick = function () {
//     alert("Номер задачи: " + numTask.textContent);
// }