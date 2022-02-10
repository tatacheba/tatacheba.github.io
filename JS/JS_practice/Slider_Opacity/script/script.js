var btnPrevOpacity = document.querySelector('#gallery_opacity .prev'); //Переменная кнопки .prev #gallery_style
var btnNextOpacity = document.querySelector('#gallery_opacity .next'); //Переменная кнопки .next #gallery_style

var galleryAllOpacity = document.querySelectorAll('#gallery_opacity img'); // Массив img #gallery_style
var i = 0;


        // Функции для блока Gallery JS opacity
        btnNextOpacity.onclick = function() {
            galleryAllOpacity[i].className = '';
            i++;
            if (i >= galleryAllOpacity.length) {
                i = 0;
            }
            galleryAllOpacity[i].className = 'show';
        };
        btnPrevOpacity.onclick = function() {
            galleryAllOpacity[i].className = '';
            i--;
            if (i < 0) {
                i = galleryAllOpacity.length - 1;
            }
            galleryAllOpacity[i].className = 'show';
        };