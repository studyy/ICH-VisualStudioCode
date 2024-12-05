// class User {
//   constructor(name, age, lastname) {
//     this.name = name
//     this.age = age
//     this.lastname = lastname
//     this.data = null
//   }

//   async fetchApi() {
//     try {
//       ...
//       this.data=await Response.json()
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

// const newUser=new User("Muhammad-Amin",26,"Kutushev")
// newUser.fetchApi()

// По клику отображаем форму, изначально ее нет и появляется только по клику
// шутки отсюда: https://api.chucknorris.io/jokes/random

const btn = document.querySelector('.btn')
const form = document.querySelector('.form')

async function fetchCatApi() {
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('URL error')
    }
    const data = await response.json()
    renderCat(data[0].url)
  } catch (error) {
    console.error(error)
  }
}
fetchCatApi()

function renderCat(cat) {
  const catBox = document.querySelector('.form_img')
  const img = document.createElement('img')

  img.src = cat

  catBox.append(img)
}

async function fetchChuckApi() {
  const url = `https://api.chucknorris.io/jokes/random`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('URL error')
    }
    const { value } = await response.json()
    renderChuck(value)
  } catch (error) {
    console.error(error)
  }
}
fetchChuckApi()

function renderChuck(chuck) {
  const chuckBox = document.querySelector('.chuck')

  chuckBox.innerText = chuck
}

btn.addEventListener('click', () => {
  form.style.display = 'flex'
})
