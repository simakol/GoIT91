// Що таке масив
// const array = ["Hello world", null, true, 15];

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false

// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];

// Перебір масиву
// const array = ["Hello world", null, true, 15];

// // Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }

// // Цикл for of
// for(const item of array){
//     console.log(item);
// }

// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням
// const a = 5;
// const b = 5;
// console.log(a === b); //true

// // Складні типи даних - за посиланням
// const c = [5, 6];
// const d = [5];
// const e = c; // константа e буде мати посилання на тей самий масив, що і константа c
// console.log(c === d); // false
// console.log(c[0] === d[0]); // true -> 5 === 5 -> true
// console.log(c === e); // true
// e[0] = 55;
// console.log(e, c);

// const arrCopy = c.slice(0);
// arrCopy[0] = 100;
// console.log(arrCopy, c);

// Методи для роботи з масивом

// push(додає у кінець один або декілька) pop(вирізає один з кінця)
// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6, 7);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// unshift(додає один або кілька елементів на початок масиву) shift(видаляє один елемент з початку масиву)
// const numbers = [1, 2, 3];
// console.log(numbers.unshift(-3, -2, -1, 0));
// console.log(numbers);
// console.log(numbers.shift())

//slice(start, end) - повертає новий масив, з скопійованими елементами починаючи з індексу start і до індексу end(не включно)
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// const newFruits = fruits.slice(1, 3);
// const lastTwoFruits = fruits.slice(-2);
// console.log(newFruits);
// console.log(lastTwoFruits);

//splice(start, deleteCount, ...insert) - мутує масив, вирізаючи з нього deleteCount елементів починаючи з індексу start. Також, можна вставити якість нові елементи замість видалених в insert
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// fruits.splice(2, 1, "orange", "lemon")
// console.log(fruits)

//includes(item) - перевіряє чи є item всередині масиву, якщо так - повертає true, якщо ні - повертає false
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// console.log(fruits.includes("banana"))
// console.log(fruits.includes("orange"))

//indexOf(item) - шукає індекс першого входження елементу item у масиві, якщо такого елементу item не існує - повертає -1
// const fruits = ["apple", "pineapple", "cherry", "banana"];
// const index = fruits.indexOf("cherry")
// console.log(index)
// fruits.splice(index, 1)
// console.log(fruits)
// console.log(fruits.indexOf("orange"))

// concat(...arrays) - повертає новий масив, у якому будуть всі елементи масивів arrays

// const fruits = ["apple", "pineapple"];
// const berries = ["cherry", "watermelon"];
// const allItems = fruits.concat(berries);
// console.log(allItems);

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, "Hello", null, 42, false];

// for (let i = 0; i < arr.length; i += 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -= 1;
//   }
// }

// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   /*
// 1. створити новий масив
// 2. перебрати
// 3. перевіряємо чи є цей елемент у масиві(includes)
// 4. якщо вже є - то пушимо в новий масив
// */
//   const duplicates = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1)) {
//       duplicates.push(arr[i]);
//     }
//   }
//   return duplicates;
// }

// console.log(getCommonElements([1, 2, 3, 2, 17, 1, 17, 2, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];
//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = "Welcome to the future";
// const SEPARATOR = "";
// const reversedString = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(reversedString);

// Task-5
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   let message = "";
//   switch (arr.length) {
//     case 0:
//       message = "no one likes this";
//       break;
//     case 1:
//       message = `${arr[0]} likes this`;
//       break;
//     case 2:
//       message = `${arr[0]} and ${arr[1]} like this`;
//       break;
//     case 3:
//       message = `${arr[0]}, ${arr[1]} and  ${arr[2]} like this`;
//       break;
//     default:
//       message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//   }

//   return message;
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark", "Josh"]));

//! =======

// let i = 0;
// console.log(i++);
// console.log(i);
// console.log(++i);

// const arr = [1, 2, 3];
// arr.splice(1);
// console.log(arr);
