// *********Подія сlick********* \\
// Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі
// const btn = document.querySelector(".js-click");
// const box = document.querySelector(".js-box");

// btn.addEventListener("click", moveBox);

// let step = 0;
// function moveBox() {
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// }

// *********Подія input********* \\
// Виводь в консоль все що користувач вводить в input

// const input = document.querySelector(".js-user-name");

// input.addEventListener("input", handleInput);

// function handleInput(event) {
//   console.log(event.currentTarget.value);
// }

// *********Подія change********* \\

// const input = document.querySelector(".js-user-name");

// input.addEventListener("change", handleChange);

// function handleChange(event) {
//   console.log(event.currentTarget.value);
// }

// *********Подія blur********* \\
// Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням
// const input = document.querySelector(".js-user-name");

// input.addEventListener("blur", handleBlur);

// function handleBlur(event) {
//   console.log(event.currentTarget.value);
// }

// *********Подія submit********* \\
// Опрацюй форму та збери фідбек користувача в об'єкт

// const feedbackForm = document.querySelector(".js-form");

// feedbackForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.elements);
//   const { email, password, comment } = event.currentTarget.elements;

//   const info = {
//     email: email.value,
//     password: password.value,
//     comment: comment.value,
//   };

//   console.log(info);
//   event.currentTarget.reset();
// }

// *********Подія keydown / keyup / keypress********* \\
// document.addEventListener("keydown", handleKeyDown);

// function handleKeyDown(event) {
//   console.log(event.code);

//   if (event.code === "Escape") {
//     console.log("привіт!");
//   } else {
//     console.log("бувай!");
//   }
// }

// *********Обробка комбінацій клавіш********* \\

// document.addEventListener("keydown", handleKeyDown);

// function handleKeyDown(event) {
//   // console.log(event.code);
//   // console.log(event);
//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyC") {
//     event.preventDefault();
//     console.log("Ану не кради інформацію!!");
//   }
// }

// ***************Практика************** \\
// Реалізуй пошук автомобілів по сайту
// Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const refs = {
  list: document.querySelector(".js-list"),
  searchForm: document.querySelector(".js-form"),
};

refs.searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { query, options } = event.currentTarget.elements;

  console.log(query.value, options.value);

  const result = cars.filter(
    (car) =>
      car[options.value].toLowerCase() === query.value.toLowerCase().trim()
  );

  refs.list.innerHTML = createMarkup(result);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) =>
        `<li data-car-id="${id}" class="car-card">
        <img src="${img}" alt="${type}" class="car-image">
        <h2 class="car-title">${car}</h2>
        <h3 class="car-type">${type}</h3>
        <span class="car-price">${price}</span>
        </li>`
    )
    .join("");
}

refs.list.insertAdjacentHTML("beforeend", createMarkup(cars));
