// pop() —
// это метод массивов, который используется для
// удаления последнего элемента из массива. Он
// изменяет сам массив и возвращает удаленный
// элемент.

const arr = [1, 2, 3, 'hello world', 'how are u']

const poppedItem = arr.pop()
console.log(poppedItem)

// Создайте массив animals с элементами "cat", "dog", "rabbit". Используйте метод pop(), чтобы удалить последний элемент массива.
const animals = ['cat', 'dog', 'rabbit']

animals.pop()
console.log(animals)

// Создайте массив letters с элементами "A", "B", "C". Используйте метод pop(), чтобы получить и вывести последнюю букву.
const letters = ['A', 'B', 'C']

const lastLetter = letters.pop()
console.log(lastLetter)

console.log('=================')

// filter() —
// это метод, который позволяет получить новый массив,
// отфильтровав элементы с помощью переданной колбэкфункции, которая будет вызвана для каждого элемента
// массива и по результату функции примет решение
// включать этот элемент в новый массив или нет.

const result = arr.filter((item, index, arr) => {
  return typeof item == 'number'
})
console.log(result)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 13, 235, 123, 6]

const filterNums = numArr.filter(item => item > 5)
console.log(filterNums)

const arrObj = [
  {
    id: 1,
    title: 'hello',
    description: 'hello world',
    completed: false,
  },
  {
    id: 2,
    title: 'hello',
    description: 'hello world',
    completed: true,
  },
  {
    id: 3,
    title: 'hello',
    description: 'hello world',
    completed: false,
  },
  {
    id: 4,
    title: 'hello',
    description: 'hello world',
    completed: false,
  },
  {
    id: 5,
    title: 'hello',
    description: 'hello world',
    completed: true,
  },
  {
    id: 6,
    title: 'hello',
    description: 'hello world',
    completed: false,
  },
  {
    id: 7,
    title: 'hello',
    description: 'hello world',
    completed: true,
  },
  {
    id: 8,
    title: 'hello',
    description: 'hello world',
    completed: true,
  },
]

const filterObjs = arrObj.filter(item => {
  return item.completed
})
console.log(filterObjs)

console.log('=================')

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только положительные числа из исходного массива.
const numbers = [-2, 5, -8, 10, -3, 7]
function positiveNum(arr) {
  const filterNums = arr.filter(item => item > 1)
  console.log(filterNums)
}
positiveNum(numbers)

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа, которые делятся на 3 без остатка.
const numbers2 = [9, 12, 5, 18, 7, 24]

function filterNewNums(arr) {
  const newNum = arr.filter(item => item % 3 == 0)
  console.log(newNum)
}
filterNewNums(numbers2)

console.log('=================')

// sort() —
// это метод, который сортирует на месте элементы
// массива и возвращает отсортированный массив.
// Порядок сортировки по умолчанию соответствует
// порядку кодовых точек Unicode.

const randomNumArr = [4, 2, 8, 10, 23, 5, 8]

const orderArr = randomNumArr.sort((a, b) => a - b)
console.log(orderArr)

const randomLetters = ['g', 'b', 'c', 'a', 'k', 'l']
console.log(randomLetters.sort())

// Пример работы метода sort()
// ● Если a - b меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
// ● Если a - b вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по
// отношению ко всем другим элементам.
// ● Если a - b больше 0, сортировка поставит b по меньшему индексу, чем a.

// Используя метод sort(), отсортируйте числовой массив по убыванию.
let array = [4, 2, 5, 1, 3]

const arrNum = array.sort((a, b) => b - a)
console.log(arrNum)
// Используя метод sort(), отсортируйте массив объектов по значению определенного свойства.
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 },
]

const sortPeople = people.sort((a, b) => a.age - b.age)
console.log(sortPeople)

console.log('=================')

// Используя метод filter(), создайте новый массив, содержащий только четные числа из исходного массива.
let array2 = [1, 2, 3, 4, 5]
const newArray2 = array2.filter(item => item % 2 == 0)
console.log(newArray2)

// Создайте массив строк. Напишите функцию, используя метод sort, чтобы отсортировать строки по их длине от самой короткой к самой длинной.
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape']
function sortLength(arr) {
  const sortLength = arr.sort((a, b) => a.length - b.length)
  console.log(sortLength)
}
sortLength(words)

console.log('=================')

// Создайте массив чисел. Напишите функцию, используя метод sort, чтобы отсортировать числа в порядке убывания.
const numbers3 = [10, 5, 8, 2, 7, 3]
function sortNum(arr) {
  const sortNumb = arr.sort((a, b) => b - a)
  console.log(sortNumb)
}
sortNum(numbers3)

// Создайте массив чисел. Напишите функцию, используя метод filter, чтобы получить новый массив, содержащий только числа в определенном диапазоне.
const numbers4 = [15, 7, 28, 3, 42, 10]
const minRange = 10
const maxRange = 30
function filterArr(arr, min, max) {
  const filterArr = arr.filter(item => min <= item && item <= max)
  console.log(filterArr)
}
filterArr(numbers4, minRange, maxRange)
console.log('=================')
