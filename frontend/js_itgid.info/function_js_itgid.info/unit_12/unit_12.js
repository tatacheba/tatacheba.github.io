// Task 1
// Напишите анонимную функцию применяя замыкание. Внутри функции создайте переменную равную 75, и повесьте на кнопку .b-1 событие клик и функцию, которая увеличивает переменную на 1 и присваивает блоку .out-1 ширину равную переменной + 'px'. Анонимная функция замыкание должна запускаться при загрузке файла.
(function () {
    let w = 75; // тут ваша переменная
    document.querySelector('.b-1').onclick = function () {
        w++;
        document.querySelector('.out-1').style.width = w + 'px';

        // увеличиваем на 1
        // присваиваем .out-1 новую ширину
    }
})();

// тут прописываете запуск

// Task 2
// Усложним предыдущую задачу. Создайте анонимную функцию замыкание, в которой создайте переменные w = 75 и h = 30. Создайте две функции, одна запускается при клике на кнопку .b-2-1 и увеличивает ширину блока .out-2, вторая запускается при клике на кнопку .b-2-2 и увеличивает высоту блока .out-2. Анонимная функция замыкание должна запускаться при загрузке файла.

(function () {
    let w = 75;
    let h = 30;
    document.querySelector('.b-2-1').onclick = function () {
        w++;
        document.querySelector('.out-2').style.width = w + 'px';
    }
    document.querySelector('.b-2-2').onclick = function () {
        h++;
        document.querySelector('.out-2').style.height = h + 'px';
    }

})();


// Task 3.
// В скобках напишите код функции замыкания, которая создает переменную count = 0 и возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его. 

let count3 = (function () {
    let count = 0;
    return function () {
        return count++;
    }
    // тут ваш код
})();
console.log(count3());
console.log(count3());


// Task 4
// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его. 

function createCount(arg = 0) {
    let count = arg;
    return function () {
        return count++;
    }
};

let count4 = createCount(444);

console.log(count4());
console.log(count4());


// Task 5
// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит в себе две функции. Первая функция randomInteger(min, max) возрвщает случайное целое число в диапазоне, а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать случайный символ из массива переданного функции generatePassword в качестве аргумента. 

function generatePassword(arr) {
    const randomInteger = function (min, max) { //функция рандомного числа
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    return function () {
        return arr[randomInteger(0, arr.length - 1)];
    }
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);
console.log(password());


// Task 6
// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr), и длину пароля(n). Функция  содержит в себе две функции. Первая функция randomInteger(min, max) , а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr. Символы выбираются случайным образом. 

function generatePassword2(arr, n) {
    const randomInteger = function (min, max) { //функция рандомного числа
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    return function () {
        let out = '';
        for (let i = 0; i < n; i++) {
            out += arr[randomInteger(0, arr.length - 1)];
        }
        return out;
    }
}

let password2 = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 4);
console.log(password2());



// Task 7
// Напишите функцию замыкание createElement, которая принимает 2 аргумента, первый название тега (elem), второй текст в теге (text). Функция createElement должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст. Созданный тег должен быть возвращен. 

function generateElement(elem, text) {
    return function () {
        let out = document.createElement(`${elem}`);
        out.innerHTML = `${text}`;
        return out;
    }
}

let divCreator = generateElement('div', 'hello');
let spanCreator = generateElement('span', 'hi');
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(spanCreator());
document.querySelector('.out-7').append(spanCreator());

// Task 8
//  Напишите функцию замыкание createElement2, которая принимает 1 аргумент -  название тега (elem). Функция createElement2 должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст переданный в данную функцию как аргумент text. Созданный тег должен быть возвращен. 

function generateElement2(elem) {
    // return function (t) {
    // }
    return function (t) {
        let out = document.createElement(`${elem}`);
        out.innerHTML = `${t}`;
        return out;
    }
}

let divCreator2 = generateElement2('div');
let spanCreator2 = generateElement2('span');
document.querySelector('.out-8').append(divCreator2('ex1'));
document.querySelector('.out-8').append(divCreator2('ex2'));
document.querySelector('.out-8').append(spanCreator2('ex3'));
document.querySelector('.out-8').append(spanCreator2('ex4'));

// Task 9
// Напишите функцию замыкание generateDay, внутри которой создан массив days с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели. 

function generateDay() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    return function (n) {
        return days[n - 1];
    };
}

