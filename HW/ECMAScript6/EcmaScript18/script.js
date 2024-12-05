// Задание 1.

// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей. На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные: id, username, email, address.city, phone и company.name. Стили добавляем произвольно.

const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
  .then(res => res.json())
  .then(data =>
    data.forEach(item => {
      const div = document.createElement('div')
      const h3 = document.createElement('h3')
      const p1 = document.createElement('p')
      const p2 = document.createElement('p')
      const p3 = document.createElement('p')
      const p4 = document.createElement('p')
      const p5 = document.createElement('p')

      h3.innerText = `Id: ${item.id}`
      p1.innerText = `Username: ${item.username}`
      p2.innerText = `Email: ${item.email}`
      p3.innerText = `City: ${item.address.city}`
      p4.innerText = `Tel: ${item.phone}`
      p5.innerText = `Company: ${item.company.name}`

      div.append(h3, p1, p2, p3, p4, p5)
      document.body.append(div)
    })
  )
