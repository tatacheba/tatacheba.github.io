function sliderFunction() {
    const proverb = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        "Не спеши выполнять приказ — его могут отменить.",
        "Тому, кто сам ничего не делает, все кажется по плечу.",
        "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        "Не будь незаменимым — тебя никогда не повысят.",
        "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];

    const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090']; // массив с цветами для блока слайдера

    let count = 0;
    let slideCollection;

    const pressOnButtonForStart = function () { //функция запуска на кнопку 
        // console.log(this);
        // console.log(event);
        // event.stopPropagation();// не совсем понятно для чего этот метод 
        this.classList.add('hide'); //скрыть кнопку 
        startSlide(); //запуск функции запуска слайдера
    }

    const startSlide = function () { //функция запуска слайдера
        const pageBody = document.querySelector('body'); // переменная тело страницы
        for (let i = 0; i < proverb.length; i++) { //перебор пословиц 
            let divForText = document.createElement('div'); //переменная создет div в котором будет div с текстом => divForText
            divForText.classList.add('slide'); //добавлем в divForText класс slide
            if (i !== 0) divForText.classList.add('hide'); //если i!=0 то добавить класс hide в divForText
            if (i === 0) divForText.style.background = bgColor[randomInteger(0, bgColor.length - 1)]; //если i==0 то присвоть цвет блоку
            let textInDivForText = document.createElement('div'); //создать блок с текстом textInDivForText
            textInDivForText.textContent = proverb[i]; // написать текст из массива пословиц в textInDivForText
            divForText.append(textInDivForText); //добавить в divForText => textInDivForText
            pageBody.append(divForText); //добавть в pageBody => divForText
        }
        // outField.onclick = showSlide;
        pageBody.addEventListener('click', () => {
            showSlide(); // при клике на body запускается функция showSlide()
        });
        slideCollection = document.querySelectorAll('.slide'); //NodeList  divов с классом .slide
    }

    const showSlide = function () { //
        hideSingleSlide(count);
        if (count + 1 < proverb.length) {
            count++;
        } else {
            count = 0;
        }
        showSingleSlide(count);
    }

    const showSingleSlide = function (n) { //функция показа страницы слайда
        slideCollection[n].classList.remove('hide');
        slideCollection[n].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
    }

    const hideSingleSlide = function (n) { //функция скрытия страницы слайда
        slideCollection[n].classList.add('hide');

    }

    const randomInteger = function (min, max) { //функция рандомного числа
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }


    document.querySelector('.btn-start').addEventListener('click', () => {
        pressOnButtonForStart.call(document.querySelector('.btn-start'));
    });
    // document.querySelector('.btn-start').onclick = startFunction;

};

document.addEventListener("DOMContentLoaded", sliderFunction); // запуск функции sliderFunction после загрузки всей страницы



/*

//my own project

function sliderFunction() {
    //массив пословиц
    const proverb = [
        'Одно доброе слово может согревать три зимних месяца',
        'Учись у вчера, живи сегодня, надейся на завтра',
        'Легко начинать, но тяжело продолжать',
        'Страх настолько глубок, насколько позволяет наш разум',
        'Быстро – это медленно, но без перерывов',
        'Сделай все, что сможешь, а в остальном положись на судьбу',
        'Спросить — стыдно на минуту, а не знать — стыд на всю жизнь',
        'Кто пьет, тот не знает о вреде вина; кто не пьет, тот не знает о его пользе',
        'Хвастовство начинается там, где заканчивается мудрость',
        'Тот, кто улыбается вместо того, чтобы злиться, всегда сильнее',
        'Кто любит людей, тот долго проживет'

    ];
    //массив цвета страницы
    const color = ['linear-gradient(to right, #61bfa1,#1cf315,#00e912)', 'linear-gradient( 135deg, #72EDF2 10%, #00FFFF 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #FF69B4 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #FF00FF 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #0000CD 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #800000 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #FFF0F5 100%)', 'linear-gradient( 135deg, #72EDF2 10%,#00FA9A 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #B22222 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #1E90FF 100%)', 'linear-gradient( 135deg, #72EDF2 10%, #191970 100%)'];

    let divBody = document.querySelector('body'); //переменная тело страницы
    let btnStart = document.querySelector('.btn-start'); //переменная кнопка
    let count = 0; //счетчик

    const hideButtonForStart = function () { //функция скрытия кнопки
        this.classList.add('hide'); //добавить класс hide в кнопку
        divBody.addEventListener('click', () => { // при нажатии на body запустить функцию запуска слайдера startSlider
            startSlider(); //
        });
    }

    const startSlider = function () { //функция запуска слайдера
        let blockBodySlide = document.querySelector('body div.slide'); //переменная блока с классом slide
        if (blockBodySlide != null) { //если переменная блока с классом slide есть то удалить этот блок
            blockBodySlide.remove();
        }
        createDivSlide().textContent = proverb[count]; //записать в блок для текста сам текст из массива proverb по счетчику
        if (count < proverb.length - 1) { //начало счетчика, если счетчик меньше длины массива proverb то прибавить 1, если больше или равно то скинуть на начало, тоесть приравнять к 0
            count++;
        } else {
            count = 0;
        }
    }

    const createDivSlide = function () { //функция создания блока для текста и доваления ее на страницу
        let divForText = document.createElement('div'); //создать div в переменную divForText
        divForText.classList.add('slide'); //добавить в divForText класс slide
        divBody.append(divForText); //к body прикрепить divForText
        divBody.style.background = color[randomInteger(0, color.length - 1)]; //покрасить фон в рандомный цвет
        return divForText; // вернуть divForText из функции
    }
    
    const randomInteger = function (min, max) { //функция рандомного числа
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    btnStart.addEventListener('click', () => { //при клике на кнопку запустить функцию hideButtonForStart
        hideButtonForStart.call(btnStart); //
    });
};
document.addEventListener("DOMContentLoaded", sliderFunction); // запуск функции sliderFunction после загрузки всей страницы
 */