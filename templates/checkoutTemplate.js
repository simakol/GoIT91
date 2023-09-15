export default function createMarkup(products) {
  return products
    .map(
      ({ img, name, price, quantity }) =>
        `
    <li class="cart-item">
        <img src="${img}" alt="${name}" class="product-img"/>
        <h2>${name}</h2>
        <p>Quantity: ${quantity}</p>
        <p>Total price: ${quantity * price} грн</p>
    </li>
    `
    )
    .join("");
}
