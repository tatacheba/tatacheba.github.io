/* Техническое задание #1

Напиши программу, которая формирует заказ в виде строки.

Массив с вариантами основы для смузи записан в переменную liquids.

Массив с фруктами находится в переменной fruits.

Массив с зеленью записан в переменную greens.

Выбор посетителя записан в виде чисел в переменные chosenLiquid (индекс выбранной основы для смузи), chosenFruit (выбранный фрукт), chosenGreen (выбранная зелень).

Обрати внимание, что посетители выбирают пункты в электронном меню, где нумерация начинается с единицы, а не с нуля, как в массивах. Учти это при решении.

Собери строку с заказом посетителя вида 'Основа — ' + основа для смузи + ', фрукт — ' + выбранный фрукт + ', зелень — ' + выбранная зелень. Запиши результат в переменную order.

Первый тест. Выбранная основа — 5, фрукт — 1, зелень — 4. Ожидаю результат: 'Основа — йогурт, фрукт — киви, зелень — петрушка'

Второй тест. Выбранная основа — 4, фрукт — 6, зелень — 5. Ожидаю результат: 'Основа — чай, фрукт — ананас, зелень — базилик'

Третий тест. Выбранная основа — 2, фрукт — 2, зелень — 2. Ожидаю результат: 'Основа — молоко, фрукт — банан, зелень — шпинат'
*/

function f1() {
    // Состав смузи

    let liquids = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
    let fruits = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
    let greens = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

    // Выбор посетителя

    let chosenLiquid = 1;
    let chosenFruit = 3;
    let chosenGreen = 2;

    // Заказ

    let order = `Основа — ${liquids[chosenLiquid-1]}, фрукт — ${fruits[chosenFruit-1]}, зелень — ${greens[chosenGreen-1]}`
    document.querySelector('.out-1').innerHTML = 'let order = ' + order + ';';

}

document.querySelector('.b-1').onclick = f1;



/* Техническое задание #2

Напиши программу, которая составит из элементов массива список покупок.

В результате должна получиться строка с элементами массива через запятую вида 'элемент, элемент, элемент'.

Каждый элемент должен быть отделён запятой, точка в конце строки не нужна. И помни про пробелы перед всеми словами, кроме первого.

Элементы должны добавляться в строку последовательно, начиная с самого первого элемента массива, заканчивая последним.

Массив с покупками записан в переменную groceries.

Строку со списком покупок записывай в переменную shoppingList.

Первый тест. Массив: 

["молоко","бананы","укроп","сметана"]

Ожидаю список покупок: молоко, бананы, укроп, сметана

Второй тест. Массив: 

["сыр","яйца","авокадо","хумус","оливки","творог","йогурт"]

Ожидаю список покупок: сыр, яйца, авокадо, хумус, оливки, творог, йогурт

Третий тест. Массив: 

["чай","кофе"]

Ожидаю список покупок: чай, кофе




*/


function f2() {
    let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
    let shoppingList = '';

    for (let i = 0; i < groceries.length; i++) {
        if (i === groceries.length - 1) {
            shoppingList += `${groceries[i]}`
        } else
            shoppingList += `${groceries[i]}, `
    };

    document.querySelector('.out-2').innerHTML = 'let shoppingList = ' + shoppingList + ';';
}


document.querySelector('.b-2').onclick = f2;


/* Техническое задание #3

Напишите программу, которая будет находить последний индекс элемента в массиве.

Массив записан в переменную numbers.

Элемент, последний индекс которого надо найти, записан в переменную number.

Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.

Первый тест. Массив: 

[3,4,15,12,13,13,13]

Число: 13. Ожидаю индекс: 6

Второй тест. Массив: 

[0,17,0,0,15,2,2]

Число: 0. Ожидаю индекс: 3

Третий тест. Массив: 

[12,14,17,2,15,2]

Число: 41. Ожидаю индекс: -1


*/



function f3() {
    let numbers = [2, 4, 7, 4, 7, 2];
    let number = 4;
    let lastIndex = -1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === number) {
            lastIndex = i;
        }

    }

    document.querySelector('.out-3').innerHTML = 'let lastIndex = ' + lastIndex + ';';
}

document.querySelector('.b-3').onclick = f3;


