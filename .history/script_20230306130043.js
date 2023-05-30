'use strict';
// const Person = function (firstName, birthYear) {
//   console.log(this); // Person {}
//   //   // SYNTAX Instance properties. Оператор instanceof проверяет, принадлежит ли объект к определённому классу. Другими словами, object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.
//   //   this.firstName = firstName;
//   //   this.birthYear = birthYear;

//   //   // НИКОГДА ТАК НЕ НЕ ДЕЛАТЬ
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// // ЗА КАДРОМ:
// // 1. Создаётся new {} (пустой объект)
// // 2. вызывается функция, this = {}
// // 3. {} ссылается на прототип
// // 4. функция автоматически возвращает {} (пустой объект). Но уже этому объекту не обязательно быть пустым, в этом и есть трюк

// ////
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
// console.log(jack); //Person {firstName: 'Jack', birthYear: 1975}

// console.log(jonas instanceof Person); // true

// Person.hey = function () {
//   console.log('Hey there 🖐');
//   console.log(this);
// };
// Person.hey();

// LECT
// console.log(Person.prototype); // constructor ƒ (firstName, birthYear)

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge(); // 46
// matilda.calcAge(); // 20

// console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
// console.log(jonas.__proto__ === Person.prototype); // true

// console.log(Person.prototype.isPrototypeOf(jonas)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

// console.log(jonas.hasOwnProperty('firstName')); // true
// console.log(jonas.hasOwnProperty('species')); // false

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)
// /////

// const arr = [3, 4, 3, 5, 6, 5, 7, 5, 7]; // new Array === []
// console.log(arr.__proto__); // все доступные методы для массивов
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__); // constructor: ƒ Object()
// console.log(arr.__proto__.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); // [3, 4, 5, 6, 7]

// //
// const h1 = document.querySelector('h1');

// console.dir(x => x + 1);

// CHALLENGE #1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   // console.log(this);
// };
// Car.prototype.accelerator = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerator();
// bmw.brake();
// bmw.accelerator();
// bmw.brake();
// bmw.accelerator();
// bmw.brake();
// bmw.accelerator();

/// Learn JS
// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk');
//   },
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };
// rabbit.walk = function () {
//   console.log('Rabbit! Bounce- bounce! ');
// };
// // rabbit.__proto__ = animal;   // строка (*) устанавливает animal как прототип для rabbit.
// // console.log(rabbit.eats); // true
// // console.log(rabbit.jumps); // true

// // rabbit.walk();  // Animal walk

// // longEar.walk(); // Animal walk  // walk взят из цепочки прототипов
// // console.log(longEar.jumps); // true
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
/////////////////////////////////////////
// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;

//   this.calcArea = function () {
//     console.log(this.width * this.height);
//   };
// };

// const rect = new Rectangle(5, 10);
// console.log(rect.calcArea());

// const Person = function (firstName, birthYear) {
//   //   console.log(this); // Person {}
//   // SYNTAX Instance properties. Оператор instanceof проверяет, принадлежит ли объект к определённому классу. Другими словами, object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // НИКОГДА ТАК НЕ НЕ ДЕЛАТЬ
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const isPalindrome = str => str === str.split('').reverse().join('');
// console.log(isPalindrome('тест')); // false
// console.log(isPalindrome('шалаш')); // true

//////////////// WEB DEV OOP   //////////////
// const bmwAuto = {
//   name,
//   model,
//   year,
//   getAutoType() {
//     return `${this.name} ${this.model} - ${this.year}`;
//   },
// };

///

// class Auto {
//   constructor(name, model, year) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }
//   getAutoType() {
//     return `${this.name} ${this.model} - ${this.year}`;
//   }
// }

// // Instance creation
// const bmwAuto = new Auto('BMW', 'X6', 2021); // каждый из этих экземпляров - это отдельный объект со своими свойствами и унаследованными от класса методами
// const audiAuto = new Auto('Audi', 'Q7', 2020);
// const teslaAuto = new Auto('Tesla', 'Model-3', 2019);

// // console.log(bmwAuto.name); // BMW

// console.log(bmwAuto.getAutoType()); // BMW X6 - 2021
// console.log(audiAuto.getAutoType()); // Audi Q7 - 2020

/// Learn JS
// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk');
//   },
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };
// rabbit.walk = function () {
//   console.log('Rabbit! Bounce- bounce! ');
// };
// // rabbit.__proto__ = animal;   // строка (*) устанавливает animal как прототип для rabbit.
// // console.log(rabbit.eats); // true
// // console.log(rabbit.jumps); // true

// // rabbit.walk();  // Animal walk

// // longEar.walk(); // Animal walk  // walk взят из цепочки прототипов
// // console.log(longEar.jumps); // true

// // console.log(animal.earLength);

// rabbit.walk(); // Rabbit! Bounce- bounce!  вызов rabbit.walk() находит метод непосредственно в объекте и выполняет его, не используя прототип

