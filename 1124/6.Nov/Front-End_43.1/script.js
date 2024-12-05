const url = 'https://jsonplaceholder.typicode.com/todos'
// const newTask = {
//   title: 'Task',
//   completed: false,
// }

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify(newTask),
// })
//   .then(res => res.json())
//   .then(data => console.log(data))

// ===========================

// const newPost = {
//   title: 'Task',
//   body: 'do something',
//   userId: 1,
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//   body: JSON.stringify(newPost), // Тело запроса в JSON-формате
//   headers: {
//     // Добавляем необходимые заголовки
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     // {title: 'Task', body: 'do something', userId: 1, id: 101}
//   })

// Отправить GET-запрос по адресу “https://jsonplaceholder.typicode.com/todos”, отобразить полученные посты на странице.

// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))

// Сделать запрос используя api https://jsonplaceholder.typicode.com/photos. Получив первые 5 объектов нужно отрисовать все 20 картинок на веб-странице в ряд.

// const url1 = 'https://jsonplaceholder.typicode.com/photos?_limit=5'

// fetch(url1)
//   .then(res => res.json())
//   .then(data =>
//     data.forEach(item => {
//       const newImage = document.createElement('img')
//       newImage.src = item.url
//       document.body.append(newImage)
//       console.log(item)
//     })
//   )

// https://jsonplaceholder.typicode.com/posts
// Вытащить на страницу в формате title body все посты из структуры API, добавить минимальные стили

const url2 = 'https://jsonplaceholder.typicode.com/posts?_limit=20'
fetch(url2)
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const listItem = document.createElement('div')
      const h3 = document.createElement('h3')
      const paragraph = document.createElement('p')
      h3.innerText = item.title
      paragraph.innerText = item.body
      listItem.append(h3, paragraph)
      const list = document.querySelector('.post__list')
      list.append(listItem)
    })
  })
