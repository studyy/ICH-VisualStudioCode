console.log('========= Задание 1 =========')
// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.
const human = {
  humanName: 'Muhammad-Amin',
  age: 25,
}
console.log(human)

for (let info in human) console.log(`${info}: ${human[info]}`)

console.log('========= Задание 2 =========')
// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

const book = {
  bookName: 'Game of Thrones',
  author: 'George Raymond Richard Martin',
}
const books = [
  {
    bookName: 'Harry Potter',
    author: 'J. K. Rowling',
  },
  {
    bookName: 'Game of Thrones',
    author: 'George Raymond Richard Martin',
  },
  {
    bookName: 'Marvel Comics',
    author: 'Stan Lee',
  },
]
for (let key of books) console.log(key.bookName + ' / ' + key.author)

console.log('========= Задание 3.1 =========')
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.
const rectangle = {
  a: 10,
  b: 35,
}
const fläche = rectangle.a * rectangle.b
const umfang = 2 * (rectangle.a + rectangle.b)

console.log('S', fläche, 'P', umfang) //S 350 //P 90

console.log('========= Задание 3.2 =========')
const rectangle1 = {
  a: 10,
  b: 35,
}
rectangle1.s = rectangle1.a * rectangle1.b
rectangle1.p = 2 * (rectangle1.a + rectangle1.b)

console.log(rectangle1.s) // 350
console.log(rectangle1.p) // 90

console.log('========= Задание 4 =========')
// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

const fruits = [
  {
    name: 'Banana',
    color: 'yellow',
  },
  {
    name: 'Apple',
    color: 'red',
  },
  {
    name: 'Orange',
    color: 'orange',
  },
  {
    name: 'Pomegranate',
    color: 'red',
  },
]

let redFruit = []
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].color === 'red') {
    redFruit.push(fruits[i].name, fruits[i].color)
  }
}
console.log(redFruit)

// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

const playlist = [
  {
    artis: 'A',
    song: '1',
  },
  {
    artis: 'B',
    song: '2',
  },
  {
    artis: 'C',
    song: '3',
  },
  {
    artis: 'D',
    song: '4',
  },
]

for (const songName of playlist)
  console.log(songName.artis + ' ' + songName.song)
