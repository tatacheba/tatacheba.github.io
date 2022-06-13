/* Техническое задание #1

Мяу! Напиши программу, которая будет определять возрастную группу по возрасту.

Возраст записан в переменную age.

Проверяй возраст и записывай возрастную группу в виде строки в переменную ageGroup.

Если возраст до года включительно, то возрастная группа называется 'Котята'.

Если возраст от года (не включая это значение) до трёх лет включительно — 'Молодые коты'.

Если возраст от трёх лет (не включая это значение) до семи (включительно) — 'Коты средних лет'.

А если возраст от семи лет (не включая это значение) и больше — 'Почтенные кот

Первый тест. Возраст кота 0.7. Ожидаю результат: возрастная группа: 'Котята'

Второй тест. Возраст кота 3.5. Ожидаю результат: возрастная группа: 'Коты средних лет'

Третий тест. Возраст кота 3. Ожидаю результат: возрастная группа: 'Молодые коты'

Четвёртый тест. Возраст кота 8. Ожидаю результат: возрастная группа: 'Почтенные коты'

Пятый тест. Возраст кота 7. Ожидаю результат: возрастная группа: 'Коты средних лет'

Шестой тест. Возраст кота 1. Ожидаю результат: возрастная группа: 'Котята'
*/

function f1() {

    let age = 5;
    let ageGroup;

    if (age <= 1) {
        ageGroup = 'Котята';
    } else if (age > 1 && age <= 3) {
        ageGroup = 'Молодые коты';
    } else if (age > 3 && age <= 7) {
        ageGroup = 'Коты средних лет';
    } else if (age > 7) {
        ageGroup = 'Почтенные коты';
    };
    document.querySelector('.out-1').innerHTML = 'let ageGroup = ' + ageGroup + ';';
}

document.querySelector('.b-1').onclick = f1;



/* Техническое задание #2

Мяу! Запрограммируй умные весы, чтобы они давали рекомендации в зависимости от веса.

Вес записан в переменную weight.

Рекомендацию записывай строкой в переменную recommendation.

Если вес до 4 кг (не включая это значение), рекомендация – 'Пора перекусить'.

Если вес от 4 кг включительно до 5.5 кг включительно – 'Вес в норме'.

Если вес больше 5.5 кг – 'Пора на тренировку'.


Первый тест. Вес 7. Ожидаю рекоммендацию: 'Пора на тренировку'

Второй тест. Вес 5.5. Ожидаю рекоммендацию: 'Вес в норме'

Третий тест. Вес 3.7. Ожидаю рекоммендацию: 'Пора перекусить'

Четвёртый тест. Вес 4. Ожидаю рекоммендацию: 'Вес в норме'
*/


function f2() {
    let weight = 5;
    let recommendation;

    if (weight < 4) {
        recommendation = 'Пора перекусить';
    } else if (weight >= 4 && weight <= 5.5) {
        recommendation = 'Вес в норме';
    } else if (weight > 5.5) {
        recommendation = 'Пора на тренировку';
    };

    document.querySelector('.out-2').innerHTML = 'let recommendation = ' + recommendation + ';';
}

document.querySelector('.b-2').onclick = f2;


/* Техническое задание #3

Программа должна анализировать числа.

Если число делится на 3, результат работы программы — строка 'Fizz'.

Если число делится на 5 — строка 'Buzz'.

Если число одновременно делится на 3 и на 5 — результат 'FizzBuzz'.

В остальных случаях результат работы программы — изначальное число.

Число записано в переменную number.

Результат работы программы записывайте в переменную taskResult.

Первый тест. Число 30. Ожидаю результат: FizzBuzz

Второй тест. Число 18. Ожидаю результат: Fizz

Третий тест. Число 10. Ожидаю результат: Buzz

Четвёртый тест. Число 32. Ожидаю результат: 32

*/



function f3() {
    let number = 15;
    let taskResult;

    if (number % 3 == 0 && number % 5 != 0) {
        taskResult = 'Fizz';
    } else if (number % 5 == 0 && number % 3 != 0) {
        taskResult = 'Buzz';
    } else if (number % 3 == 0 && number % 5 == 0) {
        taskResult = 'FizzBuzz';
    } else {
        taskResult = number;
    };

    document.querySelector('.out-3').innerHTML = 'let taskResult = ' + taskResult + ';';
}

document.querySelector('.b-3').onclick = f3;


/* Техническое задание #4

Мяу! Напиши программу, которая будет рассчитывать сумму покупки с учётом скидки.

Стоимость записана в переменную price.

Если стоимость покупки от 1000 (включительно) до 3000 (не включая это значение), скидка составляет 5%.

Если стоимость покупки от 3000 (включительно) до 5000 (не включая это значение), скидка 10%.

Если стоимость покупки от 5000 (включительно) и выше, скидка 15%.

В остальных случаях скидки для покупателей нет.

Вычисляй стоимость с учётом скидки и записывай результат в переменную
discountedPrice.

Первый тест. Стоимость 1200. Ожидаю результат: покупка со скидкой: 1140

Второй тест. Стоимость 3000. Ожидаю результат: покупка со скидкой: 2700

Третий тест. Стоимость 4500. Ожидаю результат: покупка со скидкой: 4050

Четвёртый тест. Стоимость 5000. Ожидаю результат: покупка со скидкой: 4250

Пятый тест. Стоимость 500. Ожидаю результат: покупка со скидкой: 500

Шестой тест. Стоимость 1000. Ожидаю результат: покупка со скидкой: 950



*/



