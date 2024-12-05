// 1.Создайте функцию waitForTime, которая возвращает Promise. Этот промис должен резолвиться через указанное количество миллисекунд, которое нужно передавать в функцию waitForTime в качестве аргумента. Если время вышло, промис резолвится с сообщением "Ожидание завершено".

// Например через секунды, 3 или 5 секунд.

function waitForTime(time) {
  return Promise.resolve(
    setTimeout(() => console.log('Ожидание завершено'), time)
  )
}
waitForTime(3000)

function waitForTime2(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time, 'Ожидание завершено')
  })
}

waitForTime2(5000).then(res => console.log(res))

function sayHi(phrase, who) {
  console.log(phrase + ', ' + who)
}

let timerId = setTimeout(sayHi, 1000, 'Привет', 'Джон') // Привет, Джон
console.log(timerId) // идентификатор таймера
