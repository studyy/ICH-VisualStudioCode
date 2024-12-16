// class Person {
//   constructor(name, lastname, age) {
//     this.name = name
//     this.lastname = lastname
//     this.age = age
//   }
//   sayHallo() {
//     console.log(`${this.name} ${this.lastname} says hello.`)
//   }
// }

// const person1 = new Person('Muhammad-Amin', 'Kutushev', 26)
// person1.sayHallo()

// Статические свойства —
// это свойства, которые позволяют присваивать
// свойства непосредственно классу, а не его
// экземплярам. Доступны через имя класса, без
// необходимости создания экземпляра класса.

// Использование статистических методов
// ● Полезны, когда требуется функциональность, которая не зависит от конкретного экземпляра класса, но все же связана с самим классом.
// ● Могут использоваться для выполнения общих операций, обработки данных или предоставления вспомогательных функций.
// ● Не имеют доступа к свойствам или методам экземпляров класса, так как они принадлежат самому классу, а не его экземплярам.

// const obj1 = new Object()
// const newObj = new Array(12)
// Array.isArray(newObj)
// Array.isArray()

// Object.keys() —
// это стандартный статический метод, который
// возвращает массив, содержащий имена всех
// собственных перечислимых свойств переданного
// объекта.

// const obj = {
//   id: 2423,
//   name: 'Sunflower',
//   merchantName: 'Issomesmo',
//   paymentMethod: 'PIX',
//   additionalParams: ['param1', 'param2', 'param3'],
//   userData: {
//     username: 'sunflower123',
//     password: '1234565',
//   },
// }
// // for(let k in obj) {
// //     console.log(obj[k])
// // }
// // Object.keys()
// // Object.values()
// // Object.entries()

// const result = Object.keys(obj)
// const valueResult = Object.values(obj)
// const basicFormat = Object.entries(obj)
//   .map(([key, value]) => ({ key, value }))
//   .filter(item => !Array.isArray(item.value) && typeof item.value !== 'object')
// console.log(result)
// console.log(valueResult)
// console.log(basicFormat)

// const item = ['hello', 'world']
// const [p1, p2] = item
// console.log(p1, p2)

// static —
// это ключевое слово, с помощью которого
// объявляются статические методы.

class Person {
  static staticSayHello() {
    return 'hello everyone'
  }
}

const res = Person.staticSayHello()
console.log(res)

console.log('===========')

// Объявление статических методов
// Значением this при вызове User.staticMethod() является сам конструктор класса User

// ЗАДАНИЕ 1
// Создайте класс Calculator, у которого будет статический метод add(), который будет принимать два числа и возвращать их сумму.

class Calculator {
  static add(param1, param2) {
    return param1 + param2
  }
}

const calc = Calculator.add(1, 2)
console.log(calc)

console.log('===========')

// Создайте класс RandomNumberGenerator, у которого будет статический метод generate(), который будет генерировать случайное число в заданном диапазоне.

class RandomNumberGenerator {
  static generate(from, to) {
    return Math.floor(Math.random() * (from - to + 1)) + to
  }
}

const res1 = RandomNumberGenerator.generate(50, 150)
console.log(res1)

console.log('===========')

// Создайте класс StringUtils, у которого будет статический метод reverse(), который будет принимать строку и возвращать ее в обратном порядке.

class StringUtils {
  // Метод для переворачивания строки
  static reverse(str) {
    if (typeof str === 'string') {
      return str.split('').reverse().join('')
    }
    return '' // Возвращаем пустую строку, если входные данные не строка
  }
}

// Пример использования:
console.log(StringUtils.reverse('hello')) // "olleh"
console.log(StringUtils.reverse('JavaScript')) // "tpircSavaJ"
console.log(StringUtils.reverse(123)) // ""

console.log('===========')

// Создайте класс MathUtils (Математический утилитар), у которого будет статический метод getMax(), который будет принимать массив чисел и возвращать наибольшее число.

class MathUtils {
  // Метод для нахождения наибольшего числа в массиве
  static getMax(numbers) {
    if (Array.isArray(numbers) && numbers.length > 0) {
      return Math.max(...numbers) // Используем Math.max для нахождения максимального числа
    }
    return null // Возвращаем null, если массив пустой или не является массивом
  }
}

