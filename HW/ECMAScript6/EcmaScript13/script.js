// Задание 1

// Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.
const movies = [
  { title: 'Inception', year: 2010 },

  { title: 'The Dark Knight', year: 2008 },

  { title: 'Interstellar', year: 2014 },

  { title: 'The Matrix', year: 1999 },
]
function sortAge(arr) {
  return arr.sort((a, b) => a.year - b.year)
}
console.log(sortAge(movies))

// Задание 2

// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.
const people = [
  { name: 'Alice', age: 25 },

  { name: 'Bob', age: 30 },

  { name: 'Charlie', age: 22 },
]
function sumArr(arr) {
  const sumArr = arr.reduce((prevValue, currentValue, index) => {
    return prevValue + currentValue.name + (index < arr.length - 1 ? ',' : '')
  }, ' ')
  return sumArr
}
console.log(sumArr(people))
// Если ты уберёшь '', то prevValue при первом проходе по массиву будет равен первому объекту массива, что приведёт к неправильному результату при объединении строк.
