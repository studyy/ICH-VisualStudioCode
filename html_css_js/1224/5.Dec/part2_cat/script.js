const postContainer = document.querySelector('.post_container')
const btn_posts = document.querySelector('.btn_posts')
const post = document.createElement('div')

let postNumber = 1

async function fetchPostsAPI(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('URL error')
    }

    const data = await response.json()
    renderPosts(data)
    renderBtn()
  } catch (error) {
    console.error(error)
  }
}

btn_posts.addEventListener('click', () => {
  postContainer.innerHTML = ''
  fetchPostsAPI(postNumber)
})

function renderPosts(obj) {
  post.classList.add('post')

  post.innerHTML = `
    <div class="title">
        <h2>Posts</h2>
    </div>
    <div class="post-content">
        <h3>${obj.title}</h3>
        <p>${obj.body}</p>
    </div>
    `

  postContainer.append(post)
}

function renderBtn() {
  const triggers = document.createElement('div')
  const btnLeft = document.createElement('img')
  const btnRight = document.createElement('img')

  triggers.classList.add('triggers')

  btnLeft.src = './assets/Vector_left.png'
  btnRight.src = './assets/Vector_right.png'

  btnRight.addEventListener('click', () => {
    postContainer.innerHTML = ''
    postNumber++
    fetchPostsAPI(postNumber)
  })

  btnLeft.addEventListener('click', () => {
    if (postNumber > 1) {
      postContainer.innerHTML = ''
      postNumber--
      fetchPostsAPI(postNumber)
    }
  })

  triggers.append(btnLeft, btnRight)
  post.append(triggers)
}

const constructorNotification = (title, text, type) => {
  return `
    <div
      class="notification notification--${type}"
    >
      <div class="notification__icon">
        <span class="material-symbols-rounded"> done </span>
      </div>
      <div class="notification__data">
        <div class="notification__title">${title}</div>
        <div class="notification__text">${text}</div>
      </div>
      <span class="material-symbols-rounded notification__close">
        close_small
      </span>
    </div>
  `
}
