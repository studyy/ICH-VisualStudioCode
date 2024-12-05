// const p1 = new Promise((resolve, reject) => {
//   if (5 === 5) {
//     resolve('hello world')
//   } else {
//     reject('no hello world')
//   }
// })

// console.log(p1)
// p1.then(res => console.log(res)).catch(error => console.log(error))

// async function fetchChuckNorrisApi() {
//   try {
//     const url = 'https://api.chucknorris.io/jokes/random'
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }
//     const { value } = await response.json()
//     console.log(value)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchChuckNorrisApi()

// По клику вывести на страницу insult + дата создания + автор + язык
// Если автора нет - подписать: автор не
// Кнопка: Ругаться

// const fetchInsultApi = async () => {
//   try {
//     const url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json'
//     const response = await fetch(url)
//     if (!response.ok) {
//       throw new Error('there is nothing in this address')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// fetchInsultApi()

// function insultFn() {

// }

// Задача: по клику на кнопку доставать картинку собаки но только одну. На странице может быть всегдалишь одна собака. Плюс добавить ей выдуманное имя

// Функция для получения случайного изображения собаки
async function fetchDogApi() {
  try {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('there is nothing in this address')
    }
    const { message } = await response.json()
    return message // возвращаем URL картинки
  } catch (error) {
    console.error(error)
    return null // в случае ошибки возвращаем null
  }
}

// Массив с выдуманными именами
const dogNames = [
  'Buddy',
  'Charlie',
  'Max',
  'Bella',
  'Luna',
  'Rocky',
  'Daisy',
  'Milo',
  'Lucy',
  'Bailey',
]

// Создаем кнопку
const clickToGetRandomDog = document.createElement('button')
clickToGetRandomDog.innerText = 'Click'
document.body.append(clickToGetRandomDog)

// Контейнер для изображения и имени
const dogContainer = document.createElement('div')
document.body.append(dogContainer)

// Добавляем обработчик клика
clickToGetRandomDog.addEventListener('click', async () => {
  // Очищаем контейнер перед добавлением новой собаки
  dogContainer.innerHTML = ''

  const imageUrl = await fetchDogApi()
  if (imageUrl) {
    // Создаем и добавляем картинку
    const img = document.createElement('img')
    img.src = imageUrl
    img.alt = 'Random Dog'
    img.style.maxWidth = '300px'
    img.style.border = '1px solid black'
    img.style.marginBottom = '10px'

    // Выбираем случайное имя
    const randomName = dogNames[Math.floor(Math.random() * dogNames.length)]

    // Создаем элемент для имени
    const name = document.createElement('p')
    name.innerText = `Name: ${randomName}`
    name.style.fontWeight = 'bold'

    // Добавляем картинку и имя в контейнер
    dogContainer.append(img, name)
  } else {
    // В случае ошибки показываем сообщение
    const errorMsg = document.createElement('p')
    errorMsg.innerText = 'Failed to load dog image. Try again!'
    errorMsg.style.color = 'red'
    dogContainer.append(errorMsg)
  }
})
