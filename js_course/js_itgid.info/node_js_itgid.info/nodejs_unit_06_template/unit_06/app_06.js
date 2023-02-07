// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.

const fs = require('fs');
const path = require('path');

function t1() {
    return fs.readFileSync('nodejs_unit_06_template/unit_06/home6/t1.txt', 'utf-8');
}

console.log(t1());

// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.


function t2(filePath) {
    return fs.readFileSync(filePath, 'utf-8');

}

let filePath = 'examplepatthfile';
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

function t3(folderName) {
    return fs.readdirSync(folderName)
        .map(item => item)
}

console.log(t3('example_folder'));


// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)


function t4(filepath) {
    return fs.statSync(filepath).size;
}

console.log(t4('example_file_path'));



// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

function t5(a) {
    return (a > 0 && a <= 1000) ? a + "B" : (a > 1000 && a <= 99999) ? Math.floor(a / 1000) + "kB" : (a > 100000 && a <= 999999) ? Math.floor(a / 100000) + "MB" : a;

}

console.log(t5(34958));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.

function t6(exFolder) {
    return fs.readdirSync(exFolder)
        .forEach(item => console.log(item + " " + t5(t4(exFolder + '/' + item)) + '\n'))

}

t6('example');


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 

function t7(exPath) {
    return path.extname(exPath)
}

console.log(t7('example_path'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

function t8(exPath) {
    return fs.readdirSync(exPath)
        .map(item => t4(exPath + '/' + item)).reduce((a, c) => a + c);

}
console.log(t8('example_path'));


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.

function t9(folder, file) {
    return t3(folder).includes(file);
}
console.log('folder', 'file');


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.

function t10(a) {
    return (fs.existsSync(a) == false || t4(a) == 0) ? fs.existsSync(a) : t4(a);
}

console.log(t10('filename'));