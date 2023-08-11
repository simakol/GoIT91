// Тестовий масив для теоретичного блоку

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring", "Python"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// console.table(users);

// ********map******** \\

// const names = users.map((user) => {
//   return user.name;
// });

// const names = users.map(({ name }) => name);

// console.log(names);

// ********flatMap******** \\
// const skills = users.flatMap(({ skills }) => skills);

// console.log(skills);

// ********flat******** \\

// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// const arr2 = arr.flat(3);
// console.log(arr2);

// const arr = [
//   1,
//   2,
//   3,
//   [4, 5, [44, 3, 3], [6, 7, [8, 9, [[[[[5, 4, 23, [[[[434]]]]]]]]]]]],
// ];
// const arr2 = arr.flat(Infinity);
// console.log(arr2);

// ********filter******** \\

// const result = users.filter(({ age }) => age > 30);
// console.log(result);

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills.indexOf("Python"));

// const skillsUnique = skills.filter((skill, i, arr) => arr.indexOf(skill) === i);

// console.log(skills);
// console.log(skillsUnique);

/*
['JavaScript', 'HTML', 'CSS', 'Python', 'Data Analysis', 'JavaScript', 'React', 'Node.js', 'Java', 'Spring', 'Python', 'C++', 'C#']

1. (skill = "JavaScript", i = 0, arr) => arr.indexOf("JavaScript") === 0); // 0 === 0 -> true
2. (skill = "HTML", i = 1, arr) => arr.indexOf("HTML") === 1); // 1 === 1 -> true
...
6. (skill = "JavaScript", i = 5, arr) => arr.indexOf("JavaScript") === 5); // 0 === 5 -> false

*/

// ********find******** \\

// const user = users.find(({ skills }) => skills.includes("Java"));
// console.log(user);

// ********findIndex********\\

// const index = users.findIndex(({ skills }) => skills.includes("Java"));

// const index = users.findIndex(({ id }) => id === 4);

// console.log(index);

// ********some********\\
// const isKnow = users.some(({ skills }) => skills.includes("GO"));

// console.log(isKnow);

// ******** every ********\\
// const isKnow = users.every(({ skills }) => skills.includes("Python"));

// const result = users.every(({ age }) => age >= 20 && age <= 40);

// console.log(result);

// ********sort********\\

// const sortedUsers = [...users].sort((a, b) => b.age - a.age); // за спаданням
// const sortedUsers = [...users].sort((a, b) => a.age - b.age); // за зростанням

// console.table(sortedUsers);

// const sortedUsers = [...users].sort((a, b) => b.name.localeCompare(a.name)); // за спаданням
// const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name)); // за зростанням

// console.table(sortedUsers);

// ********reduce********\\

// const sumOfAges = users.reduce((acc, { age }) => acc + age, 0);

// console.log(sumOfAges / users.length);

/*
1. users.reduce((acc = 0, { age = 28 }) => 0 + 28, 0);
2. users.reduce((acc = 28, { age = 32 }) => 28 + 32, 0);
3. users.reduce((acc = 60, { age = 24 }) => 60 + 24, 0);
...

*/

// const sumOfAges = users.reduce((acc, { age }) => acc + age);

// console.log(sumOfAges);

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, el) => acc + el);

// console.log(sum);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const totalGrade = grades.reduce((acc, grade) => acc + grade, 0);
//     return {
//       name,
//       avarage: Math.round(totalGrade / grades.length),
//     };
//   });
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age >= 20);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.

// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(({ title: bookTitle }) => title === bookTitle);
//   return book ?? "Not found";
// }
// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.

// const products = [
//   { id: 2, name: "Banana", price: 0.99 },
//   { id: 1, name: "Apple", price: 1.99 },
//   { id: 3, name: "Orange", price: 2.49 },
//   { id: 4, name: "Grapes", price: 3.99 },
// ];

// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }

// console.log(getProducts(products));
// console.log(products);

// let a = 7;
// function sum(b) {
//   return a + b;
// }

// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// a = 10
// console.log(sum(3));