function f4() {
    let price = 4000;
    let discountedPrice;

    if (price >= 1000 && price < 3000) {
        discountedPrice = price - price * 0.05;
    } else if (price >= 3000 && price < 5000) {
        discountedPrice = price - price * 0.1;
    } else if (price >= 5000) {
        discountedPrice = price - price * 0.15;
    } else {
        discountedPrice = price;
    };
    document.querySelector('.out-4').innerHTML = 'let discountedPrice = ' + discountedPrice + ';';
}

document.querySelector('.b-4').onclick = f4;


/* Техническое задание #5

Мяу! Напиши программу, которая определит ближайшее работающее место с молоком.

Время записано в часах в переменную time.

Молокозавод находится ближе всех. Он начинает работать в 8, а закрывается в 19. Перерыв на обед с 13 до 14.

Дальше находится магазин. Он работает с 9 до 17. Перерыв на обед с 14 до 15.

Дальше всех находится рынок. Он работает с 7 до 20 без перерывов.

В остальное время все места закрыты и можно никуда не ходить.

Вычисли, куда надо пойти за молоком и запиши значение true в одну из переменных: goToDairy (молокозавод), goToStore (магазин), goToMarket (рынок).


Первый тест. Время 12. Ожидаю результат: На молокозавод: true, в магазин: false, на рынок: false

Второй тест. Время 7. Ожидаю результат: На молокозавод: false, в магазин: false, на рынок: true

Третий тест. Время 15. Ожидаю результат: На молокозавод: true, в магазин: false, на рынок: false

Четвёртый тест. Время 13. Ожидаю результат: На молокозавод: false, в магазин: true, на рынок: false

Пятый тест. Время 19. Ожидаю результат: На молокозавод: false, в магазин: false, на рынок: true

Шестой тест. Время 21. Ожидаю результат: На молокозавод: false, в магазин: false, на рынок: false

Седьмой тест. Время 13.15. Ожидаю результат: На молокозавод: false, в магазин: true, на рынок: false

Восьмой тест. Время 14.25. Ожидаю результат: На молокозавод: true, в магазин: false, на рынок: false


*/



function f5() {
    let time = 15;

    let goToDairy = false;
    let goToStore = false;
    let goToMarket = false;

    if (time >= 8 && time < 13 || time >= 14 && time < 19) {
        goToDairy = true;
    } else if (time >= 9 && time < 14 || time >= 15 && time < 17) {
        goToStore = true;
    } else if (time >= 7 && time <= 20) {
        goToMarket = true;
    }
    document.querySelector('.out-5').innerHTML = 'let goToDairy = ' + goToDairy + ';' + '<br>' + 'let goToStore = ' + goToStore + ';' + '<br>' + 'let goToMarket = ' + goToMarket + ';';
}

document.querySelector('.b-5').onclick = f5;



/* Техническое задание #6

Мяу! Длительность прогулки зависит от нескольких условий.

Во-первых, если идёт дождь, прогулка не может состояться. В этом случае длительность прогулки должна равняться 0.

Во-вторых, если температура слишком низкая (ниже 0°C) или слишком высокая (выше 35°C), прогулка тоже не состоится.

В-третьих, идеальная температура для прогулки — 20°C. В этом случае прогулка длится 20 минут.

В остальных случаях длительность прогулки уменьшается на минуту с каждым градусом отклонения от идеальной температуры: при 19°C или 21°C длительность составит 19 минут, при 18°C или 22°C — 18 минут и так далее.

Первый тест. Идёт дождь, температура — 15°C. Ожидаю время прогулки 0 минут.

Второй тест. Дождя нет, температура — 40°C. Ожидаю время прогулки 0 минут

Третий тест. Дождя нет, температура — 15°C. Ожидаю время прогулки 15 минут.

Четвёртый тест. Дождя нет, температура — 22°C. Ожидаю время прогулки 18 минут.

Пятый тест. Идёт дождь, температура — 25°C. Ожидаю время прогулки 0 минут.

Шестой тест. Дождя нет, температура — 41°C. Ожидаю время прогулки 0 минут.
*/



function f6() {
    let temperature = 30;
    let itsRaining = false;

    let minutes;

    if (itsRaining || temperature <= 0 || temperature >= 35) {
        minutes = 0;
    } else if (temperature == 20) {
        minutes = 20;
    } else if (temperature < 20) {
        minutes = temperature;
    } else if (temperature > 20) {
        minutes = 20 + (20 - temperature);
    }
    document.querySelector('.out-6').innerHTML = 'let minutes = ' + minutes + ';';
}

document.querySelector('.b-6').onclick = f6;