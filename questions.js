// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

/*
1. напишемо гет запит на отримання всіх данних з бази (окрема ф-ція)
2. пишемо функцію, яка зробить розмітку з наших обʼєктів
*/

const refs = {
  list: document.querySelector(".js-list"),
};

serviceGetQuestions()
  .then(({ data }) => {
    console.log(data);
    refs.list.insertAdjacentHTML("beforeend", createMarkup(data));
  })
  .catch(console.log);

function serviceGetQuestions() {
  return axios.get("http://127.0.0.1:3000/api/getAll");
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, email, phone, comment }) => `
    <li class="card" data-id="${_id}">
        <div class="card-content">
            <h2 class="card-name">Name: ${name}</h2>
            <div>Phone: <span class="card-phone">${phone}</span></div>
            <div>Email: <span class="card-email"> ${email}</span></div>
            <div> <span class="card-comment">${comment}</span></div>
        </div>
    </li>
    `
    )
    .join("");
}