const day = generateDay();
console.log(day(2))
console.log(day(3))



// Task 10
// Напишите функцию замыкание generateMonth, внутри которой создан массив month с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает month[n-1] день недели. 

function generateMonth() {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return function (n) {
        return month[n - 1];
    };
}
const month = generateMonth();
// console.log(generateMonth(2));
// console.log(generateMonth(3));
console.log(month(2));
console.log(month(3));


decodeMorse = function (morseCode) {
    //your code here
    var alphabet = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "!": "-.-.--"

    };
    let arr = morseCode.trim().split("   ").map(a => a.split(" "));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].map(elem => {
            for (const key in alphabet) {
                if (elem == alphabet[key])
                    return key;
            }
        }).join("");
    }
    return arr.join(" ")
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));



function twoSum(numbers, target) {
    let ind = [];
    // your code
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                ind.push(i);
                ind.push(j);
                return ind;
            }
        }
    }
}


// ...

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));

/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function (n) {
    let binary = (n % 2).toString();
    for (; n > 1;) {
        n = parseInt(n / 2);
        binary = (n % 2) + (binary);
    }
    return binary.split("").filter(e => e == 1).length;

    // Program Me
};
console.log(countBits(10), 2);

function likes(names) {
    switch (names.length) {
        case 0: // if (x === 'value1')
            return "no one likes this";

        case 1: // if (x === 'value2')
            return names[0] + " likes this";

        case 2: // if (x === 'value2')
            return names[0] + " and " + names[1] + " like this";

        case 3: // if (x === 'value2')
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";

        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
    // TODO
}

console.log(likes([]));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));



/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
    let d = new Date(seconds * 1000);
    zeroPad = function (nNum, nPad) {
        return ('' + (Math.pow(10, nPad) + nNum)).slice(1);
    };
    return `${zeroPad(Math.floor(seconds/3600),2)}:${ zeroPad(d.getMinutes(), 2)}:${zeroPad(d.getUTCSeconds(),2)}`;
}

console.log("d 0 " + humanReadable(0));
console.log("d 59 " + humanReadable(59));
console.log("d 60 " + humanReadable(60));
console.log("d 90 " + humanReadable(90));
console.log("d 3599 " + humanReadable(3599));
console.log("d 3600 " + humanReadable(3600));
console.log("d 45296 " + humanReadable(45296));
console.log("d 86399 " + humanReadable(86399));
console.log("d 86400 " + humanReadable(86400));
console.log("d 359999 " + humanReadable(359999));

/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers) {

    // var even = int.filter(a=>a%2==0);
    // var odd = int.filter(a=>a%2!==0);
    // return even.length==1? even[0] : odd[0];


    if (integers.filter(e => e % 2 == 0).length > 1) {
        let even = integers.filter((e, i) => {
            if (+e % 2 != 0) return true;
        })
        return even[0];
    } else if (integers.filter(e => e % 2 != 0).length > 1) {
        let odd = integers.filter((e, i) => {
            if (+e % 2 == 0) return true;
        })
        return odd[0];
    }
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
console.log(findOutlier([-109105834, -101410953, -191584825, -5078115, 104842553, -48621089, 128735173, -176928347, 103324157, 34130293, -155869853, -192348741, 4223415, -79637565, 165594527, -21298225, -166289111, 70568469, -98416681, -172502969, 94764709, -197936623, -45882661, 88403189, -175758207, -41015429, -42079875, 98400319, 27344523, 82640881, -86045795, -29596119, -67506611, 119244321, 112217245, -169291355, -127389043, 15318797, -81777039, -40241127, 89666685, -13528541]));


/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.

FUNDAMENTALS

*/
function nbDig(n, d) {
    let b = [];
    for (let i = 0; i <= n; i++) {
        b.push(Math.pow(i, 2));
    }
    return (b.join("").split("").filter(e => e == d)).length;
}

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));


