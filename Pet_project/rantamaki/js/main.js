jQuery(document).ready(function ($) {
  // Fixed header
  //-----------------------------------------------
  $(window).scroll(function () {
    if (($(".header.fixed").length > 0)) {
      if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
        $("body").addClass("fixed-header-on");
      } else {
        $("body").removeClass("fixed-header-on");
      }
    };
  });

  $(window).load(function () {
    if (($(".header.fixed").length > 0)) {
      if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
        $("body").addClass("fixed-header-on");
      } else {
        $("body").removeClass("fixed-header-on");
      }
    };
  });

  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
  //Scroll Spy
  //-----------------------------------------------
  if ($(".scrollspy").length > 0) {
    $("body").addClass("scroll-spy");
    $('body').scrollspy({
      target: '.scrollspy',
      offset: 152
    });
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });



  //Carusel

  //Обработка клика на стрелку вправо
  $(document).on('click', ".carousel-button-right", function () {
    var carusel = $(this).parents('.carousel');
    right_carusel(carusel);
    return false;
  });
  //Обработка клика на стрелку влево
  $(document).on('click', ".carousel-button-left", function () {
    var carusel = $(this).parents('.carousel');
    left_carusel(carusel);
    return false;
  });

  function left_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items").css({
      "left": "-" + block_width + "px"
    });
    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
    $(carusel).find(".carousel-items").animate({
      left: "0px"
    }, 200);

  }

  function right_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items").animate({
      left: "-" + block_width + "px"
    }, 200, function () {
      $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
      $(carusel).find(".carousel-items").css({
        "left": "0px"
      });
    });
  }

  // $(function () {
  //   //Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
  //   auto_right('.carousel:first');
  // })

  // // Автоматическая прокрутка
  // function auto_right(carusel) {
  //   setInterval(function () {
  //     if (!$(carusel).is('.hover'))
  //       right_carusel(carusel);
  //   }, 3000)
  // }
  // Навели курсор на карусель
  $(document).on('mouseenter', '.carousel a', function () {
    $(this).addClass('hover')
  })
  //Убрали курсор с карусели
  $(document).on('mouseleave', '.carousel a', function () {
    $(this).removeClass('hover')
  })



  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // //Google Map
  // var get_latitude = $('#google-map').data('latitude');
  // var get_longitude = $('#google-map').data('longitude');

  // function initialize_google_map() {
  //   var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
  //   var mapOptions = {
  //     zoom: 14,
  //     scrollwheel: false,
  //     center: myLatlng
  //   };
  //   var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
  //   var marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: map
  //   });
  // }



  // google.maps.event.addDomListener(window, 'load', initialize_google_map);

  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap').children('.ymap__loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [61.438771, 30.197599], // координаты центра на карте
      zoom: 12, // коэффициент приближения карты
      controls: ['zoomControl'], // выбираем только те функции, которые необходимы при использовании
      behaviors: ['drag'],
    });
    var myPlacemarkTemp = new ymaps.Placemark([61.437331, 30.238830], {
      balloonContent: "Республика Карелия, Лахденпохский район, поселок Лумиваара, полуостров Харвиа",
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      //iconLayout: 'default#image',
      // Размеры метки.
      iconImageSize: [32, 40],
      preset: 'islands#icon',
      iconColor: '#56db40',
      // iconColor: '#999999',
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    var myPolyline = new ymaps.Polyline([
      // Указываем координаты вершин ломаной.
      [61.441036, 30.150689],
      [61.441023, 30.152114],
      [61.439389, 30.160383],
      [61.439346, 30.160725],
      [61.439262, 30.162778],
      [61.439228, 30.163054],
      [61.438064, 30.166771],
      [61.438245, 30.168476],
      [61.438230, 30.169172],
      [61.438153, 30.169677],
      [61.438144, 30.169659],
      [61.437638, 30.171454],
      [61.437331, 30.173716],
      [61.437216, 30.176940],
      [61.437728, 30.178891],
      [61.437713, 30.179684],
      [61.437311, 30.180729],
      [61.436822, 30.181197],
      [61.436704, 30.181653],
      [61.437026, 30.184913],
      [61.437239, 30.185867],
      [61.436764, 30.186748],
      [61.438354, 30.190600],
      [61.437870, 30.191568],
      [61.437493, 30.193644],
      [61.438273, 30.196505],
      [61.438602, 30.197380],
      [61.438561, 30.198161],
      [61.438261, 30.199013],
      [61.438213, 30.200060],
      [61.437940, 30.201607],
      [61.437734, 30.204169],
      [61.437408, 30.205084],
      [61.437102, 30.209029],
      [61.436881, 30.210154],
      [61.437109, 30.213506],
      [61.436709, 30.215191],
      [61.436612, 30.216415],
      [61.436310, 30.217796],
      [61.434973, 30.221002],
      [61.434857, 30.221626],
      [61.434315, 30.223145],
      [61.434029, 30.223289],
      [61.434017, 30.223295],
      [61.433157, 30.223054],
      [61.433127, 30.223035],
      [61.434051, 30.223287],
      [61.433130, 30.223006],
      [61.433170, 30.223101],
      [61.432701, 30.222711],
      [61.432433, 30.222901],
      [61.432045, 30.222964],
      [61.431765, 30.224279],
      [61.431733, 30.226601],
      [61.431717, 30.226577],
      [61.431008, 30.228014],
      [61.430502, 30.227768],
      [61.429614, 30.227703],
      [61.429267, 30.228172],
      [61.429228, 30.228511],
      [61.429329, 30.229805],
      [61.429258, 30.230760],
      [61.428590, 30.232476],
      [61.428603, 30.232993],
      [61.429325, 30.234389],
      [61.430309, 30.234903],
      [61.430691, 30.235573],
      [61.431125, 30.235777],
      [61.431125, 30.235777],
      [61.432822, 30.236410],
      [61.433321, 30.236539],
      [61.433690, 30.237080],
      [61.434433, 30.237457],
      [61.435967, 30.239384],
      [61.436477, 30.240458],
      [61.436921, 30.239879],
      [61.437331, 30.238830]
    ], {
      // Описываем свойства геообъекта.
      // Содержимое балуна.
      balloonContent: 'Путь до хутора "Рантамяки"'
    }, {
      // Задаем опции геообъекта.
      // Отключаем кнопку закрытия балуна.
      balloonCloseButton: false,
      // Цвет линии.
      strokeColor: "#ff0000",
      // Ширина линии.
      strokeWidth: 4,
      // Коэффициент прозрачности.
      strokeOpacity: 0.5
    });

    myMapTemp.geoObjects
      .add(myPolyline);

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { // Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function () {
    $('.ymap').mouseenter(function () {
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true;

        // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

        // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
          // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
          ymaps.load(init);
        });
      }
    });
  }

  $(function () {

    //Запускаем основную функцию
    ymap();

  });

  document.querySelector(".contact_map__img").addEventListener("click", () => {
    let copyText = document.getElementById("gpscoord");
    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  })

});