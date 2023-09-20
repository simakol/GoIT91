// ***********setTimeout*********** \\

// const id = setTimeout(() => {
//   console.log("Time is over 1");
// }, 1000);

// console.log(id);

// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
//   },
//   1000,
//   "Alice",
//   "Ukraine"
// );

// ***********setInterval*********** \\

// const id = setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// Видалення Timeout за необхідністю

// setTimeout(() => clearInterval(id), 3000);

// Можливість передати параметри для колбеку
// const id = setInterval(
//   (name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
//   },
//   1000,
//   "Alice",
//   "Ukraine"
// );

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const refs = {
//   content: document.querySelector(".js-content"),
//   text: document.querySelector(".js-text"),
// };

// let counter = 10;
// refs.text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;
//   refs.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   refs.content.style.display = "none";
// }, 1000 * counter);

// ***********Синхронний та асинхронний JavaScript*********** \\

// console.log('1');

// setTimeout(() => {
//     console.log("3");
// }, 0)

// console.log('2');

// ***********Class Date*********** \\
// const currentDate = new Date();
// const targetDate = new Date("05 Sep 2023");
// const diff = currentDate - targetDate;
// console.log(currentDate);
// console.log(targetDate);
// console.log(diff);

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

/*
цифровий:

1. запускаємо інтервал кожну секунду
2. створити поточну дату
3. з поточної дати беремо все, що нам потрібно(день тижня, день місяця, місяць, рік, години, хвилини і секунди)
4. розпихуємо інформацію по відповідним блокам в розмітці за допомогою textContent

*/
countTime();
setInterval(countTime, 1000);

function countTime() {
  const currentDate = new Date();

  const time = {
    day: currentDate.getDay(),
    date: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
  };

  const localeTime = currentDate.toLocaleTimeString("uk-UA");

  refs.day.textContent = arrDay[time.day];
  refs.date.textContent = time.date;
  refs.month.textContent = namesOfMonth[time.month];
  refs.year.textContent = time.year;
  refs.clock.textContent = `Поточний час: ${localeTime}`;

  const secondsDeg = (360 / 60) * time.seconds;
  const minutesDeg = (360 / 60) * time.minutes;
  const hoursDeg = (360 / 12) * time.hours + minutesDeg / 12;
  //(360 / 12) * time.hours +  (360 / 12 / 60) * time.minutes

  refs.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  refs.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `rotate(${hoursDeg}deg)`;
}
