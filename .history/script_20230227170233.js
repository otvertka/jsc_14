'use strict';
const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// 1. Создаётся New {} (пустой объект)
// 2. вызывается функция, this = {}
// 3. {} ссылается на прототип
// 4. функция автоматически возвращает {} (пустой объект). Но уже этому объекту не обязательно быть пустым, в этом и есть трюк

//////
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
console.log(jack); //Person {firstName: 'Jack', birthYear: 1975}
