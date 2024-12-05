// Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Выведите список пользователей в консоль.

// const userUrl = 'https://jsonplaceholder.typicode.com/users'
// fetch(userUrl)
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     console.log(data)
//   })

// console.log('=====================')

//   Используя fetch для выполнения POST запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Создайте объект пользователя с полями name, username, и email.
// Отправьте POST запрос с созданным объектом пользователя.
// Выведите ответ сервера в консоль

// const naverhu
// fetch(userUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: JSON.stringify({
//     name: 'Muhammad-Amin',
//     username: 'Kumuam',
//     email: 'kutushev@',
//   }),
// })
//   .then(res => res.json())
//   .then(data => console.log(data))

// console.log('=====================')

// Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/posts).
// Необходимо функцию рендера постов. Отобразить все посты.

// const postUrl = 'https://jsonplaceholder.typicode.com/posts'

// function renderPost(post) {
//   const container = document.createElement('div')
//   const title = document.createElement('h3')
//   const description = document.createElement('p')

//   title.innerText = post.title
//   description.innerText = post.body

//   container.append(title, description)
//   document.body.append(container)

//   console.log(post)
// }

// fetch(postUrl)
//   .then(res => res.json())
//   .then(post => {
//     post.forEach(item => {
//       renderPost(item)
//     })
//   })

// console.log('=====================')

// Создать форму с полями Имя, Логин, Email, которая будет отправлять запрос на создание пользователя. Используем POST метод.

const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const url = 'https://jsonplaceholder.typicode.com/users'

  const username = document.querySelector('.username').value
  const email = document.querySelector('.email').value
  const password = document.querySelector('.password').value
  const obj = {
    username,
    email,
    password,
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(obj),
  })
    .then(res => res.json())
    .then(data => renderUser(data))

  document.querySelector('.username').value = ''
  document.querySelector('.email').value = ''
  document.querySelector('.password').value = ''
  console.log(obj)
})

function renderUser(user) {
  const container = document.querySelector('.container')
  const username = document.createElement('div')
  const email = document.createElement('div')
  const password = document.createElement('div')

  username.innerText = user.username
  email.innerText = user.email
  password.innerText = user.password

  container.append(username, email, password)
}

console.log('=====================')
