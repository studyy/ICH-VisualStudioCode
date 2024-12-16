// Задание 1

// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод "map", чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

const people = [
  { name: 'Alice', age: 25 },

  { name: 'Bob', age: 30 },

  { name: 'Charlie', age: 15 },
]

const newPeople = people.map(item => {
  if (item.age > 18) {
    item.status = 'взрослый'
    return item
  } else {
    item.status = 'ребенок'
    return item
  }
})
console.log(newPeople)

console.log('================================')

// Задание 2

// Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

const movies = [
  { title: 'Inception', rating: 4.9 },

  { title: 'The Dark Knight', rating: 5.0 },

  { title: 'Interstellar', rating: 4.8 },

  { title: 'The Matrix', rating: 4.5 },
]

movies.forEach(value => {
  if (value.rating > 4) {
    console.log(value.title)
  }
})

console.log('================================')

// Вывести элементы массива
// Напишите функцию, которая принимает массив чисел и с помощью forEach выводит каждый элемент в консоль.

const array = [1, 2, 3, 4, 5, 6]

function printArray(arr) {
  arr.forEach(value => {
    console.log(value)
  })
}
printArray(array)

console.log('================================')

// Сумма элементов массива
// Напишите функцию, которая принимает массив чисел и с помощью forEach подсчитывает их сумму.

function sumArray(arr) {
  let sum = 0
  arr.forEach(value => {
    sum += value
  })
  return sum
}
console.log(sumArray(array))

console.log('===============================')

// Вывести индексы элементов
// Используя forEach, напишите функцию, которая выводит индекс каждого элемента массива.

const indexArray = arr =>
  arr.forEach((value, index) => {
    console.log(`value: ${value} / index: ${index}`)
  })
indexArray(array)

console.log('============================')

// Конкатенация строк
// Напишите функцию, которая принимает массив строк и с помощью forEach объединяет все строки в одну.
const str = ['Hey', 'world', '!', 'How', 'are', 'U?']
function combineStr(arr) {
  let combineStr = ''
  arr.forEach(value => {
    combineStr += value + ' '
  })
  return combineStr
}
console.log(combineStr(str))

console.log('============================')

// Преобразование массива в HTML список
// Используя forEach, преобразуйте массив строк в список <ul> с элементами <li>.
function newUL(arr) {
  const ul = document.createElement('ul')

  arr.forEach(value => {
    const li = document.createElement('li')
    ul.append(li)
    li.innerText = value
  })
  document.body.append(ul)
}
newUL(str)

console.log('=====================')

// Проверка на четность
// Напишите функцию, которая принимает массив чисел и с помощью forEach выводит сообщение, является ли каждое число четным или нечетным.
const array3 = [1, 2, 3, 4, 5, 6]
function trueFalseFn(arr) {
  arr.forEach(value => {
    if (value % 2 == 0) {
      console.log(`эти числа четные:${value}`)
    } else {
      console.log(`эти числа нечетные:${value}`)
    }
  })
}
trueFalseFn(array3)

console.log('====================')

// Модификация массива объектов
// Напишите функцию, которая принимает массив объектов с ключом name и с помощью forEach добавляет каждому объекту новое свойство isActive: true.

// Умножение каждого элемента на 2
// Напишите функцию, которая принимает массив чисел и с помощью forEach умножает каждый элемент на 2 (модифицирует исходный массив).

// Копирование значений
// Используя forEach, скопируйте все элементы из одного массива в другой.

// Поиск максимального числа
// Напишите функцию, которая принимает массив чисел и с помощью forEach находит максимальное число в массиве.

// ============================================

// Умножение каждого элемента на 2
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждое число умножено на 2.

const array1 = [1, 2, 3, 4, 5, 6]

function multiplyArray(arr) {
  const newArray = arr.map(item => item * 2)
  return newArray
}
console.log(multiplyArray(array1))

// принимает: callback (Текущий элемент (currentValue), индекс, массив)
// возвращает: Новый массив, где каждый элемент является результатом callback функции.

console.log('==========================')

// Преобразование чисел в строки
// Используя map, преобразуйте массив чисел в массив строк.

const newArray2 = array1.map(String)
const newArray3 = array1.map(item => String(item))
const newArray4 = array1.map(item => (item = item + ''))
array1.length = 10
console.log(array1)
console.log(newArray2)
console.log(newArray3)
console.log(newArray4)

console.log('============================')

// Преобразование объектов
// Напишите функцию, которая принимает массив объектов с ключом name и возвращает массив строк, состоящих из этих имен.
const arrayObj = [
  {
    name: 'Muhammad',
  },
  {
    name: 'Vova',
  },
  {
    name: 'Sergius',
  },
]

const newArrObj = arrayObj.map((value, index, array) => array[index].name)
console.log(newArrObj)

// Создание нового массива с длиной строк
// Напишите функцию, которая принимает массив строк и возвращает массив, содержащий длину каждой строки.
const array2 = ['1aaa', '2bbb', '3ccc', '4dd', '5ee', '6fff']
function arrLength(arr) {
  const arrLength = arr.map(value => value.length)
  return arrLength
}
console.log(arrLength(array2))

// Добавление свойства объектам
// Используя map, добавьте каждому объекту в массиве объектов новое свойство isActive: true, возвращая новый массив.
const arrayObj2 = [
  {
    name: 'Muhammad',
  },
  {
    name: 'Vova',
  },
  {
    name: 'Sergius',
  },
]
const newArr = arrayObj2.map(value => {
  return {
    ...value,
    isActive: true,
  }
})
console.log(newArr)

// Создание массива квадратов чисел
// Напишите функцию, которая принимает массив чисел и возвращает массив квадратов этих чисел.

// Преобразование регистра строк
// Используя map, преобразуйте массив строк в новый массив, где все строки в верхнем регистре.

// Создание массива первых букв
// Напишите функцию, которая принимает массив строк и возвращает массив первых букв каждой строки.

// Добавление префикса к строкам
// Используя map, создайте новый массив строк, где к каждому элементу массива добавляется префикс "Item: ".

// Преобразование чисел в булевы значения
// Напишите функцию, которая принимает массив чисел и возвращает новый массив булевых значений (true, если число четное, и false, если нечетное).
