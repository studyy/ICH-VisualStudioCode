// Функция-конструктор в JS —
// это специальный тип функции, который
// используется для создания новых объектов с
// общими свойствами и методами. Когда функция
// вызывается с использованием оператора new, она
// создает новый объект и привязывает this к этому
// объекту.

// Конструктор —
// это обычная функция за тем исключением, что в ней
// мы можем установить свойства и методы.

// function User(name, age) {
//   this.name = name
//   this.age = age
//   this.printUser = function () {
//     console.log(`user: ${this.name}`)
//   }
//   this.param = function () {
//     return Math.pow(this.age, 2)
//   }
// }

// const newUser = new User('yury', 27)
// const polinaUser = new User('Polina', 30)
// const alexandUser = new User('Alex', 12)
// alexandUser.printUser()
// console.log(newUser.param())

// console.log(polinaUser, newUser, alexandUser)

// Создать функцию конструктор объекта Car, который имеет поля brand, model, year и метод print, который выводит в консоль все поля строкой.

// function Car(brand, model, year) {
//   this.brand = brand
//   this.model = model
//   this.year = year
//   this.print = function () {
//     console.log(this.brand, this.model, this.year)
//   }
// }

// const newCar = new Car('Toyota', 'Hiace', 1997)
// console.log(newCar)

// ==============================

// call, apply и bind —
// это методы, которые позволяют указать контекст
// выполнения для функции.

// call —
// это метод, который вызывает функцию с указанным
// значением this и индивидуально предоставленными
// аргументами.

// function greet() {
//   //1. Определяем контекст, его может изначально не быть
//   console.log(
//     `Hello, ${this.username}, ${this.age} and i have a car ${this.car} ${this.model}`
//   )
// }

// //2. Формируем будущий контекст
// // const user = { username: 'Alex' }
// const obj = {
//   username: 'yury1997',
//   age: 27,
//   isProgrammer: true,
//   greet: 'hello world',
//   car: 'toyota',
//   model: 'Camry',
// }

// //3. Передаем контекст с помощью метода call в функцию использующую будущий контекст
// greet.call(obj)

// function myCar(year) {
//   console.log(`I have ${this.car}, ${year}`)
// }
// myCar.call({car: 'toyota'}, 29)

// apply —
// это метод, который вызывает функцию с указанным
// значением this и аргументами, предоставленными в
// виде массива.

// function helloApply(param, mainData, userData) {
//   console.log(`Params: ${param}, ${mainData} maindata: ${this.mainData}`)
// }

// helloApply.apply({ mainData: 'somerandom data' }, [
//   'data, something, 2',
//   'random data',
// ])

// helloApply()

// bind —
// это метод, который создает новую функцию,
// привязывая указанное значение this к функции.
// Возвращаемая функция может быть вызвана позже.

// function helloUser() {
//   return `Hello, User: ${this.username}`
// }
// const delayedFn = helloUser.bind({ username: 'Jerry' })

// console.log(delayedFn())

// Написать функцию, которая принимает 2 аргумента и результат их сложения записывает в this.result. Использовать метод call().

function addFn(a, b) {
  return `Sum: ${(this.result = a + b)}`
}
console.log(addFn.call({ result: 0 }, 5, 5))

// Написать функцию, которая принимает 2 аргумента и результат их деления записывает в this.result. Использовать метод apply().

function divideFn(a, b) {
  return `Sum: ${(this.result = a / b)}`
}

console.log(divideFn.apply({ result: 0 }, [5, 5]))

// Написать функцию counter, которая будет прибавлять 1 к текущему значению.

function counter() {
  return `Counter: ${++this.result}`
}
// result = context
const result = counter.bind({ result: 1 })
console.log(result())
