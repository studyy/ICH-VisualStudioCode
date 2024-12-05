// const srt = "hello world"

// console.log(srt.split(''));

// const myName = "Muhammad-Amin"
// const lastName = "Kutushev"
// const age = '25'
// const combineInfo = `Hello, my name is ${myName} ${lastName}, my favorite phrase is 'dadada'`

// console.log(combineInfo);

/* 
const a = {
  a: 1,
  b: 2,
}                           
// Обьект с '+' будет всегда строкой
const b = 'hello'
const c = a + b   //string
*/
/* 
const a = undefined
const b = null
const c = a + b   //NaN - number
 */
/* 
const a = false // это 0
const b = true // это 1
const c = a + b // = 1 (Number)
 */
/* 
const a = null // это 0
const b = undefined // отсутсвие
const c = a + b // NaN (Number)
 */
/* 
const a = null // это 0
const b = 3 // number
const c = a + b // 3 Number
 */
/* 
const a = true // это 1
const b = null // 0
const c = a + b // 1 Number 
*/
// const a = true // это 1
// const b = 2
// const c = a + b // 3 Number
/* 
null == 0 //false
*/
// console.log(c)
// console.log(typeof c)

const a = 5;
const b = 10;
const c = (b * a) / 2;

if (a > b && a < c) {
  console.log("все получилось");
} else {
  console.log("не вышло");
}

// ternarniy operator
a > b && a < c ? console.log("все получилось") : console.log("не вышло");

// exer
const sum = 2000;

if (sum >= 1000 && sum < 5000) {
  console.log("скидка 5%");
} else if (sum >= 5000 && sum < 10000) {
  console.log("скидка 10%");
} else if (sum >= 10000) {
  console.log("скидка 15%");
} else {
  console.log("скидки нет");
}

// exer

const aa = 2;

if (aa % 2 == 0) {
  console.log("da");
} else {
  console.log("net");
}

aa % 2 == 0 ? console.log("da") : console.log("net");

console.log(aa % 2 === 0);

// exer

const aaa = 3;

if (aaa % 3 == 0 && aaa % 5 == 0) {
  console.log("da");
} else {
  console.log("net");
}

aaa % 3 == 0 || aaa % 5 == 0 ? console.log("da") : console.log("net");

console.log(aaa % 3 && aaa % 5);

// exercise
// Напиши программу, которая проверяет логин пользователя:
// Если логин равен "admin", выведи "Привет, админ".
// Если логин равен "user", выведи "Привет, пользователь".
// В остальных случаях выведи "Привет, гость".
// РЕШАЕМ ТЕРНАРНЫМ ОПЕРАТОРОМ a = 5 ? ‘Good’ : ‘nothing’

// login == 'admin'

// exer
// Напиши программу, которая проверяет правильность ввода данных пользователя при регистрации. Пользователь вводит:
// Имя (должно быть не пустым)
// Возраст (должен быть не меньше 18)
// Пароль (должен содержать минимум 6 символов)
// Если хотя бы одно из этих условий не выполняется, программа должна вывести сообщение об ошибке. Если все условия выполнены, выводится сообщение об успешной регистрации.

const inputValue = "hello world";

if (inputValue.length < 8) {
  console.log();
}
