// function myAdder(arr) {
//   arr[1] += 1;
//   arr = arr + arr;
//   console.log(arr);
// }
// let a = new Array(1, 3, 2, 5);
// myAdder(a);
// console.log(a); // [1, 4, 2, 5]

// //   Варіант 2:
// let a = new Array(1, 3, 2, 5);
// a[1] += 1;
// a = a + a;
// console.log(a); // "1,4,2,51,4,2,5"

// function addOne(arr) {
//   const arrCopy = [...arr];
//   arrCopy[1] += 1;
//   return arrCopy;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(addOne(arr));
// console.log(arr);

//! ========================================

// Задачка з CodeWars (питання про різницю в підходах):
// Complete the function scramble(str1, str2) that returns
// true if a portion of str1 characters can be rearranged to match str2,
// otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.

// Виклики:
// console.log(scramble("rkqodlw", "world")); //true
// console.log(scramble("cedewaraaossqqyt", "codowars")); //false (потрібні 2 "о")
// console.log(scramble("katas", "steak")); //false

// // 1 рішення (не приймає кодварс, не проходить ліміт по часу на дуже довгих рядках):
// function scramble(str1, str2) {
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");
//   let idx;

//   for (const letter of arr2) {
//     idx = arr1.indexOf(letter);
//     if (idx === -1) {
//       return false;
//     }
//     arr1.splice(idx, 1);
//   }

//   return true;
// }

// // 2 рішення (проходить часовий ліміт):
// function scramble(str1, str2) {
//   let str1Hash = {};
//   let containsScramble = true;
//   for (const char1 of str1) {
//     str1Hash[char1] ? (str1Hash[char1] += 1) : (str1Hash[char1] = 1);
//   }

//   for (const char2 of str2) {
//     str1Hash[char2] ? (str1Hash[char2] -= 1) : (containsScramble = false);
//   }

//   return containsScramble;
// }

// Питання:
// Чому 2 рішення займає менше часу на виконання ніж перше?
// Як я розумію, обидві функції роблять 2 перебори:
// 1 - фор та індексОф
// 2 - два повних фори
// З індексОф щось не так?)
// Більшість рішень на кодварсі використовують об'єкти для зберігання індексів чи входжень літер.
// Об'єкти мають в цьому випадку якість особливі переваги?

//! ========================================

// Чому:
// console.log(true + false > 2 + true); // false ?
// 1 + 0 = 1
// 2 + 1 = 3
// 1 > 3 -> false

// Якщо покроково так:
// console.log(true + false); // 1
// console.log(1 > 2); //false
// console.log(false + true); // 1
// console.log(Boolean(1)); // true

//! ========================================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango);

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//! ========================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(email, code) {
//     super(email)
//     this.code = code;
//   }
// }

// console.dir(ContentEditor);

// const editor = new ContentEditor("mango@mail.com", 111);
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

//! ========================================

// якщо більше немає питань, можете пояснити, що відбувається тут:

// function incrementString(strng) {
//   return strng.replace(/[\d]*$/, (i) => String(+i + 1).padStart(i.length, 0));
// }

// console.log(incrementString("foo12"));
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//! ========================================
