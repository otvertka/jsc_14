'use strict';
const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}
  // SYNTAX Instance properties. Оператор instanceof проверяет, принадлежит ли объект к определённому классу. Другими словами, object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.
  this.firstName = firstName;
  this.birthYear = birthYear;

  // НИКОГДА ТАК НЕ НЕ ДЕЛАТЬ
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// ЗА КАДРОМ:
// 1. Создаётся new {} (пустой объект)
// 2. вызывается функция, this = {}
// 3. {} ссылается на прототип
// 4. функция автоматически возвращает {} (пустой объект). Но уже этому объекту не обязательно быть пустым, в этом и есть трюк

//////
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
console.log(jack); //Person {firstName: 'Jack', birthYear: 1975}

console.log(jonas instanceof Person); // true

// LECT
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // 46