/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {

    // const cakes = (needs, has) => Math.min(
    //     ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
    //   )


    let match = [];

    const a = Object.keys(available);
    const r = Object.keys(recipe);
    r.forEach(e => {
        if (a.includes(e)) {
            match.push(count(recipe[e], available[e]));
        } else return 0;
    })
    if (match.length == r.length) {
        return Math.min(...match);
    } else return 0;

    function count(aRecipe, bAvailable) {
        let c = 0;
        if (aRecipe <= bAvailable) {
            while (aRecipe <= bAvailable) {
                bAvailable = bAvailable - aRecipe;
                c++;
            }
            return c;
        } else {
            return 0;
        }
    }
}

let recipe = {
    flour: 500,
    sugar: 200,
    eggs: 1
};
let available = {
    flour: 1200,
    sugar: 1200,
    eggs: 5,
    milk: 200
};
console.log(cakes(recipe, available));

recipe = {
    apples: 3,
    flour: 300,
    sugar: 150,
    milk: 100,
    oil: 100
};
available = {
    sugar: 500,
    flour: 2000,
    milk: 2000
};
console.log(cakes(recipe, available));

/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

var uniqueInOrder = function (iterable) {
    let a = [...iterable];
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1] & i != a.length) {} else {
            arr.push(a[i]);
        }
    }
    return arr;
}

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

function persistence(num) {
    let count = 0;
    res(num);

    function res(arr) {
        arr = arr.toString().split("");
        if (arr.length > 1) {
            count++;
            return res(arr.reduce((a, e) => a * e));
        } else {
            return count;
        };
    }
    return count;
}
console.group("persistence(arr)");

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
console.groupEnd();


/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.*/

function countSmileys(arr) {
    // return arr.filter(e => /^[:;][-~]?[)D]$/.test(e)).length;
    let m = [];
    m = arr.filter(e => {
        if (e.length == 3 && (e[0] == ";" || e[0] == ":") && (e[1] == "-" || e[1] == "~") && (e[2] == "D" || e[2] == ")")) {
            return e;
        }
        if ((e[0] == ";" || e[0] == ":") && (e[1] == "D" || e[1] == ")")) {
            return e;
        }
    })
    return m.length;


}
console.group("countSmileys(arr)");
// console.log(countSmileys([]));
console.log("4 " + countSmileys([':D', ':~)', ';~D', ':)']));
console.log("2 " + countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log("1 " + countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log("3 " + countSmileys([":~>", ":~>", ":~D", ";>", ":o(", ":~)", ";~)"]));
console.log("2 " + countSmileys([':o)', ':~( ', ';>', ':)', ';)', ':( ', ':(']));
console.log("4 " + countSmileys([';~>', ';)', ':D', ';)', ':(', ':)', ':(']));
console.log("0 " + countSmileys([';->', ';>', ':>', ':~(', ':~>', ';o)', ';(']));
console.log("5 " + countSmileys([':D', ';D', ';-)', ';~D', ';oD', ';~>', ':~)']));
console.log("4 " + countSmileys([':~)', ':~)', ':>', ':>', ':)', ';o)', ';)']));
console.log("1 " + countSmileys([';~>', ';>', ':D', ';~(', ';(', ';->', ':o)']));
console.log("2 " + countSmileys([';~>', ';)', ';>', ';o)', ';)', ':o>', ';>']));
console.log("4 " + countSmileys([':o)', ':~D', ';D', ';~>', ':)', ':~D', ':(']));
console.log("3 " + countSmileys([';~D', ':~(', ':D', ':)', ';o)', ';o(', ':>']));
console.log("1 " + countSmileys([';>', ';~>', ';->', ':o)', ';>', ';~>', ':)']));
console.log("3 " + countSmileys([';o)', ';o>', ';~(', ':-D', ':>', ';-)', ':~)']));
console.groupEnd();

/**Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four"). */

function RomanNumerals() {
    function toRoman(n) {}

    function fromRoman(n) {}
}
console.group("RomanNumerals");
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.fromRoman('XXI'));
console.groupEnd();