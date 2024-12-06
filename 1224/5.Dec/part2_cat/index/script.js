//https://fonts.google.com/icons?selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=27&icon.color=%23333331&icon.style=Outlined

const postBtn = document.querySelector('.button_post')
const container = document.querySelector('.container')
const post = document.createElement('div')

let postNumber = 1

async function fetchPostApi(id) {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('url not found')
        }
        const data  = await response.json()
        renderPost(data)
        renderButton()
        const notification = document.querySelector('.notifications-container')
        notification.insertAdjacentHTML('afterbegin',constructorNotification('alles gut', 'fetch ist gut', 'success')
    )
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}
postBtn.addEventListener('click', () => {
    container.innerHTML = ``
    fetchPostApi(postNumber)
})

function renderPost(obj) {
    post.classList.add('post')
    post.innerHTML = `<div class="title">
            <h2>posts</h2>
        </div>
        <div class="post_content">
            <h3>${obj.title}</h3>
            <p>${obj.body}</p>
        </div>`
        container.append(post)
}


function renderButton() {
    const trigger = document.createElement('div')
    const btnLeft = document.createElement('img')
    const btnRight = document.createElement('img')

    trigger.classList.add('trigger')
    btnLeft.src = 'left.png'
    btnRight.src = 'rigth.png'

    btnRight.addEventListener('click', () => {
        container.innerHTML = ``
        postNumber++
        fetchPostApi(postNumber)
    })
    btnLeft.addEventListener('click', () => {
        if (postNumber > 1) {
            container.innerHTML = ``
            postNumber--
            fetchPostApi(postNumber)
        }
    })

    trigger.append(btnLeft, btnRight)
    container.append(trigger)

}


const constructorNotification = (title, text, type) => {
    const notification = `
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
    `;
    return notification;
  };