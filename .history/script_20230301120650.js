'use strict';
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

// const jonas = new Person('Jonas', 1991);
// console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// ЗА КАДРОМ:
// 1. Создаётся new {} (пустой объект)
// 2. вызывается функция, this = {}
// 3. {} ссылается на прототип
// 4. функция автоматически возвращает {} (пустой объект). Но уже этому объекту не обязательно быть пустым, в этом и есть трюк

//////
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
// console.log(jack); //Person {firstName: 'Jack', birthYear: 1975}

// console.log(jonas instanceof Person); // true

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

if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
}
