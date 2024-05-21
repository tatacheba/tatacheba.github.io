        var btnPrevStyle = document.querySelector('#gallery_style .prev'); //Переменная кнопки .prev #gallery_style
        var btnNextStyle = document.querySelector('#gallery_style .next'); //Переменная кнопки .next #gallery_style

        var galleryAllStyle = document.querySelectorAll('#gallery_style img'); // Массив  img #gallery_style

        var i = 0;

        // Функции для блока Gallery JS style.display

        btnNextStyle.onclick = function() {
            galleryAllStyle[i].style.display = 'none';
            i++;
            if (i >= galleryAllStyle.length) {
                i = 0;
            }
            galleryAllStyle[i].style.display = 'block';
        };

        btnPrevStyle.onclick = function() {
            galleryAllStyle[i].style.display = 'none';
            i--;
            if (i < 0) {
                i = galleryAllStyle.length - 1;
            }
            galleryAllStyle[i].style.display = 'block';
        };