// let user = {
//   name: 'John',
//   surname: 'Smith',

//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = 'Alice Cooper'; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper

// методы animal
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       console.log('I walk');
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: 'White Rabbit',
//   __proto__: animal,
// };
// // модифицирует rabbit.isSleeping
// rabbit.sleep();
// console.log(rabbit.isSleeping); // true
// console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)
// // когда мы записываем данные в this, они сохраняются в этих объектах.
// // В результате методы являются общими, а состояние объекта — нет

/////

/// Цикл for…in  проходит не только по собственным, но и по унаследованным свойствам объекта.
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit));

// // for..in проходит и по своим, и по унаследованным ключам
// for (let prop in rabbit) console.log(prop); // jumps eats

///
// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// }

//
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };
// console.log(pockets.pen);
// console.log(bed.glasses);
// console.log(pockets.glasses);
// console.log(head.glasses);

//
// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };
// rabbit.eat();

// let hamster = {
//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// // Этот хомяк нашёл еду
// speedy.eat('apple');
// console.log(speedy.stomach);

// console.log(lazy.stomach);

//  F.prototype
// let animal = {
//   eats: true,
// };

// EXAMP
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White rabbit');
// console.log(rabbit.eats);

// console.log(rabbit.name);

// EXAMP
// function Rabbit() {}
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }
// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}
// // console.log(Rabbit.prototype.constructor == Rabbit); // true
// console.log(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

// EXAMP
// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit('White Rabbit');
// let rabbit2 = new rabbit.constructor('Black Rabbit');
// console.log(rabbit2.name);

// EXAMP
// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true,
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false

// EXAMP
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;

// console.log(rabbit.eats);

//LEC Встроенные прототипы
// let obj = {};
// console.log(obj.__proto__ === Object.prototype);
// // console.log(
// //   (obj.toString === obj.__proto__.toString) === Object.prototype.toString
// // );
// console.log(Object.prototype.__proto__);  //null

// EXAMP  наверху иерархии встроенных прототипов находится Object.prototype. Поэтому иногда говорят, что «всё наследует от объектов».
// let arr = [1, 2, 3];
// // наследует ли от Array.prototype?
// console.log(arr.__proto__ === Array.prototype); // true
// // затем наследует ли от Object.prototype?
// console.log(arr.__proto__.__proto__ === Object.prototype); // true;
// // и null на вершине иерархии
// console.log(arr.__proto__.__proto__.__proto__); // null

// console.log(arr == Array.prototype.toString);

// console.dir([1, 2, 3]);

// function f() {}
// console.log(f.__proto__ == Function.prototype); // true
// console.log(f.__proto__.__proto__ == Object.prototype); // true, наследует от Object

// String.prototype.show = function () {
//   console.log(this);
// };
// 'BOOM!'.show();  //// BOOM!

// В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов. Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.
// if (!String.prototype.repeat) {
//   String.prototype.repeat = function (n) {
//     return new Array(n + 1).join(this);
//   };
// }
// console.log('La'.repeat(3));

// EXAMP
// let obj = {
//   0: 'Hello',
//   1: 'world',
//   length: 2,
// };
// obj.join = Array.prototype.join;
// console.log(obj.join(','));

// EXAMP
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// function f() {
//   console.log('Hello!');
// }

// // console.log(f.prototype);
// f.defer(1000);

// EXAMP
// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   };
// };
// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2);

// Function.prototype.defer = function (ms) {
//   return (...args) => setTimeout(this, ms, ...args);
// };

// LECT Современные методы
// let animal = {
//   eats: true,
// };
// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal); // Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
// console.log(rabbit.eats);

// console.log(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

// EXAMP
// let animal = {
//   eats: true,
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   },
// });

// console.log(rabbit.jumps); // true

// EXAMP
// let obj = {};
// let key = prompt("What's the key?", '__proto__');
// obj[key] = 'some value';
// alert(obj[key]);

// EXAMP
// let obj = Object.create(null);
// let key = prompt("What's the key?", '__proto__');
// obj[key] = 'some value';

// alert(obj[key]);

// LECT КЛАССЫ.
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }
// let user = new User('Ivan');
// user.sayHi(); // Ivan
// // класс - это функция
// // ...или, если точнее, это метод constructor
// console.log(User === User.prototype.constructor);
// // Методы находятся в User.prototype, например:
// console.log(User.prototype.sayHi);
// // в прототипе ровно 2 метода
// alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// перепишем класс User на чистых функциях
// 1. Создаём функцию constructor
// function User(name) {
//   this.name = name;
// }
// // каждый прототип функции имеет свойство constructor по умолчанию,
// // поэтому нам нет необходимости его создавать

// // 2. Добавляем метод в прототип
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };
// // Использование:
// let user = new User('Ignat');
// user.sayHi(); // Ignat

