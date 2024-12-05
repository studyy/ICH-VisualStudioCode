// this —
// это ключевое слово, которое используется для
// ссылки на текущий объект, в контексте которого
// выполняется код. Значение this зависит от того, как
// вызывается функция или как используется объект.

// Глобальный контекст —
// this ссылается на глобальный объект, который в
// браузере является объектом window. Глобальный
// объект предоставляет переменные и функции,
// доступные в любом месте программы. По умолчанию
// это те, что встроены в язык или среду исполнения.

// globalThis —
// это ключевое слово, с помощью которого можно
// получить доступ к глобальному объекту, независимо
// от контекста выполнения.

// console.log(window)
// function fn() {
//   console.log(this === window)
// }
// fn()

// const obj = {
//   name: 'Muhammad-Amin',
//   age: 26,
//   lastName: 'Kutushev',
//   //this можно использовать только в функциях объявленных через function declaration
//   infoAboutUser: function () {
//     console.log(`username is ${this.name}, ${this.age}, ${this.lastName}`)
//     console.log(this)
//   },
// }
// obj.infoAboutUser()

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', function () {
//   console.log(this)
// })

// Создать объект person со свойствами name и age и с методом myAge, который будет выводить сообщение в консоль с использованием свойства age объекта.

// const person = {
//   name: 'Muhammad-Amin',
//   age: 26,
//   myAge: function () {
//     console.log(`I'm ${this.age} years old.`)
//   },
// }
// person.myAge()

// Создать объект calculator с методами add и multiply и свойством result, равному 0, которые будут принимать два числа и возвращать их сумму и произведение соответственно в переменную result.

// const calculator = {
//   result: 0,
//   add: function (a, b) {
//     return (this.result = a + b)
//   },
//   multiply: function (x, y) {
//     this.result = x * y
//     return this.result
//   },
// }

// calculator.add(2, 2)
// console.log(calculator.result)
// calculator.multiply(3, 3)
// console.log(calculator.result)

// Создать обработчик события “click” для кнопки, при клике на которую будет меняться цвет фона.

// const btn = document.createElement('button')
// btn.innerText = 'Click'
// document.body.append(btn)

// btn.addEventListener('click', function () {
//   this.style.background = 'red'
// })

// Создать объект car с методами start, stop и свойством isRunning, равным false. Метод start должен установить isRunning в true и вывести сообщение "Car is running". Метод stop должен установить isRunning в false и вывести сообщение "Car stopped".

// const arr = {
//   isRunning: false,
//   start: function () {
//     this.isRunning = true
//     return 'Car is running'
//   },
//   stop: function () {
//     this.isRunning = false
//     return 'Car stopped'
//   },
// }

// console.log(arr.start())
// console.log(arr.stop())

// Задача 4: Объект rectangle
// Создать объект rectangle с методами area и perimeter, а также свойствами width и height. Метод area должен возвращать площадь, а метод perimeter — периметр.

// const rectangle = {
//   width: 0,
//   height: 0,
//   area: function (a, b) {
//     return (this.width = a) * (this.height = b)
//   },
//   perimeter: function (a, b) {
//     return 2 * ((this.width = a) + (this.height = b))
//   },
// }
// console.log(rectangle.area(4, 2))
// console.log(rectangle.perimeter(4, 2))

// Задача 5: Объект bankAccount
// Создать объект bankAccount с методами deposit, withdraw и свойством balance, равным 0. Метод deposit должен увеличивать balance на указанную сумму, а метод withdraw должен уменьшать balance, если на счете достаточно средств, или выводить сообщение "Insufficient funds".

const bankAccount = {
  balance: 0,
  deposit: function (sum) {
    this.balance += sum
    return `Balance: ${this.balance}`
  },
  withdraw: function (sum) {
    return this.balance >= sum
      ? `New balance ${(this.balance -= sum)}`
      : 'Insufficient funds'
  },
}
console.log(bankAccount.deposit(40))
console.log(bankAccount.withdraw(20))
