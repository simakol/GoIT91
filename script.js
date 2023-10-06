/*
1. Будь яка асинхронна функція ЗАВЖДИ повертає проміс
2. Якщо ви оголосили асинхронну функцію це дозволяє вам використовувати оператор await всередині неї
3. Оператор await заморожує виконання функції до тих пір поки проміс(з правої сторони) не виконається(тобто не перейде в стан Fullfilled/Rejected)
4. За допомогою оператору await можна імітувати абсолютно синхронне виконання асинхронного коду(без колбеків як було з методом .then())

*/

// ***************** Конструкція async await ***************** \\

// async function serviceCountry(countryName) {
//   const resp = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   console.log(data);
// }

// serviceCountry("Ukraine");

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// async function foo() {}

// console.log(foo());

// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

//? Func declaration

// async function serviceCountry(countryName) {
//   const resp = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   console.log(data);
// }

//? func expression

// const serviceCountry = async function (countryName) {
//   const resp = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   console.log(data);
// };

//? arrow func

// const serviceCountry = async (countryName) => {
//   const resp = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   console.log(data);
// };

//? Object method

// const country = {
//   name: "Ukraine",
//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.name}`
//     );

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();

//     console.log(data);
//   },
// };

// country.serviceCountry()

// ************ Обробка за допомогою then та catch ************ \\

// async function serviceCountry(countryName) {
//   const resp = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();

//   return data;
// }

// serviceCountry("Ukraine")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry(countryName) {
//   try {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();

//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// serviceCountry("Ukraine");

// ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\
// async function serviceCountries() {
//   const resp1 = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   const resp2 = await fetch("https://restcountries.com/v3.1/name/France");
//   const resp3 = await fetch("https://restcountries.com/v3.1/name/Germany");

//   console.log(resp1);
//   console.log(resp2);
//   console.log(resp3);
// }

// serviceCountries();

// *********** Паралельні *********** \\
// async function serviceCountries() {
//   const countries = ["Ukraine", "France", "Germany"];
//   const responses = countries.map(async (country) => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     return resp.json();
//   });

//   console.log(await Promise.all(responses));
// }
// serviceCountries();


// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!
