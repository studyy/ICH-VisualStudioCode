// Создать объект counter, который будет иметь свойство count(по умолчанию значение равно 0) и методы increment и decrement для увеличения и уменьшения значения count соответственно.

const counter = {
  count: 0,
  increment: function () {
    this.count++
  },
  decrement: function () {
    this.count--
  },
}
// Пример вызова методов increment и decrement

counter.increment()
console.log(counter.count) // Ожидаемый вывод: 1

counter.decrement()
console.log(counter.count) // Ожидаемый вывод: 0

counter.increment()
console.log(counter.count) // Ожидаемый вывод: 1

counter.increment()
console.log(counter.count) // Ожидаемый вывод: 2

counter.increment()
console.log(counter.count) // Ожидаемый вывод: 3
