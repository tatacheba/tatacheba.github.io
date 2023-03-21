// Task 1
(function () {
    let w = [
        "Швейцария",
        "Черногория",
        "Хорватия",
        "Финляндия",
        "Франция",
        "Турция",
        "Тонга",
        "Румыния",
        "Пакистан",
        "Молдавия",
        "Мексика",
    ];
    document.querySelector("#my-select").innerHTML = w.map((e) => {
        return `<option>${e}</option>`;
    });
    let flag = document.getElementById("flag");
    document.querySelector("button").onclick = function () {
        let choise = document.querySelector("#my-select");
        if (flag.value === "false") {
            document.querySelector(".out").innerHTML =
                "Если false вывод всех стран за исключением выбранного: <br>" +
                w.filter((e) => e !== choise.value).join("<br>");
        } else {
            document.querySelector(".out").innerHTML =
                "Если true вывод всех стран: <br>" + w.join("<br>");
        }
    };
})();
