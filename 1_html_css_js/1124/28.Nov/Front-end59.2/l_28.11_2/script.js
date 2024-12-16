// https://jsonplaceholder.typicode.com/users

// https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1
// Name: Vasily Cat
// fun fact: тут цитата https://api.kanye.rest/

// Необходимо после всей работы с user выложить пост кота по урл выше + вставить забавный факт из kanye west api

async function fetchPost() {
  const url = `https://jsonplaceholder.typicode.com/users`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json()
    data.forEach(item => {
      renderData(item)
    })
  } catch (error) {
    console.error(error)
  }
}
fetchPost()

function renderData(obj) {
  const post = document.querySelector(`.post`)
  const card = document.createElement(`div`)
  const img = document.createElement(`img`)
  const list = document.createElement(`ul`)
  const name = document.createElement(`li`)
  const usersname = document.createElement(`li`)
  const email = document.createElement(`li`)
  const address = document.createElement(`li`)

  card.classList.add(`card`)

  img.src = `./img/img1.jpg`
  name.innerText = `Имя: ${obj.name}`
  usersname.innerText = `Usernsme: ${obj.usersname}`
  email.innerText = `Email: ${obj.email}`
  address.innerText = `Address: ${obj.address.street},${obj.address.suite},${obj.address.city},${obj.address.zipcode}`

  list.append(name, usersname, email, address)
  card.append(img, list)
  post.append(card)
}

async function fetchCatApi() {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json()
    renderCat(data[0].url)
  } catch (error) {
    console.error(error)
  }
}
fetchCatApi()

function renderCat(cat) {
  const catEl = document.querySelector(`.cat`)
  const img = document.createElement(`img`)
  img.src = cat

  catEl.append(img)
}

async function fetchKanyaApi() {
  const url = `https://api.kanye.rest/`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('URL Error')
    }
    const { quote } = await response.json()
    console.log(quote)
  } catch (error) {
    console.error(error)
  }
}
fetchKanyaApi()
