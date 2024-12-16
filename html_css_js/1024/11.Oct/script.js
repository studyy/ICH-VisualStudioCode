const username = "Kumuam";
if (username.length > 15) {
  console.log(checkUsername(username));
} else {
  console.log(checkUsername("username less that 15 letters"));
}

function checkUsername(username) {
  // split("") razdelyaem na massiv, reverse() perevernul massiv, join("") soedinyaet massiv
  return username.split("").reverse().join("");
}
console.log(checkUsername(username));

// Отличие объекта от массива
// 1. Структура данных
// 2. Массив индексируется от 0 до бесконечности в зависимости от кол -ва элементов в нем
// 3. Массив - логическое перечисление данных принадлежащих к конкретной тематике (например, перечисляем типы банковского платежа, черты характера человека, увлечения, любимые блюда и тд),
// а объект - структура данных, четко описывающая объект по характеристикам в формате ключ: значение, где ключ - название описываемой хар - ки, а так же любые данные описываающие этот самый объект
// 4. Объект - тип данных, массив - специальный объект (иногда говорят, что массив - спец. тип данных)

const infoAboutme = {
  firstName: "Muhammad-Amin",
  lastName: "Kutushev",
  age: 25,
  hobbies: ["martial-arts", "basketball", "pc-games", "something-else"],
  car: {
    brand: "Daewhoo",
    model: "Nexia",
    year: 2003,
    maxSpeed: 180,
    passport: {
      engineId: "2385023RPT",
      timesInService: 122,
      kennenzeichen: "m532m90",
      previouseOwners: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
          habits: [
            "smoke",
            "listen radio",
            "drink alcohol",
            "didnt clean the car",
          ],
        },
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
          habits: ["listen radio", "did services", "cleaned car"],
        },
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
          habits: ["sing", "listen radio", "didnt clean the car"],
        },
      ],
    },
  },
};

const previouseOwners = infoAboutme.car.passport.previouseOwners;
console.log(previouseOwners);
for (const item of previouseOwners) {
  // console.log(item);
  const habits = item.habits;
  console.log(item.name);
  for (const habit of habits) {
    console.log(previouseOwner(habit, item.name));
  }
}

function previouseOwner(habits, name) {
  return `Habits of ${name}: ${habits}`;
}
console.log("=====================");

// Напиши программу, которая выводит все четные числа от 1 до 20.
// Пример:
// Вывод: 2, 4, 6, 8, 10, 12, 14, 16, 18,
function evenNumbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumbers();

console.log("=====================");

// Напиши программу, которая принимает массив и число, и выводит количество элементов массива, которые больше этого числа.
// Пример:
// Ввод: массив [1, 5, 8, 3, 7, 10] и число 5
// Вывод: Количество элементов больше 5: 3 (это числа 8, 7, и 10)
function countBiggerNumbers(array, number) {
  let count = 0;
  let biggerNumbers = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      count++;
      biggerNumbers += array[i] + ", ";
    }
  }
  return `Количество элементов больше 5: ${count} (это числа ${biggerNumbers})`;
}
console.log(countBiggerNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

console.log("=====================");

// Напиши программу, которая выводит сумму всех чисел от 1 до N, которые делятся на 3 без остатка.
// Пример:
// Ввод: N = 10
// Вывод: Сумма чисел, кратных 3: 18 (3 + 6 + 9)
// from teacher
function sumNum(n) {
  let count = 0;
  let exactNum = [];
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0) {
      count = count + i;
      exactNum.push(i);
    }
  }
  console.log(
    `Общее кол во чисел кратных 3: ${count}. Сами числа: ${exactNum}`
  );
}

sumNum(20);

console.log("=====================");

const arr = [1, 2, 3, 4, 5];
//push - положить в конец массива какой - то элемент (любой и любом кол - ве)
arr.push(3294234, "hehe", 32939);
const res = arr + " hello world";
console.log(res);

console.log("=====================");

// Напиши программу, которая выводит все числа от N до 1 в обратном порядке.
// Пример:
// Ввод: N = 5
// Вывод: 5, 4, 3, 2, 1
function reverseSumNum(n) {
  
}