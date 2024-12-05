// const a = 5
// const b = false
// const c = 10

// if(a < c && !b) {
//     console.log('Hello friend')
// }

// const a2 = 5
// const b2 = false
// const c2 = 10

// if(a2 < c2 && !b2) {
//     console.log('Hello friend')
// }

// const obj = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport: {
//         id: 34234,
//         address: {
//             city: 'Munchen',
//             country: 'Germany',
//             street: 'Avenida Portgual 1288',
//             ZIP: '04559-002'
//         }
//     },
//     sayMeow: function() {
//         return 'meooooow'
//     }
// }

// console.log(obj.sayMeow())

// const sayMeoow = function() {

// }

// const obj2 = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pet2', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport: {
//         id: 34234,
//         address: {
//             city: 'Munchen',
//             country: 'Germany',
//             street: 'Avenida Portgual 1288',
//             ZIP: '04559-002'
//         }
//     }
// }

// const obj3 = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pet3', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport: {
//         id: 34234,
//         address: {
//             city: 'Munchen',
//             country: 'Germany',
//             street: 'Avenida Portgual 1288',
//             ZIP: '04559-002'
//         }
//     }
// }
// const obj4 = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pe4', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport: {
//         id: 34234,
//         address: {
//             city: 'Munchen',
//             country: 'Germany',
//             street: 'Avenida Portgual 1288',
//             ZIP: '04559-002'
//         }
//     }
// }
// const obj5 = {
//     kittyName: 'Persik',
//     age: 48,
//     color: 'orange white',
//     habits: ['scratch a sofa', 'love to be pet5', 'sleep on lags'],
//     playful: false,
//     bonus: 'morning alarm',
//     paws: 4,
//     passport: {
//         id: 34234,
//         address: {
//             city: 'Munchen',
//             country: 'Germany',
//             street: 'Avenida Portgual 1288',
//             ZIP: '04559-002'
//         }
//     }
// }

// const habit = obj.habits[1]
// const habit2 = obj2.habits[1]
// const habit3 = obj3.habits[1]

// // function greetings() {
// //     console.log('hello, user')
// // }

// // greetings()
// // параметры - описание вашей функции это то, что мы берем из головы
// function kitten(kittenName, age, habits, color) {
//     //функция должна всегда что - то возвращать
//     return color
// }

// // реальные аргументы функции (то что пишется в скобочках при объявлении функции) передаются ИСКЛЮЧИТЕЛЬНО при вызове функции
// kitten('Dynya', 36, ['scratch a sofa', 'love to be pet', 'sleep on lags'], 'brown')
// kitten('Persik', 48, ['scratch a sofa', 'love to be pet', 'sleep on lags'], 'orange white')
// const habitsOfCercei = ['scratch a sofa', 'love to be pet', 'sleep on lags']
// kitten('Cercei', 2, habitsOfCercei, 'white')

// function multiyply(a, b, c) {
//     return a * b * c
// }

// console.log(multiyply(2, 2, 2));

// //присваиваете в переменную result результат вызова функции multiply
// const result = multiyply(2, 3, 4)

// console.log(result);

// if(result > 80) {
//     console.log(multiyply(20, 5, 9))
// } else {
//     console.log(multiyply(9, 8, 7))
// }

// console.log(result + 100);

// // 1. Объявление главной функции
// function hello(callbackHi) {
//     return callbackHi
// }

// // 2. сама функция что используется в качестве коллбека (функция обратного вызова)
// function sayHello(string) {
//     console.log(string);
// }

// hello(sayHello('hello world'))

// function fn(a, a2, a3, a4, username) {
//     // return [a, a2, a3, a4]
//     return {
//         1: a,
//         2: a2,
//         3: a3,
//         4: a4,
//         name: username
//     }
// }
// const res = fn(3, 2, 56, 1, 'Yury')
// console.log(res[3]);

// Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".
// Создайте функцию `square`, которая запрашивает у пользователя число, возводит его в квадрат и выводит результат.
// Напишите функцию `isEven`, которая запрашивает у пользователя число, проверяет его на четность и выводит результат в консоль.
// Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.

// function randomFN(arr, str) {
//     let count = 0
//     for(let i = 0; i < arr.length; i++) {
//         count += arr[i]
//     }

//     const splitStr = str.split('').reverse().join('')

//     return {
//         sum: count,
//         reverseString: splitStr
//     }

// }

// console.log(randomFN([1, 2, 3, 4], 'str'))

// function fn(name) {
//   return `Hello, ${name}`;
// }
// console.log(fn("Yury"));

// // 1. синтаксис
// // 2. в стрелочной нельзя использовать ключевое слово arguments
// // 3. стрелочная функция имеет доступ лишь  к глобальному контексту this ( тое есть window)s
// const arrowFn = (name) => {
//   return `Hello, ${name}`;
// };
// console.log(arrowFn("Yury2"));

// console.log("=====================");

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(50, 50));

// console.log("=====================");

// // Создайте функцию `greet`, которая выводит в консоль приветствие "Привет, мир!".
// function greet() {
//   return "Hello world";
// }
// console.log(greet());

// console.log("=====================");

// // Создайте функцию `square`, которая запрашивает у пользователя число, возводит его в квадрат и выводит результат.
// // Math.pow(2, степень в которую возводите)
// function square(a) {
//   return Math.pow(a, 2);
// }
// console.log(square(1));

// console.log("=====================");

// // Напишите функцию `isEven`, которая принимает число в качестве аргумента, проверяет его на четность и выводит результат в консоль.
// function isEven(a) {
//   if (a % 2 === 0) {
//     return "true";
//   } else {
//     return "folse";
//   }
// }
// console.log(isEven(20));

// console.log("=====================");

// // Создайте функцию `concatenate`, которая запрашивает у пользователя две строки, объединяет их и выводит результат.
// const concatenate = (string1, string2) => {
//   return string1 + string2;
// };
// console.log(concatenate("Hello", "World"));

// console.log("=====================");

// // Создайте объект person с двумя свойствами: name и age. Задайте им значения и выведите объект в консоль.
// // const person = {
// //   personName: "Muhammad-Amin",
// //   age: 25,
// // };
// // console.log(person);

// // console.log("=====================");

// // Напишите функцию multiply, которая принимает два числа в качестве аргументов и возвращает их произведение. Вызовите функцию и выведите результат в консоль.
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 5));

// console.log("=====================");

// // Перепишите функцию multiply из предыдущей задачи с использованием стрелочной функции.
// const multiply2 = (a, b) => {
//   return a * b;
// };
// console.log(multiply2(5, 5));

// console.log("=====================");

// // Добавьте метод greet в объект person, который выводит приветствие с именем человека. Вызовите метод и выведите результат в консоль. Добавить не руками в объект, а с помощью обращению к объекту и добавлению доп свойства
// // Obj.newProperty = ‘hello’
// const person = {
//   personName: "Muhammad-Amin",
//   age: 25,
// };
// person.greet = function () {
//   return "Hello " + person.personName;
// };
// console.log(person.greet());

// console.log("=====================");

// // Add - сложение
// // Subtract - вычитание
// // Multiply - умножение
// // Divide - деление

// // Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую операцию. Выведите результаты операций в консоль.
// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   mustiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     return a / b;
//   },
// };
// console.log(calculator.divide(2, 2));

console.log("=====================");

// Напишите функцию, которая подсчитывает количество элементов с определенным значением в массиве.

// function countElements(array, value) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countElements([1, 2, 1, 1, 3, 4, 5, 2, 3], 1));

const countElements = (array, value) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      count++;
    }
  }
  return count;
};
console.log(countElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 4));
