//в таком случае не удастся достать результат возвращения промисса и использовать вне контекста fetch. Проблема решается функцией
// let newData
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(data => {
//     newData = data
//     console.log(newData)
//   })

// Особенности асинхронных функций
// ● В качестве результата асинхронная функция всегда возвращает промис.
// ● Асинхронные функции нужны для выполнения асинхронных операций:
// ○ работой с API
// ○ базами данных
// ○ чтения файлов и т.д.
// ● Асинхронные операции выполняются не сразу: код отправил запрос к API и ждёт, пока сервер пришлет ответ.
// ● Ключевое слово await используется, чтобы дождаться выполнения асинхронной операции.

// async function name(params) {
//         const data = await ...
// }

// const asyncFn = async() => {
//   const data = await ...
// }

// async function fetchApi() {
//   const url = `https://jsonplaceholder.typicode.com/users`
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
//   return data
// }

// // fetchApi()

// const renderData = async () => {
//   // ...логика отображения данных на странице
//   const result = await fetchApi()
//   console.log(result)
// }

// renderData()

// Практическое задание
// 1. Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/ с использованием
// синтаксиса async/await.

// async function fetchUserApi() {
//   const url = `https://jsonplaceholder.typicode.com/users`
//   const response = await fetch(url)
//   console.log(response)
//   const data = await response.json()
//   console.log(data)
// }

// fetchUserApi()

// async function fetchPostApi() {
//   const url = `https://jsonplaceholder.typicode.com/posts`
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }

// fetchPostApi()

// async function fetchTodosApi(id) {
//   const url = `https://jsonplaceholder.typicode.com/todos/${id}`
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }

// Первый вариант обработки того что возвращает функция - then catch
// const result = fetchTodosApi(1)
// result.then(response => console.log(response))

//второй вариант - вернуть в новой функции
// async function someLogic() {
//   const newData = await fetchTodosApi(1)
//   console.log(newData)
// }

// someLogic()

// Создать функцию, которая будет отправлять несколько асинхронных запросов на сервер параллельно, используя Promise.all. Дождаться выполнения всех запросов и вернуть массив результатов в том порядке, в котором они были отправлены.
// Использовать новый синтаксис(async/await) в этой во всех последующих задачах.
// const urls = [
//   `https://jsonplaceholder.typicode.com/todos`,
//   `https://jsonplaceholder.typicode.com/comments`,
//   `https://jsonplaceholder.typicode.com/users`,
// ]

// async function fetchMultiplyApi() {
//   const fetchPromise = urls.map(item => fetch(item))
//   const allResponses = await Promise.all(fetchPromise)
//   const formatResponse = allResponses.map(item => item.json())
//   const finalFormat = await Promise.all(formatResponse)
//   console.log(finalFormat)
// }

// fetchMultiplyApi()

// https://jsonplaceholder.typicode.com/users
// Вытащить на страницу username, email + отстилизовать
// Async + DOM

// Рекомендация.
// Отдельно сделать функцию рендера элемента и функцию fetch

function renderUsers(data) {
  const container = document.querySelector('.container')
  const listItem = document.createElement('div')
  const username = document.createElement('h3')
  const email = document.createElement('h3')

  username.innerText = data.username
  email.innerText = data.email

  listItem.append(username, email)
  container.append(listItem)
}

async function fetchUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`
  const response = await fetch(url)
  const data = await response.json()

  data.forEach(item => renderUsers(item))
}

fetchUsers()
