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
1. отримати рефси на всі дом елементи
2. вішаємо слухач подій по кліку на кнопку старт
    2.1. перебираємо елементи клітинок (масив елементів [...children]) методом map і на кожній ітерації повертаємо створений проміс
    2.2. викликаємо метод allSettled який поверне масив вже виконаних промісів і на ньому викликаємо then
        2.2.1. запускаємо цикл (forEach) на масив виконаних промісів
            2.2.1.1. записуємо в текст контент одного квадратику пусту строку (для очищення поля нової гри)
            2.2.1.2. запускаємо setTimeout для того, щоб показати смайлики (затримка буде 1000 мс * (i + 1))
                2.2.1.2.1. записуємо в текст контент одного квадратику смайлик який нам приходить
                2.2.1.2.2. якщо ми знаходимось на 3й ітерації, то виводимо вікошечко про стан гри(перемога або програш)
            2.2.1.3. перевірка на переможця isWinner(true/false) - якщо всі проміси в одному зі станів (або всі fullfilled, або всі rejected) - то ми перемогли
*/

// const refs = {
//   startBtn: document.querySelector(".js-start"),
//   container: document.querySelector(".js-container"),
// };

// refs.startBtn.addEventListener("click", handleStartGame);

// function handleStartGame() {
//   // створюємо масив промісів орієнтуючись на кількість клітинок
//   const promises = [...refs.container.children].map(createPromise); // () => createPromise()

//   // чекаємо поки всі проміси завершаться (перейдуть або в стан fullfilled або в стан rejected)
//   Promise.allSettled(promises).then((items) => {
//     // items - це масив виконаних промісів (обʼєкти з результатом кожного промісу)
//     // перебираємо кожен проміс
//     items.forEach((item, i) => {
//       refs.container.children[i].textContent = ""; // очищуємо кожну клітинку для нової майбутньої гри
//       //запускаємо таймер з послідовною затримкою в 1 с для того, щоб показати користувачу послідовній смайлики

//       // перевірка на переможця (якщо всі проміси в стані fulfilled, або всі проміси в стані rejected - то ми перемогли!)
//       const isWinner =
//         items.every(({ status }) => status === "fulfilled") ||
//         items.every(({ status }) => status === "rejected");

//       setTimeout(() => {
//         refs.container.children[i].textContent = item.value || item.reason; // записуємо смайлик у квадрат (🤑 - value якщо проміс fullfilled | 👿 - reason якщо проміс rejected)

//         // перевірка що ми знаходимось на останній ітерації (поточний індекс === останньому індексу елемента в масиві)
//         if (i === items.length - 1) {
//           // створюємо модальне вікно з повідомленням про перемогу або програш
//           const instance = basicLightbox.create(
//             `<h1>${isWinner ? "Winner" : "Loser"}</h1>`
//           );
//           instance.show();
//         }
//       }, 1000 * (i + 1)); // 1000 * (0 + 1) = 1000 -> 1000 * (1 + 1) = 2000 -> 1000 * (2 + 1) = 3000
//     });
//   });
// }

// // функція яка повертає проміс у рандомному стані (fullfulled || rejected)
// function createPromise() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     if (random > 0.5) {
//       resolve("🤑");
//     } else {
//       reject("👿");
//     }
//   });
// }
