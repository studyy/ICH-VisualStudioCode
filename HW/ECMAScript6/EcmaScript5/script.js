console.log("==== Задание 1 ====");
// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
function sum(a, b = 0) {
  return a + b;
}
console.log(sum(2,3));

console.log(sum(2, 2));

console.log(sum(2));

console.log("==== Задание 2 ====");
// Создайте массив numbers с несколькими числами.
// Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(calculateSum(numbers));

console.log("==== Задание 3 ====");
// Создайте массив students с объектами студентов (имя, возраст, курс).
// Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.
const students = [
  {
    studentName: "Muhammad-Amin",
    age: 25,
    class: "Web-Development",
  },
  {
    studentName: "Alina",
    age: 29,
    class: "Web-Development",
  },
  {
    studentName: "Vyachislav",
    age: 60,
    class: "Web-Development",
  },
];
function displayStudentInfo(student) {
  return `Name: ${student.studentName} Age: ${student.age} Class: ${student.class}`;
}
console.log(displayStudentInfo(students[2]));
