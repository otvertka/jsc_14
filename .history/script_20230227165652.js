'use strict';
const Person = function (firstName, birthYear) {
  //   console.log(this); // Person {}
  this.firstName = firstName;
  this.birthYear = birthYear;
};

new Person('Jonas', 1991);

// 1. Создаётся New {} (пустой объект)
// 2. вызывается функция, this = {}
// 3. {} ссылается на прототип
// 4. функция автоматически возвращает {} (пустой объект). Но уже этому объекту не обязательно быть пустым, в этом и есть трюк
