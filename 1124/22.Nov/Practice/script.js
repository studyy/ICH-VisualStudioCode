// Задача 1: Класс Book
// Создайте класс Book, который принимает title (название книги) и author (автора) при создании.
// Добавьте метод getDescription(), который возвращает строку:"Книга '<название>' написана автором <автор>."

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  getDescription() {
    return `Книга ${this.title} написана автором ${this.author}.`
  }
}

const book = new Book('somebooktitle', 'someauthor')
console.log(book.getDescription())

console.log('================')

// Задача 2: Класс Counter
// Создайте класс Counter, который имеет свойство count, равное 0 при создании.
// Добавьте методы:
// increment() — увеличивает count на 1.
// decrement() — уменьшает count на 1.
// getValue() — возвращает текущее значение count.

class Counter {
  count = 0
  increment() {
    return this.count++
  }
  decrement() {
    return this.count--
  }
  getValue() {
    return count
  }
}
const count = new Counter()
count.increment()
count.increment()
count.increment()

count.decrement()

console.log(count.getValue())

console.log('================')

// Задача 3: Класс Person
// Создайте класс Person, который принимает name и age при создании.
// Добавьте метод greet(), который выводит в консоль:"Привет, меня зовут <name> и мне <age> лет."
// Добавьте метод celebrateBirthday(), который увеличивает возраст на 1.

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    return `Привет, меня зовут ${this.name} и мне ${this.age}  лет.`
  }
  celebrateBirthday() {
    return this.age++
  }
}
const someone = new Person('Muhammad-Amin', 26)
console.log(someone.greet())
someone.celebrateBirthday()
console.log(someone.celebrateBirthday())

console.log('================')

// Задача 1: Наследование животных
// Создайте базовый класс Animal, который принимает name (имя животного) в конструкторе.
// Добавьте метод speak(), который выводит в консоль:"Я — <имя>, и я издаю звуки."
// Создайте класс Dog, который наследует Animal, и переопределите метод speak(), чтобы он выводил:"Я — <имя>, и я лаю: Гав-гав."

class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    return `Я — ${this.name}, и я издаю звуки.`
  }
}

class Dog extends Animal {
  speak() {
    return `Я — ${this.name},  и я лаю: Гав-гав.`
  }
}
const someAnimal = new Animal('aSpecialName')
console.log(someAnimal.speak())

const someDog = new Dog('Buddy')
console.log(someDog.speak())

console.log('================')

// Задача 2: Наследование форм
// Создайте базовый класс Shape, который принимает color (цвет) в конструкторе.
// Добавьте метод getColor(), который возвращает текущий цвет.
// Создайте класс Square, который наследует Shape, и добавьте новое свойство side (длина стороны).
// Добавьте метод getArea(), который возвращает площадь квадрата (side×side).
class Shape {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
}
class Square extends Shape {
  constructor(color, side) {
    super(color)
    this.side = side
  }
  getArea() {
    return this.side * this.side
  }
}
const color = new Shape('blue')
console.log(color.getColor())
const area = new Square('red', 10)
console.log(area.getArea())

console.log('================')

// Задача 1: Класс User для загрузки данных пользователя
// Создайте класс User с методом fetchUser(id), который загружает данные пользователя с JSONPlaceholder по указанному id.
// Добавьте метод getInfo(), который возвращает строку:"Пользователь <name>, email: <email>, город: <city>".

// class User {
//   constructor() {
//     this.userInfo = null
//   }
//   async fetchUser(id) {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`
//     const response = await fetch(url)
//     this.userInfo = await response.json()
//   }
//   getinfo() {
//     if (!this.userInfo) {
//       return 'User does not exists'
//     }
//     const { name, email, address } = this.userInfo
//     return `Пользователь ${name}, email: ${email}, город: ${address.city}`
//   }
// }

// ;(async () => {
//   const user1 = new User()
//   await user1.fetchUser(1)
//   console.log(user1.getinfo())
// })()

// console.log('================')

// Задача: Класс Student
// Создайте класс Student с конструктором, который принимает:
// name — имя студента,
// lastname — фамилия студента,
// age — возраст студента,
// grades — массив оценок (числа от 0 до 100).
// Добавьте метод getAverageGrade(), который возвращает средний балл студента.
// Добавьте метод getStatus(), который возвращает:
// "Успешный студент", если средний балл >= 70,
// "Требуется улучшение", если средний балл от 50 до 69,
// "Неуспешный студент", если средний балл < 50.
// Напишите функцию, которая принимает массив студентов, сортирует их по среднему баллу (по убыванию) и выводит список студентов на страницу.

class Person1 {
  constructor(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
  }
  getFullname() {
    return `Привет, меня зовут ${this.name} ${this.lastname} и мне ${this.age}  лет.`
  }
  canVote() {
    if (this.age >= 18) {
      return `User ${this.name} ${this.lastname} can vote.`
    } else {
      return `User ${this.name} ${this.lastname} is too young for voting!`
    }
  }
}

const voter1 = new Person1('Muhammad-Amin', 'Kutushev', 26)
const voter2 = new Person1('someYoungName', 'someYoungLastname', 15)
console.log(voter1.canVote())
console.log(voter2.canVote())

console.log('================')

class Student {
  constructor(name, lastname, age, grade) {
    this.name = name
    this.lastname = lastname
    this.age = age
    this.grade = grade
  }
  getAverageGrade() {
    const averageGrade = this.grade.reduce((sum, grade) => sum + grade)

    return averageGrade / this.grade.length
  }

  getStatus() {
    const result = this.getAverageGrade()
    if (result > 70) {
      return `${this.name} ${this.lastname} studied well.`
    } else if (result > 50 && result < 70) {
      return `${this.name} ${this.lastname} studied normal.`
    } else {
      return `${this.name} ${this.lastname} studied bad.`
    }
  }
}

const studentArr = [
  {
    name: 'student1',
    lastname: 'A',
    age: 20,
    grade: [49, 70, 69, 80],
  },
  {
    name: 'student2',
    lastname: 'B',
    age: 21,
    grade: [59, 80, 79, 90],
  },
  {
    name: 'student3',
    lastname: 'C',
    age: 23,
    grade: [79, 60, 89, 80],
  },
  {
    name: 'student4',
    lastname: 'D',
    age: 24,
    grade: [49, 30, 59, 50],
  },
]

function renderStudents(students) {
  const container = document.createElement('div')

  container.classList.add('container')

  students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
  students.forEach(item => {
    const studentElement = document.createElement('div')
    studentElement.innerHTML = ` <h3>${item.name} ${
      item.lastname
    }</h3> <p>Возраст: ${
      item.age
    }</p> <p>Средний балл: ${item.getAverageGrade()}</p> <p>Статус: ${item.getStatus()}</p> `

    container.append(studentElement)
    document.body.append(container)
  })
}

const result = studentArr.map(
  item => new Student(item.name, item.lastname, item.age, item.grade)
)

renderStudents(result)
