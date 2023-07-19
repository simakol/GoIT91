/***** Оголошення змінних *****/

// let;
// let number = 42; // ініціалізація
// console.log(number);
// number = 21; // перезапис
// console.log(number);

// let value;
// console.log(value);

// const;
// const value = 5;
// value = 6; // ERROR!!!!

/***** Примітивні типи даних ****/

// Number
// const number = 100;
// const number2 = 1.5;
// console.log(NaN);

// String
// const name = "Ivan Ivalov";

// Типи рядків '' "" ``
// console.log("Hello world!");
// console.log("Hello world!");
// const result = 42;
// console.log(`Your result is ${result}`);

// Boolean (true, false)
// console.log(true, false);

// undefined
// присутність відсутності (невизначеність)

// null
// відсутність присутності

// перевірка типу даних з яким працюємо метод typeof

// const msg = "Hello, glad to see you!";
// console.log(typeof msg);
// const number = 5;
// console.log(typeof number);
// console.log(typeof number === "number");

/***** Комунікація з користувачем та можливість відображення якогось результату *****/
// console.log('Привіт вчи JS');

// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);

// == - не суворе (зі зведенням типів)
// console.log(5 == "5");
// number == string -> зведемо типи
// "5" == "5" -> true

// === - суворе (без зведення типів)
// console.log(5 === "5");
// number === string -> false

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);

// >=
// console.log(26 >= 20);
// console.log(26 >= 26);

// != - не суворе недорівнює
// console.log('1' != 1);

// !== - суворе недорівнює
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false); // 0 == 0

// console.log('0' === false);

// console.log('Papaya' < 'papaya'); // 80 < 112
// console.log("P".charCodeAt(0)) // 80
// console.log("p".charCodeAt(0)) // 112

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//! True: будь-яке число або цифра, крім нуля | будь-який рядок, у якому є символи (" ")
//! False: 0 | пустий рядок ("") | NaN | null | undefined

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

/***** Логічні оператори *****/

// || - перше true
// console.log(2 || 0 || 1);
// console.log(0 || false || null || "" || NaN)

// && - перше false
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);

// ?? реагує лише на null та undefined
// console.log(0 ?? 1);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

// const apple = "🍎";

// const appleQuantity = 8;

// const applePrice = 34;

// const appleMessage = `На складі лишилось ${appleQuantity} ${apple}. В сумі на ${
//   appleQuantity * applePrice
// } грн`;

// console.log(appleMessage);

// const cherry = "🍒";

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `На складі лишилось ${cherryQuantity} ${cherry}. В сумі на ${
//   cherryQuantity * cherryPrice
// } грн`;

// console.log(cherryMessage);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1000;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const result = `${hours.toString().padStart(2, "0")}:${minutes
//   .toString()
//   .padStart(2, "0")}`;
// console.log(result);

// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery + price}`;
// console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// console.log(Math.random()); // [0, 1)
// console.log(Math.random() * 10); // [0, 10)
// console.log(Math.random() * (10 - 1)); //[0, 9)
// console.log(Math.random() * (10 - 1) + 1); //[1, 10)
// console.log(Math.ceil(Math.random() * 10));

// let a = 5;
// a += 2;
// // a = a + 2

// console.log(a);

// a = +"7"; // + - неявне перетворення на число

// console.log(a)

// console.log(10 + "")

// const PRICE = 100;

// const userNumber = prompt("Введи число");

// console.log(userNumber);

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

const str = "Hello";

const courseTopicLength = str.length;
console.log(courseTopicLength);

const firstElement = str[0];
console.log(firstElement);

const lastElement = str[courseTopicLength - 1];
console.log(lastElement);
