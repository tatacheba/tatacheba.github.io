
window.onload = function () {
    let navBlock = document.querySelectorAll('nav>div');
    let sectionOn = document.querySelectorAll('section')
    let sectionContact = document.querySelector('#contact-me');
    let sectionSkill = document.querySelector('#skill-me');
    let sectionTest = document.querySelector('#test-me');
    let sectionAbout = document.querySelector('#about-me');
    let sectionResume = document.querySelector('#resume-me');


    for (let i = 0; i < navBlock.length; i++) {
        navBlock[i].onclick = addActive;

        function addActive() {
            removeActive();
            removeActiveNav();
            removeActiveParagraph();
            removeActiveSlider();
            removeActiveSimbol();

            document.querySelector('.block-simbol').classList.remove('active');
            let a = this.getAttribute('class');
            switch (a) {
                case 'contact':
                    sectionContact.classList.add('active');
                    this.classList.add('active');
                    break;
                case 'skill':
                    sectionSkill.classList.add('active');
                    this.classList.add('active');
                    break;
                case 'test':
                    sectionTest.classList.add('active');
                    document.querySelector('.block-simbol').classList.add('active');
                    this.classList.add('active');
                    simbolActiveA();
                    break;
                case 'about':
                    sectionAbout.classList.add('active');
                    this.classList.add('active');
                    break;
                case 'resume':
                    sectionResume.classList.add('active');
                    this.classList.add('active');
                    break;
            };
        };

        function removeActive() {
            for (let j = 0; j < sectionOn.length; j++) {
                sectionOn[j].classList.remove('active');
            };
        };

        function removeActiveNav() {
            for (let j = 0; j < navBlock.length; j++) {
                navBlock[j].classList.remove('active');
            };
        };
    };

    // Пока не умею в ООП
    // Slider блока А

    var btnPrevOpacityA = document.querySelector('#gallery_a .prev'); //Переменная кнопки .prev #gallery_style
    var btnNextOpacityA = document.querySelector('#gallery_a .next'); //Переменная кнопки .next #gallery_style
    var galleryAllOpacityA = document.querySelectorAll('#gallery_a .photos img'); // Массив img #gallery_style
    var galleryAllOpacity = document.querySelectorAll('.slider .photos img'); // Массив img #gallery_style
    var i = 0;

    // Функции для блока Gallery JS opacity
    btnNextOpacityA.onclick = function () {
        removeShow();
        i++;
        if (i >= galleryAllOpacityA.length) {
            i = 0;

        }
        galleryAllOpacityA[i].classList.add('show');

    };
    btnPrevOpacityA.onclick = function () {
        removeShow();
        i--;
        if (i < 0) {
            i = galleryAllOpacityA.length - 1;

        }
        galleryAllOpacityA[i].classList.add('show');
    };

    function removeShow() {
        for (let j = 0; j < galleryAllOpacity.length; j++) {
            galleryAllOpacity[j].classList.remove('show');
        };
    };

    // Пока не умею в ООП
    // Slider блока Б

    var btnPrevOpacityB = document.querySelector('#gallery_b .prev'); //Переменная кнопки .prev #gallery_style
    var btnNextOpacityB = document.querySelector('#gallery_b .next'); //Переменная кнопки .next #gallery_style
    var galleryAllOpacityB = document.querySelectorAll('#gallery_b .photos img'); // Массив img #gallery_style
    var i = 0;

    // Функции для блока Gallery JS opacity
    btnNextOpacityB.onclick = function () {
        removeShow();
        i++;
        if (i >= galleryAllOpacityB.length) {
            i = 0;

        }
        galleryAllOpacityB[i].classList.add('show');

    };
    btnPrevOpacityB.onclick = function () {
        removeShow();
        i--;
        if (i < 0) {
            i = galleryAllOpacityB.length - 1;

        }
        galleryAllOpacityB[i].classList.add('show');
    };


    // Пока не умею в ООП
    // Slider блока В

    var btnPrevOpacityV = document.querySelector('#gallery_v .prev'); //Переменная кнопки .prev #gallery_style
    var btnNextOpacityV = document.querySelector('#gallery_v .next'); //Переменная кнопки .next #gallery_style
    var galleryAllOpacityV = document.querySelectorAll('#gallery_v .photos img'); // Массив img #gallery_style
    var i = 0;

    // Функции для блока Gallery JS opacity
    btnNextOpacityV.onclick = function () {
        removeShow();
        i++;
        if (i >= galleryAllOpacityV.length) {
            i = 0;

        }
        galleryAllOpacityV[i].classList.add('show');

    };
    btnPrevOpacityV.onclick = function () {
        removeShow();
        i--;
        if (i < 0) {
            i = galleryAllOpacityV.length - 1;

        }
        galleryAllOpacityV[i].classList.add('show');
    };


    // Функции для тестового блока


    let simbolAll = document.querySelectorAll('.block-simbol div');
    let paragraphSimbol = document.querySelectorAll('.test-me_content p');
    let sliderAll = document.querySelectorAll('.test-me_content .slider');


    for (let i = 0; i < simbolAll.length; i++) {
        simbolAll[i].onclick = paragraphVisible; //при клике на символ А Б или В ==> функция paragraphVisible 

    };

    function simbolActiveA() {
        removeShow();
        document.querySelector('.test-me_content .sim_a p').classList.add('active');
        document.querySelector('#gallery_a').style.visibility = 'visible';
        document.querySelector('#gallery_a .photos .gallery_a:first-child').classList.add('show');
        document.querySelector('.test-me_content .simbol_a .sim').classList.add('active');

    };

    function simbolActiveB() {
        removeShow();
        document.querySelector('.test-me_content .sim_b p').classList.add('active');
        document.querySelector('#gallery_b').style.visibility = 'visible';
        document.querySelector('#gallery_b .photos .gallery_b:first-child').classList.add('show');
        document.querySelector('.test-me_content .simbol_b .sim').classList.add('active');

    };

    function simbolActiveV() {
        removeShow();
        document.querySelector('.test-me_content .sim_v p').classList.add('active');
        document.querySelector('#gallery_v').style.visibility = 'visible';
        document.querySelector('#gallery_v .photos .gallery_v:first-child').classList.add('show');
        document.querySelector('.test-me_content .simbol_v .sim').classList.add('active');

    };


    function paragraphVisible() {
        let a = this.getAttribute('class'); // присвоение переменной наличие атрибута class в блоке символов А Б В
        removeActiveParagraph(); // Запуск функции для удаления active в р при клике на символ А Б В
        removeActiveSlider();
        removeActiveSimbol();

        switch (a) {
            case 'simbol_a':
                simbolActiveA();
                break;
            case 'simbol_b':
                simbolActiveB();
                break;
            case 'simbol_v':
                simbolActiveV();
                break;
        };
    };

    function removeActiveParagraph() {
        for (let j = 0; j < paragraphSimbol.length; j++) {
            paragraphSimbol[j].classList.remove('active');

        };
    };

    function removeActiveSimbol() {
        for (let j = 0; j < simbolAll.length; j++) {
            simbolAll[j].classList.remove('active');

        };
    };


    function removeActiveSlider() {
        for (let j = 0; j < sliderAll.length; j++) {
            sliderAll[j].style.visibility = 'hidden';

        };
    };
};

// Popup

let popupActive = document.querySelector('.popup');
let galleryPopup = document.querySelectorAll('.photos img');
let imgPopup = document.querySelector('.popup img');
let popupClose = document.querySelector('.popup-close');

for (let i = 0; i < galleryPopup.length; i++) {
    galleryPopup[i].onclick = popupActiveFun;
};

function popupActiveFun() {
    console.log(4);
    console.log(this.classList.contains('show'));
    popupActive.style.display = "flex";
    if (this.classList.contains('show')) {
        let path = this.getAttribute('src');
        console.log(path);

        imgPopup.setAttribute('src', path);
    };

};
popupActive.onclick = function () {
    popupActive.style.display = "none";
}