/* Техническое задание #4

Напиши программу, которая на основе одного массива c багажом создаст другой.

Изначальный массив с багажом записан в переменную luggage.

Индекс элемента, с которого нужно начинать добавлять багаж (включая этот элемент), записан в переменную startIndex.

Количество элементов, которые нужно взять с собой записано в переменную quantity.

Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему). Выбирай определённое количество элементов из массива luggage, начиная с элемента с индексом startIndex, и добавляй их в новый массив. Он должен быть записан в переменную chosenLuggage.

Для добавления элементов в новый массив можешь использовать команду array.push().

Первый тест. Стартовый индекс — 1, количество вещей — 2. Ожидаю результат: 

["мяч","тапки"]

Второй тест. Стартовый индекс — 0, количество вещей — 4. Ожидаю результат: 

["пакет","мяч","тапки","когтеточка"]

Третий тест. Стартовый индекс — 5, количество вещей — 2. Ожидаю результат: 

["миска","мята"]




*/

function f4() {
    let luggage = ['пакет', 'мяч', 'тапки', 'когтеточка', 'коробка', 'миска', 'мята'];
    let startIndex = 2;
    let quantity = 3;
    let chosenLuggage = [];

    for (let i = startIndex; i < startIndex + quantity; i++) {
        chosenLuggage.push(luggage[i]);

    }
    document.querySelector('.out-4').innerHTML = 'let chosenLuggage = ' + chosenLuggage + ';';
}

document.querySelector('.b-4').onclick = f4;


/* Техническое задание #5

Мяу! Напиши программу, которая на основе одного массива с книгами создаст другой.

Массив книг записан в переменную books.

В переменную minNumber записано минимальное количество букв в названии книги (включительно), а в переменную maxNumber записано максимальное число букв (включительно). Чтобы найти количество букв в названии, используй команду строка.length.

Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему).

Результат запиши в переменную filteredBooks.

Для добавления элементов в новый массив используй команду array.push().

Первый тест. Минимальное количество букв — 5, максимальное — 7. Ожидаю результат: 

["Улисс","Маугли","Сияние","Ревизор","Гамлет","Обломов"]

Второй тест. Минимальное количество букв — 3, максимальное — 3. Ожидаю результат: 

["Вий","Оно"]

Третий тест. Минимальное количество букв — 8, максимальное — 15. Ожидаю результат: 

["Дюймовочка","Шантарам","Сильмариллион"]



*/



function f5() {
    let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
    let minNumber = 3;
    let maxNumber = 5;
    let filteredBooks = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].length >= minNumber && books[i].length <= maxNumber) {
            filteredBooks.push(books[i]);

        };

    }

    document.querySelector('.out-5').innerHTML = 'let filteredBooks = ' + filteredBooks + ';';
}

document.querySelector('.b-5').onclick = f5;



/* Техническое задание #6
Мне нужна новая программа расшифровки.

Есть массив symbols, в котором хранится алфавит (буквы и другие символы).

Есть массив encodedMessage, в котором хранится зашифрованное сообщение. Каждый элемент этого массива — это индекс символа из массива symbols.

Индексы сдвинуты на величину в переменной shift. Пример: элемент из зашифрованного массива равен единице, значит с учётом сдвига десять это символ с индексом одиннадцать в массиве с алфавитом, то есть «К».

Программа дешифровки должна переводить элементы из массива с шифровкой в символы из массива алфавита и склеивать из них расшифрованную строку. Эту строку храним в переменной decodedMessage.

Если индекс со смещением выходит за пределы алфавита, то нужно вычесть из этого индекса длину алфавита (большие индексы шифруют символы в начале алфавита).


Первый тест. Массив: 

[8,28,36,52,56,40,23,31,56,39,38,28,48,52,58,56,38,27,32,37,56,40,23,31,56,39,38,41,39,32,57]

Второй тест. Массив: 

[8,34,38,35,52,34,38,56,39,41,23,56,37,28,56,34,38,40,36,32,58,56,38,37,56,25,41,29,56,40,23,25,37,38,56,25,56,36,38,54,56,36,32,41,34,43,56,41,36,38,42,40,32,42,60]

Третий тест. Массив: 

[62,28,31,56,42,40,43,27,23,56,37,28,56,25,51,39,40,38,41,32,48,52,56,40,51,24,34,43,56,43,56,45,38,31,55,32,37,23,57]

Четвёртый тест. Массив: 

[13,25,28,42,38,34,56,37,23,56,39,38,35,56,59,56,39,38,27,38,34,38,37,37,32,34,43,56,35,28,26,47,28,60]

Пятый тест. Массив: 

[4,28,31,25,23,37,51,33,56,39,51,35,28,41,38,41,56,45,43,30,28,56,25,28,37,32,34,23,57]

Шестой тест. Массив: 

[2,43,47,48,28,56,34,38,42,35,28,42,23,56,25,56,31,43,24,23,45,58,56,47,28,36,56,41,32,37,32,46,23,56,25,56,37,28,24,28,57]
*/



