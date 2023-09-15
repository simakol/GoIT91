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

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home
