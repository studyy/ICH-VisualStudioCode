const randomNumArr = [4, 2, 8, 10, 23, 5, 8]
// const res = randomNumArr.sort((a, b) => a - b)
// console.log(res)

// for (let i = 0; i < res.length; i++) {
//   for (let j = 0; j < res.length - i; j++) {
//     if (res[j] < res[j - 1]) {
//       let temp = res[j]
//       res[j] = res[j - 1]
//       res[j - 1] = temp
//     }
//   }
// }
// console.log(randomNumArr)

console.log('=================')

// shift —
// это метод, который удаляет первый элемент из
// массива и возвращает его значение. Все остальные
// элементы сдвигаются на одну позицию влево.

// unshift —
// это метод, который добавляет один или несколько
// элементов в начало массива и возвращает новую
// длину массива.
// const res = randomNumArr.shift()

const newData = randomNumArr.unshift('hello string', 'hello world')
console.log(newData, randomNumArr)

console.log('=================')

// Создайте массив colors с элементами "red", "green", "blue". Используйте метод shift(), чтобы удалить первый элемент массива.
const colors = ['red', 'green', 'blue']
colors.shift()
console.log(colors)

// Создайте массив fruits с элементами "banana", "orange". Используйте метод unshift(), чтобы добавить в начало массива новые фрукты: "apple", "grape".
const fruits = ['banana', 'orange']
fruits.unshift('apple', 'grape')
console.log(fruits)

console.log('=================')

// reduce —
// это метод, который используется для преобразования
// массива в одно значение путем применения функции к
// каждому элементу массива. Он принимает функцию
// обратного вызова и необязательное начальное значение
// в качестве аргументов.

// let counter = 0
// for(let i = 0; i < randomNumArr.length; i++) {
//     counter += randomNumArr[i]
// }

// console.log(counter);

const randomNumArr1 = [4, 2, 8, 10, 23, 5, 8]
//возвращаем одно значение - аккумулятор обозначающий общее значение полученное в результате работы коллбек функции внутри метода reduce
const res = randomNumArr1.reduce((prevValue, currentValue) => {
  return prevValue + currentValue
})
console.log(res)

const max = randomNumArr1.reduce((a, b) => Math.max(a, b))
console.log(max)

const randomStrArr3 = ['helloi', 'world', 'jjfffjd']
const resString = randomStrArr3.reduce((prevValue, currentValue) => {
  return prevValue + ' ' + currentValue
})

console.log(resString)

console.log('=================')

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const numbers = [5, 10, 15, 20]
function sumNum(arr) {
  return arr.reduce((prevValue, currentValue) => prevValue + currentValue)
}
console.log(sumNum(numbers))

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы вычислить сумму всех элементов массива.
const words = ['Hello', ' ', 'world', '!']
function sumStrings(arr) {
  return arr.reduce((prevValue, currentValue) => prevValue + currentValue)
}
console.log(sumStrings(words))

// Создайте массив чисел. Напишите функцию, используя метод reduce, чтобы найти максимальное число в массиве.
const numbers2 = [14, 5, 22, 8, 45, 11]
function maxNum(arr) {
  return arr.reduce((prevValue, currentValue) =>
    Math.max(prevValue, currentValue)
  )
}
console.log(maxNum(numbers2))

console.log('=================')

const obj = {
  name: 'Muhammad',
  sayHi: function () {
    return `Hello, ${this.name}!`
  },
}
console.log(obj.sayHi())

this.fullName = 'Muhammad'
console.log(this.fullName)

function fn(name, lastName) {
  ;(this.name = name), (this.lastName = lastName)
}

const newObj = new fn('Yury', 'Arakelov')
console.log(newObj)

console.log('=================')

// Array.from() —
// это метод, который создаёт новый массив на основе
// переданного объекта. Метод возвращает новый
// массив, составленный из элементов переданного
// объекта.

const str = 'hello world'
const newArr = Array.from(str)
console.log(newArr)

const randomNumArr2 = [4, 2, 8, 10, 23, 5, 8]
const brandNewArr = Array.from(randomNumArr2, item => Math.pow(item, 3))
console.log(brandNewArr)
console.log(randomNumArr2)

console.log('=================')

// randomNumArr
//     .filter((item) => item)
//     .map(item => item)
//     .reduce(item => item)

// Используя методы filter() и reduce(), вычислите сумму всех четных чисел в числовом массиве.
let numericArray = [1, 2, 3, 4, 5]
const newNumArr = numericArray
  .filter(item => item % 2 == 0)
  .reduce((a, b) => a + b)
console.log(newNumArr)

// Используя метод from(), создайте новый массив из строки, содержащий только уникальные символы.
let str1 = 'hello'
const uniqueStr = Array.from(new Set(str1))
console.log(uniqueStr)

let newStr = 'hellllllooooojejejejejjjjj'
const formattedArr = Array.from(new Set(newStr))
console.log(formattedArr)

// Используя методы map(), sort() и reduce(), вычислите сумму квадратов всех положительных чисел в числовом массиве, отсортировать массив по возрастанию, последовательно используя filter() map() и reduce().
let numericArray1 = [-2, 3, -5, 1, 4]
const veryNewArr = numericArray1
  .filter(item => item >= 1)
  .map(item => Math.pow(item, 2))
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b)
console.log(veryNewArr)

console.log('=================')

// У вас есть массив объектов, каждый объект представляет продукт с его ценой и количеством на складе. Необходимо выполнить следующие действия:
// Используя map(), создать новый массив, содержащий стоимость каждого продукта (цена умноженная на количество).
// Используя filter(), получить только те продукты, у которых количество на складе больше 0.
// Используя reduce(), найти общую стоимость всех продуктов на складе.
const products = [
  { name: 'Product 1', price: 100, quantity: 2 },
  { name: 'Product 2', price: 50, quantity: 0 },
  { name: 'Product 3', price: 200, quantity: 1 },
  { name: 'Product 4', price: 30, quantity: 5 },
]
const formattedArr1 = products
  .map(item => item.price * item.quantity)
  .filter(item => item > 0)
  .sort((a, b) => a - b)
  .reduce((prevValue, currentValue) => prevValue + currentValue)
console.log(formattedArr1)

console.log('=================')
