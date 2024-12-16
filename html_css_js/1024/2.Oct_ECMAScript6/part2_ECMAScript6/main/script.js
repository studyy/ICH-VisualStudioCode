//Типы данных
// 1. string 'Hello world'
// 2. number 44
// 3. boolean true || false
// 4. Object = {}
// 5. undefined - отсутствие значени
// 6. null - отсуствие присутствия
// console.log(4)
// console.log('My name is Muhammad-Amin')

//VARIABLES a.k.a переменные
// переменные - хранилище для информации в js

//константа - необходимо передать значение сразу при объявлении переменной
// const firstName = 'Muhammad-Amin'
// const lastMane = 'Kutushev'
// const myAge = 25
// const myCity = 'Vienna'
// const myCountry = 'Austria'

// console.log(firstName,lastMane,myAge)

//я объявляю переменную и из за объявления через константу js ожидает сразу же присвоение значения этой перменной
// const result2
// const result2 = 'my result'

//let - можно переписать значение. Можно присвоить значение позже после объявления переменной
// let result

// result = 5
// result = 'string))))'
// result = 'string)))) new string('

// console.log(result);

//var
// console.log(myAge, myCity)
// var result3

// const myName = "Muhammad-Amin";
// let counter = 1;

// === - строгое равенство
// == - равенство
// = - присвоение
// if (5 === 5) {
//counter = counter + 1
//   counter ++;
// }
// console.log(counter);

const userName = "Muhammad-Amin";

const firstNumber = 10;
const secondNumber = 20;
const sum = firstNumber + secondNumber;

console.log(sum);

const myName = "Muhammad-amin";
const myLastName = "Kutushev";
const myAge = 25;
//конкатенация
const result =
  "Hello, world, my name is " +
  myName +
  " my age is " +
  myAge +
  " ohh i forgot about my last name, which is " +
  myLastName;
console.log(result);
//интерполяция
// синтаксис cтроится на косых кавычках и ${} - интеграции js внутрь строки
const result2 = `Hello, world, my name is ${myName}, my last name is ${myLastName}, my age is ${myAge}`;
console.log(result2);

const result3 = `Hi there, my name is ${myName}`;
console.log(result3);

const timeWithoutTeacher = 20;
const teacherLeft = true;

if (5 == 10) {
  console.log("correct");
} else {
  console.log("incorrect");
}

if (teacherLeft) {
  console.log(`we work ${timeWithoutTeacher} minuts by ourselfs`);
} else {
  console.log("We work with the teacher");
}

// const a = 10
// const b = 15
// const c = a + b

// === - строгое равенство
// == простое равенство
// = - присвоение
// !== - строгое не
// if(a !== '10') {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// != - обычное не
// if(a != '10') {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// && - логичекое И. Выдает true только в случае коогда оба операнда истины
// if(a > 5 && b < 10) {
//     console.log('ok')
// } else {
//     console.log('error');
// }
// console.log(true || false);
// || - логическое или
// if(a > 11 || b < 10) {
//     console.log('ok')
// } else {
//     console.log('error');
// }

// const age = 15;
// if (age >= 18) {
//   console.log("mojno");
// } else {
//   console.log("nelzya");
// }

const hour = 3;
if (hour >= 6 && hour <= 11) {
  console.log("Доброе утро!");
} else {
  if (hour >= 12 && hour <= 17) {
    console.log("Добрый день!");
  } else {
    if (hour >= 18 && hour <= 22) {
      console.log("Добрый вечер!");
    } else {
      console.log("Доброй ночи!");
    }
  }
}

const grade = 1;
if (grade == 1) {
  console.log(`Отлично!`);
} else if (grade == 2) {
  12;
  console.log(`Хорошо!`);
} else if (grade == 3) {
  console.log(`Удовлетворительно`);
} else if (grade == 4) {
  console.log(`Плохо!`);
} else {
  console.log(`Очень плохо!`);
}

const age = prompt("Insert your age!");

if (age < 12) {
  alert("Доступ запрещен! Вам должно быть больше 12 лет.");
} else if (age >= 12 && age < 18) {
  alert("Доступ ограничен! Вы должны быть с родителями.");
} else if (age >= 18) {
  alert("WELCOME!");
}
