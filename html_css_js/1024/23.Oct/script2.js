// const arr = ['svsdvsd', 1, 2, 3, 4, 5]


//Добавляет все элементы, указанные в качестве аргумента метода push в конец исходного массива.
// arr.push('hello world', 'ghel')
// console.log(arr);
//достает последний элемент исходного массива
// const newEl = arr.pop()
//достает первый элемент исходного массива
// const newEl2 = arr.shift()

// console.log(newEl, newEl2);
// const newArr = ['hello', 1234, 325, 234, 'world']
// let temp;
// temp = newArr[newArr.length - 1]
// newArr[newArr.length - 1] = newArr[0]
// newArr[0] = temp
// console.log(newArr);

// const b = newArr.pop()
// newArr.push(newArr[0])
// newArr[0] = b
// console.log(newArr);



// //основная функция, принимает в качестве аргумента колбек
// const helloFn = (a, b, callback) => {
//     return `${a} + ${b} = ${callback}`
// }

// //первый колбек принимает в качестве аргумента второй колбек
// const callbackFn = (callback2) => {
//     return callback2;
// }
// //третий колбек или конечный результат
// const newCallback = () => {
//     return 'brand new result'
// }

// console.log(helloFn(5, 10, callbackFn(newCallback())));

const resArr = ['svsdvsd', 'hello world', 5, 3, 2, 7, 9, 10]

// for(let i = 0; i < resArr.length; i++) {
//     console.log(resArr[i])
// }


// const callbackForEach = (value, index, array) => {

// }

// resArr.forEach(function(value, index, array){
//     // console.log(`В массиве ${array} есть элемент ${value} под индексом ${index} `);
//     console.log(value);
    
// })

// console.log(result);

const result = resArr.map((item) => {
    if(typeof item === 'string') {
     return [...item].reverse().join('')
    } else if(typeof item === 'number') {
        return item ** 2
    }
})

console.log(result);
console.log(resArr);

const array = [1, 2, 3, 4, 5];

const squareArray = array.map((item) => {
    return item * item;
})

console.log(squareArray);