function f6() {
    // Алфавит
    let symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

    // Смещение
    let shift = 10;

    // Закодированное сообщение
    let encodedMessage = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

    // Раскодированное сообщение
    let decodedMessage = '';

    for (let i = 0; i < encodedMessage.length; i++) {
        if (encodedMessage[i] + shift > symbols.length) {
            decodedMessage += symbols[encodedMessage[i] + shift - symbols.length];
        } else
            decodedMessage += symbols[encodedMessage[i] + shift];
    }
    document.querySelector('.out-6').innerHTML = 'let decodedMessage = ' + decodedMessage + ';';
}

document.querySelector('.b-6').onclick = f6;



/* Техническое задание #7

Напиши программу, которая будет собирать статистику из пользовательских данных.

Массив с данными записан в переменную usersData.

Найди все элементы массива с данными, в которых содержится определённая строка. Эта искомая строка записана в переменную query.

Количество подходящих элементов (пользователей), которые подходят под критерий, запиши в переменную matchingUsers.

Чтобы проверить наличие строки в элементе массива, используй команду indexOf().


Первый тест. Данные пользователей: 

["Виталий Иванович","Иннокентий Петрович","Александр Александрович","Игорь Олегович","Евгений Петрович","Игнат Денисович","Сергей Александрович","Семён Петрович"]

Критерий – Петрович. Ожидаю результат: 3

Второй тест. Данные пользователей: 

["Людмила Сергеевна","Мария Петровна","Валерия Брониславовна","Елена Васильевна","Людмила Львовна","Елена Сергеевна","Екатерина Максимовна"]

Критерий – Елена. Ожидаю результат: 2

Третий тест. Данные пользователей: 

["Самара","Москва","Ижевск","Иркутск","Екатеринбург","Нижний Новгород","Екатеринбург","Саратов","Екатеринбург","Бузулук","Екатеринбург"]

Критерий – Екатеринбург. Ожидаю результат: 4


*/



function f7() {
    let usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];
    let query = 'Александрович';
    let matchingUsers = 0;

    for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].indexOf(query) > -1) {
            matchingUsers++;

        };

    }

    document.querySelector('.out-7').innerHTML = 'let matchingUsers = ' + matchingUsers + ';';
}

document.querySelector('.b-7').onclick = f7;


/* Техническое задание #8

            Напиши программу, которая считает числа Фибоначчи и последовательно записывает эти числа в массив.

                Массив записан в переменную fibonacciNumbers. Первые два числа уже находятся в этом массиве.

                Вам нужно дополнить массив: найти следующие числа в последовательности и записать каждое из них по
                порядку в массив.

                Количество новых чисел в массиве ограничено. В переменной numbersQuantity указано сколько чисел нужно
                добавить в массив. Это значение не включает в себя два числа, которые изначально даны в массиве.

 Первый тест. Изначальные данные: 

[2,5]

Количество новых чисел — 4. Ожидаю результат: 

[2,5,7,12,19,31]

Второй тест. Изначальные данные: 

[3,9]

Количество новых чисел — 8. Ожидаю результат: 

[3,9,12,21,33,54,87,141,228,369]

Третий тест. Изначальные данные: 

[0,2]

Количество новых чисел — 9. Ожидаю результат: 

[0,2,2,4,6,10,16,26,42,68,110]




*/


function f8() {
    let fibonacciNumbers = [1, 1];
    let numbersQuantity = 7;

    for (let i = 1; i <= numbersQuantity; i++) {

        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i]);


    };

    document.querySelector('.out-8').innerHTML = 'let fibonacciNumbers = ' + fibonacciNumbers + ';';
}

document.querySelector('.b-8').onclick = f8;


/* Техническое задание #9

Напиши программу, которая будет следить за моими спортивными показателями.

В переменную indicators записан массив с моими спортивными характеристиками.

В массив levels записаны уровни каждого показателя. Каждый элемент этого массива соответствует по индексу элементу массива indicators.

В зависимости от времени тренировки, прокачиваются разные показатели. Время тренировки указано в минутах и записано в переменную trainingTime.

Если тренировка длится до 30 минут включительно, увеличивай скорость и ловкость на 3.

Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.

Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.

Первый тест. Список показателей: 

["выносливость","скорость","ловкость","гибкость","сила"]

Уровни характеристик — 

[7,12,5,15,11]

Время тренировки — 60. Ожидаю результат: 

[7,12,5,18,11]

Второй тест. Список показателей: 

["гибкость","сила","выносливость","скорость","ловкость"]

Уровни характеристик — 

[5,7,9,12,2]

Время тренировки — 75. Ожидаю результат: 

[5,9,11,12,2]

Третий тест. Список показателей: 

["ловкость","скорость","гибкость","выносливость","сила"]

Уровни характеристик — 

[3,5,7,8,5]

Время тренировки — 25. Ожидаю результат: 

[6,8,7,8,5]


*/

