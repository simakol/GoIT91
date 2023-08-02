// створення методу

// const obj = {
//   sayHello() {
//     console.log("Hello!");
//   },
// };

// obj.sayHello();

// const obj2 = {
//   sayHello: function () {
//     console.log("Hello 2!");
//   },
// };

// obj2.sayHello();

// ****************Об'єкт**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// ****************Звернення до властивостей об'єкта**************** \\

// console.log(user.name);
// console.log("css", user.skills.css);

// const objectKey = "name";

// console.log(user[objectKey]);
// console.log(user["skills"]);

// ****************Зміна значення властивості**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// user.city = "Lviv";
// user["age"] = 28;
// console.log(user);

// user.city = "Odessa";
// user["age"] = 38;
// console.log(user);

// ****************Object.freeze**************** \\
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user);
// user.name = 'Kate';
// user.city = 'Lviv';
// console.log(user);

// ****************Методи об'єкта**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
//   sayHello(city) {
//     console.log(city);
//     console.log(`Hello my name ${this.name}`);
//   },
// };

// const user1 = {
//   name: "alex",
//   greet: user.sayHello,
// };

// console.log(user);

// user.sayHello("Lviv");
// user1.greet("Kyiv")

//1. значення this визначається НЕ НА МОМЕНТ СТВОРЕННЯ ФУНКЦІЇ, А НА МОМНЕНТ ЇЇ ВИКЛИКУ
//2. this посилається на тей обʼєкт, який викликав ф-цію

// ****************Цикл for...in**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// ****************Метод Object.keys()**************** \\
// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, user[key]);
// }
// console.log(keys);

// ****************Метод Object.values()**************** \\

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values2 = Object.values(user.skills);
// console.log(values);
// console.log(values2);

// ****************Метод Object.entries()**************** \\

// const user = {
//   name: "Alice",
//   skills: {
//     html: false,
//     css: true,
//     react: false,
//   },
// };

// const entries = Object.entries(user);
// const entries2 = Object.entries(user.skills);
// console.log(entries);
// console.log(entries2);

// ****************Практика**************** \\
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.

// function createBasket(product, quantity, price) {
//   const totalPrice = quantity * price;
//   //   const basket = {
//   //     name: product,
//   //     price, // price: price
//   //     quantity,
//   //     totalPrice,
//   //   };
//   //   return basket;

//   return {
//     name: product,
//     price, // price: price
//     quantity, //quantity: quantity
//     totalPrice,
//   };
// }

// console.log(createBasket("pizza", 3, 120));
// console.log(createBasket("aplle", 13, 50));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//   Den: 60,
//   Kate: 130,
//   William: 45,
//   Matthew: 120,
//   Ethan: 40,
//   David: 55,
// };

// function getTime(obj) {
//   const values = Object.values(obj);
//   const amount = values.length;

//   let sum = 0;
//   for (const time of values) {
//     sum += time;
//   }

//   return `Count of players ${amount}, average time ${sum / amount}`;
// }

// console.log(getTime(players));

// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];

// function getUsers(friends, bookName) {
//   const names = [];
//   for (const friend of friends) {
//     if (friend.books.includes(bookName)) {
//       names.push(friend.name);
//     }
//   }

//   return names.join(", ")
// }
// console.log(getUsers(friends, "Romeo and Juliet"));

// 2 Порахувати вік всіх юзерів у яких є ключ age.

function getTotalAge(arr) {
  let totalAge = 0;
  for (const friend of friends) {
    if ("age" in friend) {
      console.log(`${friend.name} - ${friend.age}`);
      totalAge += friend.age;
    }
    // if (Object.keys(friend).includes("age")) {
    //   console.log(`${friend.name} - ${friend.age}`);
    //   totalAge += friend.age;
    // }
  }

  return totalAge;
}

console.log(getTotalAge(friends));
