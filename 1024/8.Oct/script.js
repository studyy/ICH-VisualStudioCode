const arr = ["hello", 12, true, { myName: "Yury" }, [12, 29, 9, 3, 6]];
console.log(arr);
const objArr = [
  {
    id: 0,
    title: "title",
    description: "description",
  },
  {
    id: 1,
    title: "title",
    description: "description",
  },
  {
    id: 2,
    title: "title",
    description: "description",
  },
  {
    id: 334232423,
    title: "title",
    description: "description",
  },
  {
    id: 4,
    title: "title",
    description: "description",
  },
];

console.log(objArr[3]);

//НЕ ВНИКАЕМ. Получение данных в формате массив объктов с сервера
// async function fetchApi() {
//     try {

//         const response = await fetch('https://jsonplaceholder.typicode.com/comments')
//         const data = await response.json()
//         console.log(data);

//     } catch(e) {
//         throw new Error('Request has fallen')
//     }
// }

// fetchApi()

// Способы объявления массива
// 1. С помощью литеральной нотации a.k.a руками
const arrResult = [1, 2, 3, 4, 5];
// const fakeArr = []
// fakeArr.length = 10
// fakeArr.fill('vfvf')
// console.log(fakeArr)
// 2. С помощью оператора new + метода Array()
const newArr = new Array(10).fill("hello");
console.log(newArr);

const str = "hello world";
const obj = {
  myName: "Muhammad-Amin",
  myLastName: "Kutushev",
  age: 25,
};

console.log(str.split("").reverse().join(""));
const fruitsArr = [
  "apple",
  "sdcsc",
  "sdcsd",
  "ascsac",
  "kiwi",
  "orange",
  "mango",
  "svdsvs",
  "sdvsdv",
  "wefwvwvdv",
  "jabuticaba",
];
//Всегда округляйте, когда делите неизвестное кол - во на рандомное число, например, при поиске середины массива. Math.floor() - округляет к меньшему целому числу 5.9 = 5
// Math.round - к ближайшему
//  Math.ceil - к большему
const mid = Math.floor(fruitsArr.length / 2);
// - середина массива
console.log(fruitsArr[mid]);
//Конец массива
console.log(fruitsArr[fruitsArr.length - 1]);

// Создайте массив с вашими любимыми цветами и выведите его в консоль.
const arrColor = ["black", "white", "red"];
console.log(arrColor);

// Создайте массив чисел и выведите каждый элемент в консоль.
const arrNumbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrNumbers.length; i++) console.log(arrNumbers[i]);


console.log('tut probel');

// Создайте массив чисел и выведите только четные числа.
const arrNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrNumbers2.length; i++) {
  if (arrNumbers2[i] % 2 == 0) {
    console.log(arrNumbers2[i]);
  }
}


console.log('tut probel');

// Создайте массив чисел и найдите их сумму.
// Создайте массив строк и выведите их в обратном порядке.

console.log('tut probel');
console.log('tut probel');
console.log('tut probel');

// Вывести числа от 1 до 5, прервать цикл, если текущее число равно 3.
// Вывести только нечетные числа от 1 до 6, используя continue.
// Вывести числа от 1 до 10, прервать цикл, если текущее число больше 7.
// Вывести числа от 1 до 5, пропустить вывод числа 3 с использованием continue.