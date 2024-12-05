console.log("Task1");
// 1) Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).
const arr = [2, 1, 4, 5, 3, 7, 3, 9, 2];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Task2");
// 2) Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
const arr1 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > 8 && arr1[i] < 20) {
    console.log(arr1[i]);
  }
}

console.log("Task3");
// 3) Создайте массив чисел и найдите минимальное значение.
const arr2 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
const minimum = Math.min(...arr2);
console.log(minimum);

console.log("Task4");
// 4) *Создайте массив чисел и обновите значение элемента по индексу.
const arr3 = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];
const i = 3;
const newValue = 99;
if (i >= 0 && i <= arr3.length) {
  arr3[i] = newValue;
}
console.log(arr3);

console.log("Task5");
// 5) * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).
// Создаем массив слов
const words = ["apple", "banana", "cherry", "blueberry", "strawberry", "kiwi"];

// Ищем самое длинное слово
let longestWord = "";
for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}

console.log("Самое длинное слово:", longestWord); // Вывод: "strawberry"
