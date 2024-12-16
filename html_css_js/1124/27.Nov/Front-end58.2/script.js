const fakeData = [
  {
    title: 'title1',

    body: 'body1',
  },
  {
    title: 'title2',

    body: 'body2',
  },
]

async function fetchPostsApi() {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('No such URL!')
    }
    const data = await response.json()
    data.forEach(item => {
      renderData(item)
    })
  } catch (error) {
    console.error(error)
    fakeData.forEach(item => {
      renderData(item)
    })
  }
}

fetchPostsApi()

function renderData(obj) {
  const list = document.querySelector('.list')
  const listItem = document.createElement('li')
  const content = document.createElement('div')
  const title = document.createElement('p')
  const description = document.createElement('p')
  const img = document.createElement('img')

  title.innerText = `title: ${obj.title}`
  description.innerText = `description: ${obj.body}`
  img.src = './Assets/icon.png'

  content.append(title, description)
  listItem.append(content, img)
  list.append(listItem)
}
