// Задание 1

// Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const arrObj = [
  {
    name: 'A',
    price: 111,
  },
  {
    name: 'B',
    price: 33,
  },
  {
    name: 'C',
    price: 55,
  },
]

const someFruit = arrObj.some(item => item.price > 50)
const findFruit = arrObj.find(item => item.price > 50)
console.log(someFruit, findFruit)

console.log('====================')

// У вас есть массив объектов, представляющих товары с их названиями, категориями и ценами.
const products = [
  { name: 'Smartphone', category: 'electronics', price: 599 },
  { name: 'Laptop', category: 'electronics', price: 1200 },
  { name: 'Headphones', category: 'electronics', price: 199 },
  { name: 'Camera', category: 'electronics', price: 750 },
  { name: 'Tablet', category: 'electronics', price: 450 },
  { name: 'Desk Chair', category: 'furniture', price: 150 },
  { name: 'Sofa', category: 'furniture', price: 700 },
  { name: 'Notebook', category: 'stationery', price: 5 },
  { name: 'Pen', category: 'stationery', price: 1 },
  { name: 'Coffee Machine', category: 'appliances', price: 300 },
]
// Отфильтруйте товары категории "electronics".
// Затем с помощью map создайте массив с ценами этих товаров.
// С помощью reduce найдите общую стоимость всех товаров в категории "electronics".
const filterProd = products
  .filter(item => item.category == 'electronics')
  .map(item => item.price)
  .reduce((a, b) => a + b)
console.log(filterProd)

console.log('====================')

// У вас есть массив объектов, представляющих студентов с именами и их средним баллом.
const students = [
  { name: 'Анна', grades: 55 },
  { name: 'Иван', grades: 70 },
  { name: 'Мария', grades: 80 },
]
// Найдите первого студента со средним баллом выше 80.
const foundStudent = students.find(item => item.grades > 80)

// Если такой студент не найден, добавьте нового студента в начало массива с баллом 85, используя unshift.
if (!foundStudent) {
  students.unshift({ name: 'Muhammad', grades: 85 })
}

// Верните обновленный массив студентов.
console.log(foundStudent || students)

console.log('====================')

// У вас есть массив объектов, представляющих товары в корзине с их названиями, количеством и ценой за единицу.
const cart = [
  { name: 'Laptop', quantity: 3, price: 1200 },
  { name: 'Mouse', quantity: 2, price: 25 },
  { name: 'Keyboard', quantity: 1, price: 45 },
  { name: 'Monitor', quantity: 0, price: 150 },
]
// Отфильтруйте товары, у которых количество больше 0.
// Примените map, чтобы пересчитать общую стоимость каждого товара (количество * цена за единицу).
// Используя reduce, найдите итоговую стоимость всех товаров в корзине.
const filterCart = cart
  .filter(item => item.quantity > 0)
  .map(item => item.quantity * item.price)
  .reduce((a, b) => a + b)
console.log(filterCart)

console.log('====================')

// У вас есть массив объектов, представляющих задачи с их названиями и статусом (completed: true/false).
const aufgaben = [
  { aufgabe: 'kaufen Motorsäge', completed: true },
  { aufgabe: 'eat Potato', completed: true },
  { aufgabe: 'trink Apfelsaft', completed: true },
  { aufgabe: 'Laptop arbeit', completed: true },
  { aufgabe: 'Nudel lunch', completed: true },
]
// Отфильтруйте задачи, которые еще не выполнены (completed: false).
const filterAufgaben = aufgaben
  .filter(item => item.completed == false)
  // С помощью map создайте массив, содержащий только названия этих задач.
  .map(item => item.aufgabe)
// Если массив незавершенных задач пустой, добавьте новую задачу в начало исходного массива с помощью unshift.
if (filterAufgaben.length == 0) {
  aufgaben.unshift({ aufgabe: 'go to the toilet', completed: false })
  console.log(aufgaben)
} else {
  console.log(filterAufgaben)
}

console.log('====================')

// У вас есть массив объектов, представляющих студентов с их именами и оценками (массив чисел).
const student2 = [
  { studentName: 'Vasya', punkt: [90, 75, 72, 67, 41, 93, 63, 92] },
  { studentName: 'Eugene', punkt: [45, 55, 72, 71, 58, 55, 23, 92] },
  { studentName: 'Adil', punkt: [51, 55, 72, 10, 45, 91, 23, 92] },
  { studentName: 'Alex', punkt: [21, 55, 72, 60, 49, 62, 83, 92] },
  { studentName: 'Luxa', punkt: [80, 95, 72, 63, 73, 94, 53, 92] },
]
// Используя map, для каждого студента подсчитайте его средний балл и добавьте это значение как новое свойство averageScore.
const newStudents = student2
  .map(item => {
    item.averageScore = Math.round(
      item.punkt.reduce((a, b) => a + b) / item.punkt.length
    )
    return item
  })
  // С помощью filter оставьте только тех студентов, у которых средний балл выше 70.
  .filter(item => item.averageScore > 70)
// С помощью reduce найдите средний балл среди отфильтрованных студентов.
const result =
  newStudents.reduce((a, b) => a + b.averageScore, 0) / newStudents.length
// Создавайте массив самостоятельно!
console.log(result)

console.log('====================')

const student3 = [
  { studentName: 'Vasya', punkt: [90, 75, 72, 67, 41, 93, 63, 92] },
  { studentName: 'Eugene', punkt: [45, 55, 72, 71, 58, 55, 23, 92] },
  { studentName: 'Adil', punkt: [51, 55, 72, 10, 45, 91, 23, 92] },
  { studentName: 'Alex', punkt: [21, 55, 72, 60, 49, 62, 83, 92] },
  { studentName: 'Luxa', punkt: [80, 95, 72, 63, 73, 94, 53, 92] },
]

const totalAverageScore = student3
  .map(student => {
    student.averageScore = Math.round(
      student.punkt.reduce((sum, score) => sum + score, 0) /
        student.punkt.length
    )
    return student
  })
  .filter(student => student.averageScore > 70)
  .reduce(
    (sum, student, _, array) => sum + student.averageScore / array.length,
    0
  )

console.log(totalAverageScore)
