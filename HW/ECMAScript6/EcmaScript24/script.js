// Задача 1
// Создайте класс Shape, у которого есть метод draw().
// Создайте два наследника класса Shape: Rectangle и Circle.
// У каждого наследника должен быть свой метод draw(), который переопределяет метод родительского класса.
// Создайте массив, содержащий экземпляры классов Rectangle и Circle.
// Используйте цикл для вызова метода draw() для каждого элемента массива.

class Shape {
  draw() {
    console.log('make a shape...')
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('make a rectangle...')
  }
}

class Circle extends Shape {
  draw() {
    console.log('make a circle...')
  }
}

const rect = [new Shape(), new Rectangle(), new Circle()]

for (let i of rect) {
  i.draw()
}
console.log('=========')

rect.forEach(item => item.draw())
