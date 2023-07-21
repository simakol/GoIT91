/***** Інструкція if та її варіації *****/
// const value = 10;

// if (value >= 5) {
//   console.log("Ваше число або цифра більша за 5!");
// }

// if (value >= 5) {
//   console.log("Ваше число або цифра більша за 5!");
// } else {
//   console.log("Ваше число або цифра менша за 5!");
// }

// const value = Number(prompt("Введіть число"));

// if (isNaN(value)) {
//   alert("Ви ввели не число!!");
// } else if (value > 0) {
//   alert(`${value} > 0`);
// } else if (value < 0) {
//   alert(`${value} < 0`);
// } else {
//   alert(`${value} === 0`);
// }

/***** Інструкція switch *****/

// const value = 1;

// switch (value) {
//   case 1: // 4 === 1
//     console.log("Ваша цифра - один");
//     break;
//   case 2: // 4 === 2
//     console.log("Ваша цифра - два");
//     break;
//   case 3: // 4 === 3
//     console.log("Ваша цифра - три");
//     break;
//   case 4:
//     console.log("Ваша цифра - чотири");
//     break;
//   case 5:
//     console.log("Ваша цифра - пʼять");
//     break;
//   default:
//     console.log("Сорі, немає такого значення!");
// }

/***** Тернарний оператор *****/

// condition ? true : false
// const value = 18;
// let msg = "";

// if (value >= 10 && value <= 20) {
//   msg = "ваше число знаходиться в діапазоні від 10 до 20 включно";
// } else {
//   msg = "Спробуй ще!";
// }

// console.log(msg);

//! ====

// const value = 15;
// let msg =
//   value >= 10 && value <= 20
//     ? "ваше число знаходиться в діапазоні від 10 до 20 включно"
//     : "Спробуй ще!";

// console.log(msg);

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// let number = 10;

// if (true) {
//   let number = 42;
//   if (true) {
//     number = 25;
//   }
// }

// console.log(number);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

/*
1. for (let i = 1; 1 <= 10; 1 += 1) {
  console.log(i = 1);
}
2. for (let i = 1; 2 <= 10; 2 += 1) {
  console.log(i = 2);
}
3. for (let i = 1; 3 <= 10; 3 += 1) {
  console.log(i = 3);
}
...
10. for (let i = 1; 10 <= 10; 10 += 1) {
  console.log(i = 10);
}
11. for (let i = 1; 11 <= 10 - false; 11 += 1) {
    тіло не виконується!!!
}

*/

/***** Цикл while *****/

// while (condition) {
//   // (statement)
// }

// let userNumber = Number(prompt("Введіть число"));

// // console.log(!!"") // !!false -> !true -> false

// while (isNaN(userNumber)) {
//   userNumber = Number(prompt("Ви ввели не число! Спробуйте ще раз"));
// }

// alert(`ваше число - ${userNumber}`);

/***** Цикл do while *****/

// do {
//   // statement
// } while (condition);

// let userNumber = 0;

// // console.log(!!"") // !!false -> !true -> false
// do {
//   userNumber = Number(prompt("Введіть число"));
// } while (isNaN(userNumber));

// alert(`ваше число - ${userNumber}`);

// break

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// continue

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// console.log(4 % 2) // 0
// console.log(13 % 5) // 3 -> 10 / 5 -> 2 -> 13 - 10 = 3

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// const userColor = prompt("Enter color: ").toLowerCase();
// let msg = "";

// switch (userColor) {
//   case "red":
//     msg = "action stop";
//     break;
//   case "yellow":
//     msg = "action ready";
//     break;
//   case "green":
//     msg = "action go";
//     break;
//   default:
//     msg = "action be careful";
// }

// alert(msg);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   const userAnswer = prompt(text).toLowerCase();
//   //   if (userAnswer === answer) {
//   //     alert("Ви відгадали!");
//   //   } else {
//   //     alert("Не вгадали!");
//   //   }
//   const msg = userAnswer === answer ? "Ви відгадали!" : "Не вгадали!";
//   alert(msg);
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );

// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

function getDays(deps) {
  /*
1. створюємо константи у які зберігаємо швидкість равлика вдень та вночі
2. створимо змінні у яких будемо рахувати прогрес равлика (кількість днів та кількість метрів)
3. запустимо цикл, який буде рахувати прогрес до тих пір, поки кількість метрів що він проповзе буде менша за глибину
    3.1. додаємо до кількості днів одиницю, а до кількості метрів швидкість равлика вдень
    3.2. віднімаємо від кількості днів швидкість равлика уночі якщо прогрес менший за глибину
*/

  const daySpeed = 7; // швидкість равлика вдень
  const nightSpeed = -2; // швидкість равлика вночі (відʼємна, бо він сповзає)
  let days = 0; // каунтер (лічільник) кількості витрачених днів
  let meters = 0; // каунтер кількості метрів що він подолав

  while (meters < deps) {
    // цикл, який працює до тих пір, поки равлик не виліз (його метри мерше за глибину)
    days += 1; // додаємо плюс один витрачений день
    meters += daySpeed; // додаємо до подоланих метрів швидкість за день

    if (meters < deps) {
      // якщо він ще не виповз
      meters += nightSpeed; // то віднімаємо кількість нічних метрів
    }
  }
  console.log(days);
}

getDays(42); // 8
getDays(17); // 3
getDays(18); // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//     const vowels = "aeiou";

// }
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8
