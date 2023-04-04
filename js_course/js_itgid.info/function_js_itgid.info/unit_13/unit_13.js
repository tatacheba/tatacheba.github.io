// Task 1
(function () {
    let w = [
        "швейцария",
        "черногория",
        "хорватия",
        "финляндия",
        "франция",
        "турция",
        "тонга",
        "румыния",
        "пакистан",
        "молдавия",
        "мексика",
    ];
    document.querySelector("#my-select").innerHTML = w.map((e) => {
        return `<option>${e}</option>`;
    });
    let flag = document.getElementById("flag");
    let land = document.getElementById("land");

    let a;
    land.onchange = function () {
        return land.value;
    };
    flag.onchange = function () {
        if (flag.value) {
            return;
        }
        a = flag.value;
        console.log(flag.value);
    };
    document.querySelector("button").onclick = function () {
        let choise = document.querySelector("#my-select");
        if (flag.value === "false") {
            document.querySelector(".out").innerHTML =
                "Если false вывод всех стран за исключением выбранного: <br>" +
                w.filter((e) => e !== choise.value).join("<br>");
        }
    };
})();
