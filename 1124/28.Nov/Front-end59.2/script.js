// https://jsonplaceholder.typicode.com/users
async function fetchUserApi() {
  const url = `https://jsonplaceholder.typicode.com/users`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Error')
    }
    const data = await response.json()
    data.forEach(element => {
      renderData(element)
    })
  } catch (error) {
    console.error(error)
  }
}
fetchUserApi()

function renderData(obj) {
  const post = document.querySelector('.user')
  const img = document.createElement('img')
  const list = document.createElement('ul')
  const name = document.createElement('li')
  const username = document.createElement('li')
  const email = document.createElement('li')
  const address = document.createElement('li')

  img.src = './Assets/img1.jpg'
  name.innerText = `Имя: ${obj.name}`
  username.innerText = `Username: ${obj.username}`
  email.innerText = `Email: ${obj.email}`
  address.innerText = `Address: ${obj.address.street}, ${obj.address.suite},${obj.address.city},${obj.address.zipcode} `

  list.append(name, username, email, address)
  post.append(img, list)
}
