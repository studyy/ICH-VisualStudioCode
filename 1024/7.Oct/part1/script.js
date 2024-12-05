let a;

if (a) {
  console.log("here");
} else {
  console.log("not here");
}

// Определение положения числа:
// Объявите переменную number и присвойте ей любое число.
// Используя условия if, else if и else, определите, является ли число положительным, отрицательным или нулем.
// Выведите соответствующее сообщение в консоль.

const number = 0;

if (number > 0) {
  console.log("positive number");
} else if (number < 0) {
  console.log("negative number");
} else {
  console.log("Zero");
}

// Оценка студента:
// Объявите переменную grade и присвойте ей значение от 1 до 5.
// Используя условия if, else if и else, определите оценку студента (например, "Отлично", "Хорошо", "Удовлетворительно", "Неудовлетворительно").
// Выведите результат в консоль.

const grade = 1;

if (grade == 1) {
  console.log("Note: Sehr gut");
} else if (grade == 2) {
  console.log("Note: Gut");
} else if (grade == 3) {
  console.log("Note: Befriedigend");
} else if (grade == 4) {
  console.log("Note: Ausreichend");
} else if (grade == 5) {
  console.log("Note: Ungenügend");
} else {
  console.log("Geben Sie Ihre Note ein");
}

// Задача 1:

// Интернет-магазин предлагает доставку по разным тарифам в зависимости от расстояния до покупателя:

//  • Если расстояние меньше 10 км – доставка бесплатная.
//  • Если расстояние от 10 до 50 км – доставка стоит 50 рублей.
//  • Если расстояние от 50 до 100 км – доставка стоит 100 рублей.
//  • Если расстояние больше 100 км – доставка невозможна.

// Программа должна принимать расстояние и выводить итоговую стоимость доставки или сообщение, что доставка невозможна.

const distance = 2;

if (distance < 10) {
  console.log("доставка бесплатная");
} else if (distance >= 10 && distance < 50) {
  console.log("доставка стоит 50 рублей");
} else if (distance >= 50 && distance < 100) {
  console.log("доставка стоит 100 рублей");
} else if (distance > 100) {
  console.log("доставка невозможна");
}

// Задача 2

// Напиши программу, которая вычисляет налог в зависимости от заработка человека:

//  • Если доход меньше 15,000 рублей – налог 5%.
//  • Если доход от 15,000 до 50,000 рублей – налог 10%.
//  • Если доход больше 50,000 рублей – налог 15%.

// Программа должна выводить сумму налога и общую сумму после уплаты налога.




// Задача3

// У двоих игроков в настольной игре есть количество очков. Программа должна определить, кто из них победил:

//  • Если у игрока 1 больше очков, чем у игрока 2, вывести: “Игрок 1 победил с количеством очков: {очки игрока 1}”.
//  • Если у игрока 2 больше очков, вывести: “Игрок 2 победил с количеством очков: {очки игрока 2}”.
//  • Если у них одинаковое количество очков, вывести: “Ничья, оба игрока набрали {очки} очков”.




// **

let b = 10;

switch (b) {
  case 5:
    console.log("its 5");
    break;
  case 10:
    console.log("its 10");
    break;
  case 15:
    console.log("its 15");
    break;
  case 20:
    console.log("its 20");
    break;
  case 25:
    console.log("its 25");
    break;
  default:
    console.log("Number not found");
}

// Объявите переменную month и присвойте ей значение от 1 до 12, представляющее месяц.
// Используя конструкцию switch, определите текущий сезон (весна, лето, осень, зима) и выведите его в консоль.

let month = 11;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autunm");
    break;
  default:
    console.log("PUT THE CORRECT MONTH NUMBER!!!");
}

// **

const x = 400;
const y = 200;
const z = x + y;

x > y
  ? console.log("x > y")
  : z > y && z > x
  ? console.log("z has the biggest number")
  : console.log(bUllcrap);


// **

