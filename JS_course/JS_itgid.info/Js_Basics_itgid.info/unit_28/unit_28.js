 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.


 //  class Goods {
 //      constructor(name, amount, image, count) {
 //          this.name = name;
 //          this.amount = amount;
 //      }
 //  };
 //  let goods = new Goods();
 //  console.log(goods);

 //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 class Goods {
     constructor(name, amount, image, count) {
         this.name = name;
         this.amount = amount;
         this.image = image;
         this.count = count;
     }
 };
 let goods = new Goods();
 //  console.log(goods);


 // Task 3.

 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).



 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

 //  class Goods2 extends Goods {
 //      constructor(name, amount, image, count, out) {
 //          super(name, amount, image, count)
 //          this.out = out;
 //      }


 //      draw() {

 //          var t0 = performance.now();
 //          let div = document.createElement('div');
 //          div.classList.add(`${this.out}`);
 //          let task = document.querySelector('#task-4');
 //          div.innerHTML = `<img src="${this.image}" alt="" class="img-12-min"><p class="name">${this.name}</p><p             class="amount">количество <span>${this.amount}</span></p><p class="count">доступное количество <span>${this.count}</span></p>`;
 //          task.appendChild(div);
 //          var t1 = performance.now();
 //          console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
 //      }
 //  }

 //  let n = new Goods2('Черепушка', 5, '/unit_28/img/1.png', 7, 'out-4');
 //  n.draw();



 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.


 class Goods2 extends Goods {
     constructor(name, amount, image, count, out, sale) {
         super(name, amount, image, count)
         this.out = out;
         this.sale = sale;
     }

     draw() {
         var t0 = performance.now();
         let div = document.createElement('div');
         div.classList.add(`${this.out}`);
         document.querySelector('#task-3').appendChild(div);
         div.innerHTML = `<img src="${this.image}" alt="" class="img-12-min"><p class="name">${this.name}</p><p class="amount">количество <span>${this.amount}</span></p><p class="count">доступное количество <span>${this.count}</span></p>`;
         if (this.sale) {
             div.innerHTML += `<p class="sale"><span>Распродажа</span></p>`;
         }
         var t1 = performance.now();
         console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:');
     }

 }

 //  let n = new Goods2('Черепушка', 5, '/unit_28/img/1.png', 7, 'out-3', true);
 //  n.draw();


 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

 //  class Goods3 extends Goods2 {
 //      constructor(name, amount, image, count, out, sale) {
 //          super(name, amount, image, count, out, sale)
 //      }
 //  };
 let goods3 = new Goods2('Черепушка', 5, '/unit_28/img/1.png', 7, 'out-3', true);
 goods3.draw();

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

 class Valid {
     constructor(email, password, isValid) {
         this.email = email;
         this.password = password;
         this.isValid = isValid;

     }

     validate() {
         if (this.password.length > 6) {
             this.isValid = true;
         }
     }
 };
 //  let b = new Valid('email', '60890', false);
 //  b.validate();

 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

 let v = new Valid('email', 'jjcfm', false);
 v.validate();
 console.log(v.isValid);


 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

 let f = new Valid('email', 'jddddcfm', false);
 f.validate();
 console.log(f.isValid);

 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

 class Valid2 extends Valid {
     constructor(email, password, isValid, emaiError, passwordError) {
         super(email, password, isValid);
         this.emaiError = emaiError;
         this.passwordError = passwordError;

     }
     validate() {
         if (this.email == undefined || this.password.length <= 6) {
             this.isValid = false;
             this.emaiError = 'email empty';
             this.passwordError = 'min length 6';
         }

     };
 }

 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

 let valid2 = new Valid2('', '1234567', '', '', '');
 valid2.validate();
 console.log(valid2.emaiError);
 console.log(valid2.passwordError);

 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

 let valid3 = new Valid2('email', '12345678', '', '', '');
 valid3.validate();
 console.log(valid3);
 console.log(valid3.emaiError);
 console.log(valid3.passwordError);