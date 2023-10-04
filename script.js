// ******************** CRUD ******************** \\

// Create - POST (створення нового ресурсу)
// Read   - GET (отримання данних існуючого ресурсу)
// Update - PUT (повністю перезаписує існуючий ресурс) PATCH (часткове оновлення ресурсу)
// DELETE - DELETE (повне видалення ресурсу)

// ідемпотентність методів (методи, які при повторних запитах з однаковими даними не будуть змінювати стан серверу)
// ідемпотентні методи: GET, DELETE, PUT
// не ідемпотентні методи: POST, PATCH

// API https://jsonplaceholder.typicode.com/posts

// ******************** POST - CREATE ******************** \\

// const post = {
//   title: "Test title",
//   body: "Test body",
//   userId: 101,
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
// .then((res) => {
//   if (!res.ok) {
//     throw new Error(`Fetch error: ${res.statusText}`);
//   }

//   return res.json();
// })
//   .then(console.log)
//   .catch(console.log);
//.then(data => console.log(data))

//! AXIOS POST

// const post = {
//   title: "Test title",
//   body: "Test body",
//   userId: 101,
// };

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", post)
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

// ******************** GET - READ ******************** \\

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then(console.log)
//   .catch(console.log);

//! AXIOS GET

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

// ******************** PATCH - UPDATE ******************** \\

// const post = {
//   body: "Test body 11111",
//   userId: 102,
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Fetch error: ${res.statusText}`);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

// //! AXIOS PATCH

// const post = {
//   body: "Test body 11111",
//   userId: 102,
// };

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", post)
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

// ******************** PUT - UPDATE ******************** \\

// const post = {
//   body: "PUT this post",
// };

// const options = {
//   method: "PUT",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Fetch error: ${res.statusText}`);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

//! AXIOS PUT

// const post = {
//   body: "PUT this post",
// };

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", post)
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

// ******************** DELETE ******************** \\

// const options = {
//   method: "DELETE",
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Fetch error: ${res.statusText}`);
//     }

//     return res.json();
//   })
//   .then(console.log)
//   .catch(console.log);

//! AXIOS DELETE

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

// ******************** Практика ******************** \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Сервер розгортається локально на порту http://127.0.0.1:3000/api
// Для POST запиту використовуй ендпоінт => question
// Для GET запиту використовуй ендпоінт => getAll

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами
