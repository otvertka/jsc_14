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
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
