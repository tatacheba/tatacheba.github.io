// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1')
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2')
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-1');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-1').addEventListener('click', t1)
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {

    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=3&num1=2&num2=9')
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&auth=DdC33D7d2C2a7&action=4&num1=2&num2=9')
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-2');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-2').addEventListener('click', t2);
// ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=5')
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&auth=DdC33D7d2C2a7&action=6&num1=3&num2=9')
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-3');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-3').addEventListener('click', t3);
// ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=7')
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&auth=DdC33D7d2C2a7&action=8&year=2000')
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-4');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-4').addEventListener('click', t4);
// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=1'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=2'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-5');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-5').addEventListener('click', t5);

// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {

    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=3&num1=3&num2=9'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=4&num1=3&num2=9'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-6');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-6').addEventListener('click', t6);

// ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=5'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=6&num1=3&num2=9'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {

        let out = document.querySelector('.out-7');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-7').addEventListener('click', t7);

// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let action1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=7'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    let action2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'auth=DdC33D7d2C2a7&action=8&year=2000'
            })
            .then(data => {
                resolve(data.text());
            })

    });

    Promise.all([action1, action2]).then(value => {
        let out = document.querySelector('.out-8');
        value.forEach(elem => {
            return out.innerHTML += `${elem} `;
        });
    });
}
document.querySelector('.b-8').addEventListener('click', t8);

// ваше событие здесь!!!