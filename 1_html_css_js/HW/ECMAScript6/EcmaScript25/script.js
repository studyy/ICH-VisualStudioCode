// Задача 1

// Создайте класс CopyEntity. У него должен быть статический метод copyObject, который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию.

class CopyEntity {
  static copyObject(obj) {
    return Array.isArray(obj) ? [...obj] : { ...obj }
  }
}
const arr1 = [1, 2, 3]
const obj1 = {
  a: 1,
  b: 2,
}

const arr2 = CopyEntity.copyObject(arr1)
const arr3 = CopyEntity.copyObject(obj1)
arr1[0] = 999

console.log(arr1)
console.log(arr2)
console.log(arr3)

console.log('==========')

// Задача 1: Библиотека книг
// Создайте класс Library, который управляет коллекцией книг. У класса должны быть методы:

// addBook(book): Добавляет книгу в библиотеку. Книга представляет собой объект с ключами title, author и year.
// getBookByTitle(title): Возвращает книгу по названию (title).
// listBooks(): Возвращает массив объектов всех книг в библиотеке.
// removeBookByTitle(title): Удаляет книгу из библиотеки по названию.

class Library {
  constructor() {
    this.books = []
  }
  addBook(book) {
    if (book && book.title && book.author && book.year) {
      return this.books.push(book)
    } else {
      throw new Error(
        'Неверный формат книги. Убедитесь, что есть title, author и year.'
      )
    }
  }
  getBookByTitle(title) {
    return this.books.find(book => book.title === title) || null
  }
  listBooks() {
    return this.books
  }
  removeBookByTitle(title) {
    const index = this.books.findIndex(book => book.title === title)
    if (index !== -1) {
      return this.books.splice(index, 1)
    } else {
      throw new Error('Книга с таким названием не найдена.')
    }
  }
}

const book1 = {
  title: 'a',
  author: 'A',
  year: 1,
}
const newBook = new Library()
console.log(newBook.addBook(book1))
console.log(newBook.addBook(book1))
console.log(newBook.getBookByTitle('a'))
console.log(newBook.listBooks())
console.log(newBook.removeBookByTitle('a'))
// console.log(newBook.removeBookByTitle('a'))
console.log(newBook.listBooks())

console.log('==========')

// Задача 2: Фильтрация объектов с Object.entries()
// Есть объект с информацией о студентах и их оценках. Используя Object.entries(), получите массив студентов, которые сдали экзамен (оценка >= 50).

const students = {
  student1: {
    name: 'John Doe',
    grades: {
      math: 90,
      english: 85,
      science: 88,
      history: 92,
    },
  },
  student2: {
    name: 'Jane Smith',
    grades: {
      math: 78,
      english: 92,
      science: 81,
      history: 75,
    },
  },
  student3: {
    name: 'Emily Johnson',
    grades: {
      math: 85,
      english: 87,
      science: 89,
      history: 90,
    },
  },
  student4: {
    name: 'Michael Brown',
    grades: {
      math: 70,
      english: 80,
      science: 75,
      history: 72,
    },
  },
}

const passedStudenst = Object.entries(students)
  .filter(([key, student]) => {
    // Проверяем, что все оценки >= 50
    return Object.values(student.grades).every(grade => grade >= 50)
  })
  .map(([key, student]) => student.name)

console.log(passedStudenst)

console.log('==========')

// Задача 3: Преобразование объекта с Object.values()
// Есть объект, представляющий инвентарь магазина. Преобразуйте значения (количество товаров) в массив, увеличив каждое значение на 10%.
const inventory = {
  apples: 60,
  bananas: 30,
  oranges: 40,
  grapes: 20,
}
const newInv = Object.values(inventory).map(value => value * 1.1)
console.log(newInv)

console.log('==========')

// Задача 4: Поиск ключей с Object.keys()
// Есть объект с данными о задачах. Каждая задача имеет статус done или pending. Используя Object.keys(), получите массив ключей задач, которые находятся в статусе done.

const tasks = {
  task1: { name: 'Buy groceries', status: 'done' },
  task2: { name: 'Clean the house', status: 'pending' },
  task3: { name: 'Pay bills', status: 'done' },
  task4: { name: 'Finish project', status: 'pending' },
  task5: { name: 'Call mom', status: 'done' },
}

const doneTasks = Object.keys(tasks).filter(
  item => tasks[item].status == 'done'
)

console.log(doneTasks)
