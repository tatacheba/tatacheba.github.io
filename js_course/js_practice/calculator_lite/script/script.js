window.onload = function (e) {

  // Переменные
  var num1 = document.querySelector('input[name=num1]');
  var num2 = document.querySelector('input[name=num2]');
  var btnCalc = document.querySelectorAll('button')
  var spanResult = document.querySelector('.result');
  var clickInput = document.querySelectorAll('input[type=text]');

  // Функция клика на кнопку
  for (var i = 0; i < btnCalc.length; i++) {
    btnCalc[i].onclick = calcResult; //при клике на кнопку вызывается функция calcResult

    // Функция расчетов
    function calcResult() {
      this.setAttribute('disabled', ''); //Вставить атрибут disabled блокирующая кнопку
      this.setAttribute('style', 'background: gainsboro;'); //Вставить атрибут style изменяющая цвет кнопки

      /* a = parseInt(num1.value); // Преобразование в цифры вводимые данные и занести в переменные для упрощения видимости кода
       b = parseInt(num2.value);*/
      // console.log(num1);

      a = +num1.value;
      b = +num2.value;

      inputCrear = function () {
        num1.value = "";
        num2.value = "";
      }


      var name = this.getAttribute('name');

      if (name == 'summ') {
        // console.log(name);
        var result = a + b;
        spanResult.innerHTML = result;
        inputCrear();
      } else if (name == 'div') {
        var result = a / b;
        inputCrear();
        if (b == 0) {
          spanResult.innerHTML = "Не определено";
          inputCrear();
        } else {
          spanResult.innerHTML = result;
          inputCrear();
        };
      } else if (name == 'min') {
        var result = a - b;
        spanResult.innerHTML = result;
        inputCrear();
      } else if (name == 'mult') {
        var result = a * b;
        spanResult.innerHTML = result;
        inputCrear();
      };
    };
  };

  for (var j = 0; j < clickInput.length; j++) {
    clickInput[j].onclick = function () {
      for (var i = 0; i < btnCalc.length; i++) {
        btnCalc[i].removeAttribute('disabled');
        btnCalc[i].removeAttribute('style', 'background: gainsboro;');
      };
    };
  };
};