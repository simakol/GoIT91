// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home

/*
CHECKOUT:

1. завантажуємо масив товарів з ЛС, якщо товарів немає - пустий масив
2. перевірка на пустий масив, якщо він пустий то виводимо текст "Your basket is empty"
3. Якщо ж масив все таки є то рахуємо ціну за всі товари + показуємо кнопку
4. Робимо розмітку товарів з масиву товарів корзини
5. Вішаємо обробник подій на кнопку очистити
    5.1. очистити ЛС
    5.2. перекидуємо користувача на головну
*/

import createMarkup from "../templates/checkoutTemplate.js";

const PRODUCT_LS_KEY = "checkout";

const refs = {
  totalPrice: document.querySelector(".js-total-price"),
  clearBtn: document.querySelector(".js-clear"),
  list: document.querySelector(".js-list"),
};

const checkoutProducts = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
let totalPrice = 0;

if (checkoutProducts.length) {
  // якщо масив не пустий, тобто довжина не 0
  refs.clearBtn.hidden = false; // показую кнопку
  totalPrice = checkoutProducts.reduce(
    (acc, { quantity, price }) => (acc += price * quantity),
    0
  ); // рахую фінальну вартість
}

refs.totalPrice.textContent = totalPrice
  ? `Total price: ${totalPrice} грн`
  : "Your basket is empty";

refs.list.insertAdjacentHTML("beforeend", createMarkup(checkoutProducts));

refs.clearBtn.addEventListener("click", handleClearBasket);

function handleClearBasket() {
  localStorage.removeItem(PRODUCT_LS_KEY);
  window.location.href = "../index.html";
}