// Пример использования:
console.log(MathUtils.getMax([1, 5, 3, 9, 2])) // 9
console.log(MathUtils.getMax([7, 3, 8, 15])) // 15
console.log(MathUtils.getMax([])) // null
console.log(MathUtils.getMax('hello')) // null

console.log('===========')

// Статические свойства —
// это свойства, которые полезны для хранения каких-то
// стандартных значений класса.

class Book {
  constructor(book) {
    if (book) {
      this.book = book
    } else {
      this.book = Book.defaultBook
    }
  }

  static defaultBook = 'Alex Fromm'
}

const book1 = new Book()
const book2 = new Book('Jerry Smith')
console.log(book1)
console.log(book2)

console.log('===========')

// Создайте класс Counter, у которого будет статическое свойство count, которое будет хранить текущее значение счетчика.
// Создайте статический метод increment(), который будет увеличивать значение счетчика на 1.
// Создайте статический метод decrement(), который будет уменьшать значение счетчика на 1.

class Counter {
  // Статическое свойство для хранения текущего значения счетчика
  static count = 0

  // Статический метод для увеличения значения счетчика на 1
  static increment() {
    this.count++
  }

  // Статический метод для уменьшения значения счетчика на 1
  static decrement() {
    this.count--
  }
}

// Пример использования:
console.log(Counter.count) // 0
Counter.increment()
console.log(Counter.count) // 1
Counter.increment()
console.log(Counter.count) // 2
Counter.decrement()
console.log(Counter.count) // 1

console.log('===========')

// Создайте класс Configuration, у которого будет статическое свойство settings, которое будет хранить объект с настройками приложения.
// Создайте статический метод getSetting(key), который будет возвращать значение настройки по заданному ключу.
// Создайте статический метод setSetting(key, value), который будет устанавливать значение настройки по заданному ключу.

class Configuration {
  // Статическое свойство для хранения настроек
  static settings = {}

  // Метод для получения значения настройки по ключу
  static getSetting(key) {
    return this.settings[key]
  }

  // Метод для установки значения настройки по ключу
  static setSetting(key, value) {
    this.settings[key] = value
  }
}

// Пример использования:
Configuration.setSetting('theme', 'dark') // Устанавливаем значение для ключа 'theme'
Configuration.setSetting('language', 'en') // Устанавливаем значение для ключа 'language'
Configuration.setSetting('city', 'vienna')

// tut poluchaem ves Obj
console.log(Configuration.settings)

console.log(Configuration.getSetting('theme')) // 'dark'
console.log(Configuration.getSetting('language')) // 'en'
console.log(Configuration.getSetting('city'))
console.log(Configuration.getSetting('nonexistentKey')) // undefined

Configuration.setSetting('theme', 'light') // Обновляем значение для ключа 'theme'
console.log(Configuration.getSetting('theme')) // 'light'

console.log('===========')

// Создайте класс MathOperations (Математические операции), у которого будут статические свойства PI (число Пи) и E (число Эйлера).
// Создайте статический метод calculateCircleArea(radius), который будет возвращать площадь круга по заданному радиусу, используя статическое свойство PI.
// Создайте статический метод calculateExponentialPower(base, exponent), который будет возвращать результат возведения числа в степень, используя статическое свойство E.
// PI = 3.14159;
// E = 2.71828;

class MathOperations {
  static PI = 3.14159
  static E = 2.71828

  static calculateCircleArea(radius) {
    return radius * radius * this.PI
  }

  static calculateExponentialPower(base, exponent) {
    return Math.pow(base * this.E, exponent)
  }
}

console.log(MathOperations.calculateCircleArea(1))
console.log(MathOperations.calculateExponentialPower(2, 2))

console.log('===========')

// Задача 2: Фильтрация числовых значений
// Есть объект с данными о различных параметрах. Вам нужно получить только те значения, которые являются числами.

const stats = {
  clicks: 120,
  impressions: 3400,
  ctr: '5%',
  country: 'Brazil',
  avgPosition: 7.5,
}

const valueIsNumber = Object.values(stats).filter(
  item => typeof item === 'number'
)

console.log(valueIsNumber)