function f9() {
    let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
    let levels = [8, 15, 9, 12, 11];
    let trainingTime = 30;
    for (let i = 0; i < indicators.length; i++) {
        if (trainingTime <= 30) {
            switch (indicators[i]) {
                case ('скорость'):
                    levels[i] = levels[i] + 3;
                    break;
                case ('ловкость'):
                    levels[i] = levels[i] + 3;
                    break;
            }

        } else if (trainingTime > 30 && trainingTime <= 60) {
            switch (indicators[i]) {
                case ('гибкость'):
                    levels[i] = levels[i] + 3;
                    break;
            }
        } else if (trainingTime > 60) {
            switch (indicators[i]) {
                case ('сила'):
                    levels[i] = levels[i] + 2;

                    break;
                case ('выносливость'):
                    levels[i] = levels[i] + 2;

                    break;
            }
        };
    };



    document.querySelector('.out-9').innerHTML = 'let levels = ' + levels + ';';
}

document.querySelector('.b-9').onclick = f9;


/* Техническое задание #10

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

Первый тест. Исходный массив: 

[12,12,15,7,1,15]

Ожидаю массив с уникальными числами: 

[7,1]

Второй тест. Исходный массив: 

[1,2,3,8,15]

Ожидаю массив с уникальными числами: 

[1,2,3,8,15]

Третий тест. Исходный массив: 

[101,15,116,20,116,15,2]

Ожидаю массив с уникальными числами: 

[101,20,2]

Четвертый тест. Исходный массив: 

[89,17,156,89,156,156,89,6,89,89,30]

Ожидаю массив с уникальными числами: 

[17,6,30]


*/


function f10() {
    let numbers = [1, 4, 5, 9, 2, 5, 1];
    let uniqueNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let k = 0;
        for (let j = 0; j <= numbers.length; j++) {
            // console.log(`numbers[i] ${numbers[i]}`);
            // console.log(`numbers[j] ${numbers[j]}`);
            if (numbers[i] === numbers[j]) {
                k++;
                // console.log(`k  ${k}`);
            }

        }
        if (k <= 1) {
            uniqueNumbers.push(numbers[i]);
            // console.log(k);
        }


    }

    document.querySelector('.out-10').innerHTML = 'let uniqueNumbers = ' + uniqueNumbers + ';';
}

document.querySelector('.b-10').onclick = f10;


/* Техническое задание #11

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке, задом наперёд.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

Первый тест. Исходный массив: 

[23,8,30,12,10,26]

Ожидаю изменённый массив : [26,10,12,30,8,23]

Второй тест. Исходный массив: 

[1,461,192,1052,51]

Ожидаю изменённый массив : [51,1052,192,461,1]

Третий тест. Исходный массив: 

[41,38,78,98]

Ожидаю изменённый массив : [98,78,38,41]



*/


function f11() {
    let numbers = [1, 3, 5, 7, 9, 11];

    numbers.reverse();

    document.querySelector('.out-11').innerHTML = 'let numbers = ' + numbers + ';';
}

document.querySelector('.b-11').onclick = f11;



/* Техническое задание #12

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

Первый тест. Стартовый массив: 

[7,12,57,23,0,2]

Ожидаю отсортированный массив: 

[0,2,7,12,23,57]

Второй тест. Стартовый массив: 

[57,16,-2,4,8,15]

Ожидаю отсортированный массив: 

[-2,4,8,15,16,57]

Третий тест. Стартовый массив: 

[34,115,22,34,12,1,34]

Ожидаю отсортированный массив: 

[1,12,22,34,34,34,115]


*/


function f12() {
    let numbers = [3, 5, 15, 6, 2, 1];

    // console.log(typeof numbers[2]);
    // numbers.sort();

    numbers.sort((a, b) => a - b);

    document.querySelector('.out-12').innerHTML = 'let numbers = ' + numbers + ';';
}

document.querySelector('.b-12').onclick = f12;