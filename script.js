// *********Links********* \\
// https://www.postman.com/downloads/
// https://rickandmortyapi.com/documentation
// https://www.weatherapi.com/docs/

// Приклад документації до API
// https://rickandmortyapi.com/documentation/#rest

// *********Показати роботу з Postman********* \\
// https://www.postman.com/downloads/

// *********Fetch********* \\

// fetch("https://rickandmortyapi.com/api/character").then((response) =>
//   console.log(response)
// );

// *********Обробка помилок та парсинг відповіді********* \\

// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Вимушена помилка статусу: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

/*
1. збираємо рефси
2. вішаємо на форму обробник подій по сабміту
    2.1. зупиняємо поведінку браузера за замовчуванням (event.preventDefault())
    2.2. витягуємо з форми інформацію про місто і кількість днів
    2.3. робимо запит з інформцією, яку ми зібрали з полів (окрема ф-ція)
    2.4. відмальовуємо розмітку (окрема ф-ція)
*/

const refs = {
  form: document.querySelector(".js-search-form "),
  list: document.querySelector(".js-list"),
};

refs.form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const { city, days } = event.currentTarget.elements; // витягаємо з полів форми посилання на інпут для міста і селект для днів

  serviceWeather(city.value, days.value) // викликаємо сервіс для запиту на сервер і передаємо відповідну інформацію
    .then((data) => {
      refs.list.innerHTML = createMarkup(data.forecast.forecastday); // створюємо розмітку і записуємо її у ul
    })
    .catch((err) => console.log(err)) // ловимо помилку за межами фунції
    .finally(() => refs.form.reset()); // очищуємо поля форми після відповіді від сервера
}

function serviceWeather(city, days) {
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "66f9e81543404d02beb160521230808";

  // створюємо параметри запиту за допомогою класу URLSearchParams, де у вигляді обʼєкту зручно описуємо параметри, замість того, щоб писати їх в строці
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: "uk",
  });
  //    fetch(
  //     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  //     )
  return fetch(`${BASE_URL}/forecast.json?${params}`).then((response) => {
    // якщо ok === false - вручну викидуємо помилку (наприклад, коли статус 404)
    if (!response.ok) {
      throw new Error(
        `Вимушена помилка статусу: ${response.status} | Причина: ${response.statusText}`
      );
    }

    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li class="weather-card">
        <img src="${icon}" alt="${text}" class="weather-icon">
        <h2 class="date">${date}</h2>
        <h3 class="weather-text">${text}</h3>
        <h3 class="temperature">${avgtemp_c} °C</h3>
    </li>
      `
    )
    .join("");
}
