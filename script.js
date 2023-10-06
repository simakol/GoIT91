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

/*
1. отримаємо рефси
2. вішаємо слухач по кліку на кнопку додавання нових полів
    2.1. відмальовуємо нові інпути для країн
3. вішаємо слухач на сабміт форми
    3.1. викликаємо превент дефолт + відключаємо кнопку (disabled)
    3.2. збираємо інфу з полів (тобто масив всіх країн)
    3.3. приберемо з масиву країн пусті країни + видалимо зайві пробіли (.trim())
    3.4. робимо запит на сервер по столицям (окрема ф-ція) 
    3.5. робимо запит на сервер по погоді на основі столиць (окрема ф-ція)
    3.6. малюємо розмітку на основі масиву погоди
    3.7. очищаємо форму + включаємо кнопку (блок файналі)
4. опишемо ф-цію для запиту на столиці
    4.1. робимо паралельний запит (меп масиву -> масив промісів -> Promise.allSettled -> фільтруємо за станом промісу, залишаємо тільки успішні -> витягуємо назви столиць методом map)
5. опишемо ф-цію для запиту на погоди по столицям
    5.1. роблю паралельний запит (меп масиву -> масив промісів -> Promise.allSettled -> фільтруємо за станом промісу, залишаємо тільки успішні -> витягуємо інфу про погоду)
*/

const refs = {
  form: document.querySelector(".js-search"),
  searchBtn: document.querySelector(".js-search-btn"),
  formContainer: document.querySelector(".js-form-container"),
  addCountry: document.querySelector(".js-add"),
  weatherList: document.querySelector(".js-list"),
};

refs.addCountry.addEventListener("click", handleAdd);
refs.form.addEventListener("submit", handleSearch);

function handleAdd() {
  refs.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country" />'
  );
}

async function handleSearch(event) {
  event.preventDefault();
  refs.searchBtn.disabled = true;

  const formData = new FormData(event.currentTarget);
  const countries = formData
    .getAll("country")
    .map((el) => el.trim())
    .filter((el) => el);

  try {
    const capitals = await serviceCountries(countries);
    const weather = await serviceWeather(capitals);

    refs.weatherList.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    refs.form.reset();
    refs.searchBtn.disabled = false;
  }
}

async function serviceCountries(countries) {
  const BASE_URL = "https://restcountries.com/v3.1/name/";
  const responses = countries.map(async (country) => {
    const resp = await axios.get(`${BASE_URL}${country}`);
    return resp.data;
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const END_POINT = "/current.json";
  const API_KEY = "66f9e81543404d02beb160521230808";

  const responses = capitals.map(async (capital) => {
    const resp = await axios.get(
      `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${capital}&lang=uk`
    );
    return resp.data;
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value: { current, location } }) => {
      const { name, country } = location;
      const {
        condition: { text, icon },
        temp_c,
      } = current;

      return { name, country, text, icon, temp_c };
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({ name, country, text, icon, temp_c }) => `
      <li>
        <img src="${icon}" alt="${text}" />
        <h2>${country}</h2>
        <h2>${name}</h2>
        <p>${text}</p>
        <p>${temp_c}</p>
      </li>`
    )
    .join("");
}
