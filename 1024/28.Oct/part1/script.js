// some() —
// это метод, который используется для проверки,
// удовлетворяет ли хотя бы один элемент массива
// условию, заданному в функции обратного вызова.
// Возвращает true, если хотя бы один элемент
// соответствует условию, и false в противном случае.

// Чтобы использовать метод some(), ему необходимо передать колбэк-функцию, которая должна возвращать boolean-значение аналогично методам filter() и every()

const arr = ['string', 'hello', 'result4', 1, 2, 3, 4]
//метод find возвращает первый искомый элемент. В отличае от метода filter что возвращает массив с элементами прошедшими проверку,
//  find возвращает только одно искомое значение
const findEl = arr.find(item => item % 2 === 0)
const findEl2 = arr.find(item => item.length > 4)
const someValue = arr.some(item => item % 2 === 0)
const someValue2 = arr.some(item => item === 'result')
console.log(someValue, someValue2)
console.log(findEl, findEl2)

console.log('=======================')

// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
let numbers = [1, 2, -3, 4, 5]
const someNegNum = numbers.some(item => item < 0)
const findNegNum = numbers.find(item => item < 0)
console.log(someNegNum, findNegNum)

console.log('=======================')

// every() —
// это метод, который используется для проверки,
// удовлетворяют ли все элементы массива заданному
// условию, заданному в функции обратного вызова. Он
// возвращает true, если все элементы соответствуют
// условию, и false в противном случае.
const arr2 = ['stratege', 'hehehe', 'yehho', 'something']

const areAllElTrue = arr2.every(item => item.length > 4)
console.log(areAllElTrue)

console.log('=======================')

// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
let numbers2 = [1, 2, 3, 4, 5]
const posNum = numbers2.every(item => item > 0)
console.log(posNum)

console.log('=======================')

// Проверьте, являются ли все элементы массива четными числами с помощью метода every().
let numbers3 = [2, 4, 6, 8, 10]
const evenNum = numbers3.every(item => item % 2 == 0)
console.log(evenNum)

console.log('=======================')

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
let strings = ['apple', 'banana', 'orange', 'watermelon']
const lengthStr = strings.some(item => item.length > 10)
const lengthStr2 = strings.find(item => item.length > 10)
console.log(lengthStr, lengthStr2)

console.log('=======================')

// terminal
// npm init -y
// v json: "start": "node script.js"
// npm run start
// npm install nodemon -D
// v json: "dev": "nodemon script.js"
// npm run dev

// Создать массив из строк и чисел, вывести только строки, возведенные в верхний регистр
// const strNum = ['ein', 1, 'zwei', 2, 'drei', 3]
// const result = strNum
//   .filter(item => typeof item === 'string')
//   .map(item => item.toUpperCase())

// console.log(result)
