// Что такое Promise
// Promise - это специальный объект, который предназначен для работы с асинхронным кодом и который содержит свое состояние. Вначале pending (ожидание), затем - одно из двух: fulfilled(выполнено успешно) или rejected(выполнено с ошибкой). Промисы пришли на смену коллбек функциям, с помощью которых раньше работали с асинхронными действиями.

//  new Promise((resolve, reject) => {
// 	console.log('Hello, async code')
// }, 1000)
// .then(data => data)
// .catch(err => console.log(err))

const p1 = new Promise((res, rej) =>
  10 > 15 ? res('success') : rej('there is a mistake')
)
p1.then(res => console.log(res)).catch(rej => {
  throw new Error(rej)
})
