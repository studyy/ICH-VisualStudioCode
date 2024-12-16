// Promise.resolve(value) —
// это метод, который возвращает промис, который был
// успешно разрешен с указанным значением. Если
// передается уже существующий промис, Promise.resolve
// возвращает его без изменений. Если передается объект
// (объект с методом then), Promise.resolve разрешает его в
// промис.

// Promise.reject(reason) —
// это метод, который возвращает промис, который
// был отклонен с указанной причиной (ошибкой).
// Обычно используется, когда возникает ошибка или
// невозможно выполнить обещание.

// Использование Promise.resolve() и Promise.reject()
// ● Используются для создания исходных промисов
// ● Используются для обработки случаев успешного разрешения и отклонения в асинхронных операциях
// ● Полезны при обработке результатов асинхронных функций или при создании цепочек промисов

// Promise.all() —
// это метод, который возвращает массив значений от
// всех промисов, которые были ему переданы.
// Возвращаемый массив значений сохраняет порядок
// оригинального перечисляемого объекта, но не
// порядок выполнения промисов.

// Работа метода Promise.all()
// ● Если какой-либо элемент перечисляемого объекта не является промисом, то он будет преобразован с
// помощью метода Promise.resolve.
// ● Если одно из переданных промисов будет отклонено, Promise.all будет немедленно отклонен со значением
// отклоненного промиса, не учитывая другие промисы, независимо выполнены они или нет.
// ● Если в качестве аргумента будет передан пустой массив, то Promise.all будет выполнен немедленно.

// const p1 = new Promise((res, rej) => {
//   setTimeout(res, 3000, 'John')
// })

// const p2 = 'Hello'
// const p3 = Promise.resolve(33)
// const p4 = Promise.reject('error is here')

// Promise.all([p1, p2, p3, p4])
//   .then(res => {
//     console.log(res)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// Создайте три функции fetchData1, fetchData2 и fetchData3, каждая из которых возвращает Promise
// с имитацией загрузки данных с сервера, все три функции должны резолвиться через
// определенное кол-во времени: 2000 1500 и 1000 миллисекунд. Используя Promise.all(), создайте
// функцию loadAllData, которая одновременно загружает данные из всех трех ресурсов и
// возвращает массив с результатами.

// function promiseFn() {
//     return new Promise((res, rej) => {
//         if(10 > 5) {
//             res('helloworld')
//         } else {
//             rej('no helloworld')
//         }
//     })
// }
// promiseFn()
//     .then(() => {
//     })
//     .catch(() => {
//     })

// function fetchData1() {
//   return new Promise((res, rej) => {
//     setTimeout(res, 2000, 'Data1 is loaded.')
//   })
// }
// function fetchData2() {
//   return new Promise((res, rej) => {
//     setTimeout(res, 1500, 'Data2 is loaded.')
//   })
// }
// function fetchData3() {
//   return new Promise((res, rej) => {
//     setTimeout(res, 1000, 'Data3 is loaded.')
//   })
// }
// Promise.all([fetchData1(), fetchData2(), fetchData3()])
//   .then(res => console.log(res))
//   .catch(error => console.log(error))

//   Promise.allSettled() —
// это метод, который возвращает промис, который
// исполняется когда все полученные промисы
// завершены (исполнены или отклонены),
// содержащий массив результатов исполнения
// полученных промисов.

// Работа метода Promise.allSettled()
// ● Promise, который будет выполнен после завершения каждого промиса, вне зависимости от того выполнился он успешно или был отклонен.
// ● В возвращаемый обработчик промиса передается массив, который содержит результат каждого промиса в исходном наборе промисов.
// ● Объект каждого результата содержит свойство status.
// ○ Если status имеет значение fulfilled (выполнено), то объект будет содержать свойство value.
// ○ Если status имеет значение rejected (отклонено), то объект будет содержать свойство reason.
// ● Свойство value (или reason) будет содержать значение с которым был выполнен (или отклонен) промис.

const p1 = new Promise((res, rej) => {
  setTimeout(res, 1000, 'Johnny')
})
const p2 = Promise.resolve('P2 is alright')
const p3 = Promise.reject('p3 is NOT alright')

Promise.allSettled([p1, p2, p3]).then(res => console.log(res))

// Promise.any() —
// это метод, который принимает итерируемый объект
// содержащий объекты промисов Promise. Является
// противоположностью для Promise.all().

// Работа метода Promise.any()
// ● Как только один из промисов (Promise) выполнится успешно (fulfill), метод возвратит единственный объект
// Promise со значением выполненного промиса.
// ● Если ни один из промисов не завершится успешно (если все промисы завершатся с ошибкой, т.е. rejected),
// тогда возвращенный объект Promise будет отклонен (rejected) с одним из значений:
// ○ Массив содержащий причины ошибки (отклонения)
// ○ AggregateError (en-US) — подкласс Error, который объединяет выброшенные ошибки вместе

// Promise.race() —
// это метод, который возвращает Promise с
// результатом, первого завершенного из переданных
// промисов. Т.е. возвратит resolve или reject, в
// зависимости от того, что случится первым.

// Promise.race(iterable) —
// это метод, который возвращает выполненный или
// отклоненный промис, в зависимости от того, с каким
// результатом завершится первый из переданных
// промисов, со значением или причиной отклонения
// этого промиса.

// Практическое задание
// 1. Создайте две функции fetchDataFast и fetchDataSlow, каждая из которых возвращает
// промис с имитацией загрузки данных с сервера (например можно использовать
// setTimeout который срабатывает через 2 секунды). Используя Promise.race, определите,
// какая из функций загрузит данные быстрее. Выведите результат в консоль.

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Data1')
  })
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Data2')
  })
}

Promise.race([fetchData1(), fetchData2()])
  .then(res => console.log(res))
  .catch(error => console.log(error))

// Практическое задание
// 2. Создайте три функции tryOperation1, tryOperation2, и tryOperation3, каждая из которых
// возвращает промис с имитацией попытки выполнить операцию (например можно
// использовать setTimeout который срабатывает через 2 секунды). Используя Promise.any,
// определите, какая из функций завершится успешно первой. Выведите результат в
// консоль.

function tryOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, 'Op1')
  })
}
function tryOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Op2')
  })
}
function tryOperation3() {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'rej Op3')
  })
}
Promise.any([tryOperation1(), tryOperation2(), tryOperation3()])
  .then(res => console.log(res))
  .catch(error => console.log(error))
