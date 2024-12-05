// Создайте класс UserDetails.
// Конструктор принимает userId (ID пользователя).
// Добавьте метод fetchUser(), который загружает данные пользователя с JSONPlaceholder.
// Добавьте метод fetchPosts(), который загружает список постов пользователя.
// Добавьте метод renderUserDetails(containerId), который отображает на странице:
// Имя пользователя,
// Email,
// Город,
// Количество постов.
// Вызывайте методы асинхронно для отображения данных на странице.
// https://jsonplaceholder.typicode.com/users

class UserDetails {
  constructor(userId) {
    this.userId = userId
    this.userData = null
    this.userPosts = []
  }

  async fetchUser() {
    const url = `https://jsonplaceholder.typicode.com/users/${this.userId}`
    const response = await fetch(url)
    this.userData = await response.json()
  }

  async fetchPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('URL Error')
    }
    this.userPosts = await response.json()
  }

  renderUserdata() {
    const container = document.createElement('div')
    const userDetails = document.createElement('div')

    container.classList.add('container')
    userDetails.classList.add('details')

    userDetails.innerHTML = ` 
    <h3>
    Name: ${this.userData.name} 
    </h3>
    <h3>
    Email: ${this.userData.email}
    </h3>
    <p>City: ${this.userData.address.city}</p>
    <p>Amount of posts: ${this.userPosts.length}</p> 
`
    container.append(userDetails)
    document.body.append(container)
  }
}

;(async () => {
  const user = new UserDetails(1)
  try {
    await user.fetchUser()
    await user.fetchPosts()
  } catch (error) {
    console.error(error)
  }
  user.renderUserdata()
  console.log(user)
})()

// Если хотите:
// Доделать самостоятельно получение постов из фетча и вывод на страницу. Создать метод renderPosts который будет распечатывать все посты на страницу (посты с конкретным userId - этот функционал готов уже)
