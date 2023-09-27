//*********Приклад роботи синхронного та асинхронного JS**************\\
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve("C").then((value) => console.log(value));

// console.log("D");

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// addEventListner

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A"); // 1

// setTimeout(() => console.log("B"), 0); // 5

// Promise.reject("C")
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err)); // 4
// Promise.resolve("D").then((value) => console.log(value)); // 3

// setTimeout(() => console.log("E"), 0); // 6

// console.log("F"); // 2

//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log(1); // 1

// setTimeout(() => console.log(2), 0); // 5

// const promise = new Promise((resolve) => {
//   console.log(3); // 2
//   resolve(4);
// });

// promise.then((value) => console.log(value)); // 4

// console.log(5); // 3

//*************** Promise *******************\\

// ****Створення Promise**** \\

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve(`Success - ${random}`); // функція resolve переводить проміс у стан fullfilled, тобто проміс виконався успішно
//     } else {
//       reject(`Fail - ${random}`); // reject - функція що переводить проміс у стан rejected, тобто проміс виконався неуспішно
//     }

//     // random > 0.5 ? resolve("Success") : reject("Fail");
//   }, 1000);
// });

// console.log(promise);

// ****Обробка Promise**** \\
// .then() - метод, який повертає проміс, спрацьовує якщо проміс у стані fullfilled. Приймає 2 аргументи - (onResolve, onReject) - дві колбек функції, які оброблюють стан промісу. Колбек ф-ція приймає дані, які повернув попередній then або сам проміс
// .catch() - метод, який оброблює стан промісу rejected, приймає колбек функцію onReject(err)
// .finally() - метод, який спрацює просто коли проміс виконався, в не залежності від його стану, приймає колбек функцію і виконує її

// promise
//   .then((data) => console.log(`Then block: ${data}`))
//   .catch((err) => console.log(`Catch block: ${err}`))
//   .finally(() => console.log("Finally block"));

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.


/*
1. 

*/