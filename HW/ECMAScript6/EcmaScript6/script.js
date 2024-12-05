console.log("==== Задание 1 ====");

// Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function newArrey(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}

console.log(newArrey(numbers));

console.log("==== Задание 2 ====");

// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
let sum = 0;
while (i < numbers2.length) {
  sum += numbers2[i];
  i++;
}
console.log(sum);

