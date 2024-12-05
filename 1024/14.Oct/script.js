function filterStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      // return arr[i]
      console.log(arr[i]);
    }
  }
}

const randonArr = [1, 2, 3, "hello", "world", "dadad", "hkhkh", true, false];
filterStrings(randonArr);

console.log("==========================");

// Создайте и заполните массив: напишите код, который создает массив и заполняет его числами от 1 до 10. Используйте цикл for для этого.
function pushNumbers(arr) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i);
  }
  return result;
}
console.log(pushNumbers());

console.log("==========================");

// Обход массива: создайте массив чисел. Напишите код, который использует цикл for для перебора элементов массива и выводит каждое число в консоль.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
getNumbers(numbers);

console.log("==========================");

// Обратный обход массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы перебрать массив в обратном порядке (с последнего элемента к первому).

const reverseNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getReverseNumbers(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
getReverseNumbers(reverseNumbers);

console.log("==========================");

// Фильтрация массива: создайте массив чисел. Напишите код, который использует цикл for, чтобы создать новый массив, который содержит только числа из исходного массива, которые больше 5.
const moreThanNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getMoreThanNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getMoreThanNumbers(moreThanNumbers));
console.log("==========================");

// У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов и их средние оценки.
// // Исходный массив студентов с оценками
const students = [
  { name: "Анна", grades: [85, 90, 92] },
  { name: "Иван", grades: [88, 75, 96] },
  { name: "Мария", grades: [78, 82, 94] },
];

function calculateAvarage(grade) {
  let result = 0;
  for (let i = 0; i < grade.length; i++) {
    result += grade[i];
  }
  return Math.floor(result / grade.length);
}

function createStudent(student) {
  return {
    name: student.name,
    avarageGrade: calculateAvarage(student.grades),
  };
}
const newStudents = [];
for (let i = 0; i < students.length; i++) {
  const studentAverage = createStudent(students[i]);
  newStudents.push(studentAverage);
}
console.log(newStudents);

console.log("==========================");

// Напишите программу, которая проходит по каждому студенту и находит его максимальную оценку, создавая новый объект, содержащий имя студента и его максимальную оценку.
const students2 = [
  { name: "Анна", grades: [85, 90, 92] },
  { name: "Иван", grades: [88, 75, 96] },
  { name: "Мария", grades: [78, 82, 94] },
];

function calculateMax(grade) {
  let result = 0;
  for (let i = 0; i < grade.length; i++) {
    if (grade[i] > result) {
      result = grade[i];
    }
  }
  return result;
}

function newStudentsObj(student) {
  return {
    name: student.name,
    maxGrade: calculateMax(student.grades),
  };
}

const newStudents2 = [];
for (let i = 0; i < students2.length; i++) {
  const studentMax = newStudentsObj(students2[i]);
  newStudents2.push(studentMax);
}
console.log(newStudents2);

console.log("==========================");
