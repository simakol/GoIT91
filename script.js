// *********** localStorage *************** \\
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// *****Збереження в LS***** \\

// setItem(key, value) - зберігає в локальний сховок якусь інформацію value по ключу key
// JSON.stringify(value) - перетворює value на валідний JSON і повертає його в якості результату
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// *****Читання з LS***** \\

// getItem(key) - повертає з локального сховку данні, які записані в ключі key в форматі строки
// JSON.parse(value) - перетворює JSON у валідний JS

// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// *****Видалення з LS***** \\

// removeItem(key) - видаляє з локального сховку інформацію за ключем key (видаляється запис повністю)

// localStorage.removeItem(LS_KEY);

// *****Очищення LS******* \\
// clear() - небезпечно!!!!! повністю ощичує локальний сховок, не викликайте цей метод, якщо не впевнені навіщо ви це робите

// localStorage.clear();

// ***Чому варто завжди використовувати метод JSON.stringify***\\

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);

// try catch - конструкція за допомогою якої можна відловлювати і оброблювати помилки, вона створена для того, щоб в разі викиду помилки скрит не лягав, а виконувався далі, але помилка при цьому буде оброблена блоком catch + можна вивести користувачу повідомленя що щось пішло не так

// throw - оператор для викиду помилки - коли скрипт зустріне цей оператор, то він перестане виконуватись і завершиться з помилкою, яку ви передасте

// try {
//   console.log(JSON.parse(value));
// } catch (err) {
//   console.log("Parsing error! Inside catch");
//   console.error(err);
// }

// try {
//   throw new Error("тестуємо роботу викиду помилок!");
// } catch (err) {
//   console.log(err);
// }
// console.log("the end");

// ***LS не може зберігати функції в жодній з їх інтерпретацій***\\.

// const LS_KEY = "users";
// const users = [
//   {
//     name: "Oleg",
//     age: 55,
//     getName() {
//       return this.name;
//     },
//   },
//   {
//     name: "Vika",
//     age: 24,
//     getName() {
//       return this.name;
//     },
//   },
//   {
//     name: "Maksym",
//     age: 22,
//     getName() {
//       return this.name;
//     },
//   },
// ];

// localStorage.setItem(LS_KEY, JSON.stringify(users));

// const lsUsers = localStorage.getItem(LS_KEY);
// console.log(JSON.parse(lsUsers));

// const add = (a, b) => a + b;

// localStorage.setItem("fn", JSON.stringify(add));

// *************Практика*************** \\
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

/*
HOME:

1. отримаємо список товарів з джсон файлу (import)
2. створюємо розмітку і показуємо всі товари на екрані в контейнері
3. вішаємо слухач подій на контейнер по кліку
    3.1. якщо ми натиснули на щось, крім кнопки - робимо раннє повернення і виходимо з ф-ції
    3.2. отримуємо айді товару та шукаємо його у масиві всіх товарів, для того, щоб отримати обʼєкт усього товару
    3.3. перевірити локальний сховок, якщо там вже є масив з товарами - то перевіряємо чи є в цьому масиві такий же товар (по id), якщо є - збільшуємо кількість, якщо немає - додаємо новий. Якщо сховок пустий то створюємо пустий масив, додаємо туди товар з кількістю 1 і записуємо у сховок
*/

import products from "./products.json" assert { type: "json" };
import createMarkup from "./templates/productTemplate.js";

const PRODUCT_LS_KEY = "checkout";

const refs = {
  list: document.querySelector(".js-list"),
};

refs.list.insertAdjacentHTML("beforeend", createMarkup(products));
refs.list.addEventListener("click", handleAdd);

function handleAdd(event) {
  if (!event.target.classList.contains("js-add")) {
    // виходимо з ф-ції якщо клікнули не на кнопку
    return;
  }

  const product = event.target.closest(".js-product"); // отримаємо посилання на всю лішку

  const productId = Number(product.dataset.id); // через дата атрибут отримали id поточного товару

  const currentProduct = products.find(({ id }) => id === productId); // знайшли обʼєкт поточного товару в масиві всіх товарів за id
  console.log(currentProduct);

  const checkoutProducts =
    JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? []; // робимо перевірку, якщо в локалстореджі є товари, то записуємо масив товарів у checkoutProducts, якщо ж товарів немає, ми отримаємо null, і за допомогою оператору ??(null, undefined - негатив) запишемо у константу checkoutProducts новий пустий масив

  const newProductIdx = checkoutProducts.findIndex(
    ({ id }) => id === productId
  ); // знаходимо індекс такого ж товару з масиву корзини (якщо такого товару немає - повертає -1)

  if (newProductIdx !== -1) {
    // якщо це існуючий продукт
    checkoutProducts[newProductIdx].quantity += 1; // збільшую кількість товарів на 1
  } else {
    // новий продукт
    currentProduct.quantity = 1; // для нового товару кількість = 1
    checkoutProducts.push(currentProduct);
  }

  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(checkoutProducts));
}