// Class Expression
// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass); // имя MyClass видно только внутри класса
//   }
// };
// new User().sayHi(); // работает, выводит определение MyClass
// console.log(MyClass); // ошибка, имя MyClass не видно за пределами класса

// class expression
// const PersonCl = class{}

// Class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Метод добавится к свойству .prototype
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey, ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static
//   static hey() {
//     console.log('Hey there 🖐');
//     console.log(this);
//   }
// }
// PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge(); //41
// console.log(jessica.__proto__ === PersonCl.prototype); // true

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey, ${this.firstName}`);
// // };
// jessica.greet(); // Hey, Jessica

// const walter = new PersonCl('Walter', 1965); // Walter is not a full name!

// // 1. Classes are NOT hoisted
// // 2. Classes are first-classes citizens
// // 3. Classes are executed in strict mode

// LECT Геттеры\Сеттеры
// class User {
//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log('Имя слишком короткое.');
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User('Иван');
// console.log(user.name);
// user = new User('');

// При объявлении класса геттеры/сеттеры создаются на User.prototype, вот так:
// Object.defineProperties(User.prototype, {
//   name: {
//     get() {
//       return this._name;
//     },
//     set(name) {},
//   },
// });

// Пример с вычисляемым свойством в скобках [...]:
// class User {
//   ['say' + 'Hi']() {
//     console.log('Привет');
//   }
// }
// new User().sayHi();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements); //  [200, 530, 120, 300, 50]

// LECT Статические свойства и методы
// EXAMP
// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   // static compare(articleA, articleB) {
//   //   return articleA.date - articleB.date;
//   // }

//   static createTodays() {
//     return new this('Сегодняшний дайджест', new Date());
//   }
// }
// // use:
// // let articles = [
// //   new Article('HTML', new Date(2019, 1, 1)),
// //   new Article('CSS', new Date(2019, 0, 1)),
// //   new Article('JavaScript', new Date(2019, 11, 1)),
// // ];
// // articles.sort(Article.compare);
// // console.log(articles[0].title); // CSS
// let article = Article.createTodays();
// console.log(article.title); // Сегодняшний дайджест

// EXAMP
// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   static compare(animalA, animalB) {
//     return animalA.speed - animalB.speed;
//   }
// }
// // Наследует от Animal
// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется!`);
//   }
// }
// let rabbits = [new Rabbit('Белый кролик', 10), new Rabbit('Чёрный кролик', 5)];
// // console.log(rabbits.sort(Rabbit.compare));
// rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

// EXAMP
// class Animal {}
// class Rabbit extends Animal {}
// console.log(Rabbit.__proto__ === Animal); // true
// console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge(); // 35
// console.log(steven.__proto__ === PersonProto); // true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();  // 58

// CHALLENGE #2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerator() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS); // 75
// ford.accelerator();
// ford.accelerator();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford); // CarCl {make: 'Ford', speed: 80}

// LECT
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge(); //17

// console.log(mike.__proto__); // Person {introduce: ƒ}
// console.log(mike.__proto__.__proto__); // {calcAge: ƒ, constructor: ƒ}

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// CHALLENGE #3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// // 1.
// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Link the prototypes
// Ev.prototype = Object.create(Car.prototype); // наследует прототипы от Car

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge} %`
//   );
// };

// const tesla = new Ev('Tesla', 120, 23);
// // tesla.chargeBattery(90);
// console.log(tesla);

// tesla.accelerate();

// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();

// LECT. Наследование между "Классами" ES6 Classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Метод добавится к свойству .prototype
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey, ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static
//   static hey() {
//     console.log('Hey there 🖐');
//     console.log(this);
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // PersonCl.call();
//     // Always needs to happen first , чтобы this!
//     super(fullName, birthYear); // Задаём те же параметры, что и в родительском классе. super.method(...) вызывает родительский метод.
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }
//   // новый метод КалкЭйдж перепишется, т.к. он находится ближе в цепочке прототипов
//   calcAge() {
//     console.log(
//       `I'm ${2037 - this.birthYear} years old, but as a studetnt I fell like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'FIT');
// martha.introduce();
// martha.calcAge();

// LECT Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'FIT');
jay.introduce();
jay.calcAge();

/////////////////////////////////////////
// Another Class Example

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Provate methods
// (there is also static methods)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected (защищённое) property (свойство)
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an accoun, ${owner}`);
  }
  // 3) Public methods
  // Public interface API
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; //
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Provate methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140); // -140
acc1.requestLoan(1000);
// acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1); //

// console.log(acc1.#movements);  // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(acc1.#pin);  // Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class
Account.helper(); // Helper

// Chaining (цепочка)
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000); //
console.log(acc1.getMovements()); //  [250, -140, 1000, 300, 500, -35, 25000, -4000]

// CHALLENGE # 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/ h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/ h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
