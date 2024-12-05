// eto vot ochen dolgo

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// a eto vot super good
//объявляем initial state - начальное значение, условие работы, шаг. Переход к следующему пункту через ;
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("tut probel");

// Вывести числа от 1 до 5 в консоль.

for (let v = 1; v <= 5; v++) {
  console.log(v);
}

console.log("tut probel");

// Вывести квадраты чисел от 1 до 3 в консоль.

for (let q = 1; q <= 3; q++) {
  //У метода pow объекта Math первым значением принимаем число, которое возводим в степень, второе значение - сама степень
  console.log(Math.pow(q, 2));
}

console.log("tut probel");

// Вывести только четные числа от 2 до 8 в консоль.

for (let n = 2; n <= 8; n++) {
  // четные числа - деляется без остатка
  if (n % 2 === 0) {
    console.log(n);
  }
}

console.log("tut probel");

// Вывести числа от 10 до 1 в обратном порядке.

for (let f = 10; f >= 1; f--) {
  console.log(f);
}

console.log("tut probel");

// DO WHILE

let counter = 0;

do {
  counter++;
  console.log(counter);
} while (counter < 15);

console.log("tut probel");

//В JS ВСЕ ЯВЛЯЕТСЯ ОБЪЕКТАМИ
// объект - это пара ключ, значение
const obj = {
  // a - ключ, b - значение
  a: 5,
  b: 10,
  c: "hello",
};
// вытаскиваем значения по ключу
console.log(obj.b);

console.log("tut probel");

const arr = [5, 10, "hello", 5, 3, 2, 4, 56, 7, 9];
console.log(arr[0], arr[2]);
// length
console.log(arr.length);

console.log("tut probel");

for (let m = 0; m < arr.length; m++) {
  console.log(arr[m]);
}

console.log("tut probel");

const srtAndNum = [1,2,3,4,5,'hello','hello1','hello2']

// sortirovka ot teacher

const arrNum = [1, 2, 3, -23, -99, -123, 2323, -24, 55]

for(let i = 0; i < arrNum.length; i++) {
    for(let j = 0; j < arrNum.length + 1- i; j++) {
        if(arrNum[j] > arrNum[j + 1]) {
            let temp = arrNum[j]
            arrNum[j] = arrNum[j + 1]
            arrNum[j + 1] = temp
        }
        
    }
}

console.log(arrNum);
