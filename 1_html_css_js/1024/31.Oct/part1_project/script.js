// Учебный проект —
// это регламентированная практическая работа,
// которая поможет вам повторить то, что вы изучили к
// текущему моменту прохождения курса, отработать
// навыки и получить первый кейс в портфолио.

// Описание концепции
// Рассмотреть работу с объектами в localStorage на примере разработки проекта регистрации и авторизации.
// Необходимо реализовать функционал регистрации и авторизации с помощью localstorage, где localstorage
// выступает в роли базы данных.

// Общие требования
// ● Реализовать формы регистрации и логина.
// ● Данные зарегистрированных пользователей хранить в массиве объектов в localStorage.
// ● Для обеих форм сделать проверку на пустые поля при отправке.
// ● При вводе неверного логина или пароля выводить сообщение об ошибке.
// ● При успешном логине и регистрации выводит сообщение и очищать поля.

const inputName = document.querySelector('.name')
const inputPhone = document.querySelector('.phone')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const singupBtn = document.querySelector('.signup')
const notification = document.createElement('p')

const users = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []

singupBtn.addEventListener('click', () => {
  if (
    inputName.value === '' ||
    inputPhone.value === '' ||
    inputEmail.value === '' ||
    inputPassword.value === ''
  ) {
    notification.innerText = 'All fields are requider'
    notification.style.color = 'red'
    console.log('empty')
  } else {
    let isError = false
    users &&
      users.forEach(item => {
        if (item.email === inputEmail.value) {
          isError = true
        }
      })
    if (isError) {
      notification.innerText = 'User with this email exists'
      notification.style.color = 'red'
    } else {
      const userData = {
        name: inputName.value,
        phoneNumber: inputPhone.value,
        email: inputEmail.value,
        password: inputPassword.value,
      }
      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))
      inputName.value === ''
      inputPhone.value === ''
      inputEmail.value === ''
      inputPassword.value === ''

      notification.innerText = 'You are succesfully signup'
      notification.style.color = 'green'
    }
  }
  document.body.appendChild(notification)
})

const loginInputEmail = document.querySelector('.emailLogin')
const loginInputPassword = document.querySelector('.passwordLogin')
const loginBtn = document.querySelector('.login')

loginBtn.addEventListener('click', () => {
  let isLoginError = true
  users.forEach(item => {
    if (
      loginInputEmail.value === item.email &&
      loginInputPassword.value === item.password
    ) {
      isLoginError = false
    }
  })
  if (isLoginError) {
    if (loginInputEmail.value === '' || loginInputPassword.value === '') {
      notification.innerText = 'All fields are required'
      notification.style.color = 'red'
    } else {
      notification.innerText = 'Email or password is incorrect'
      notification.style.color = 'red'
    }
  } else {
    loginInputEmail.value === ''
    loginInputPassword.value === ''
    notification.innerText = 'You successfully login'
    notification.style.color = 'green'
    document.body.innerHTML = `<p>Hello, user)</p>`
    const btnLogout = document.createElement('button')
    btnLogout.innerText = 'Logout'
    document.body.append(btnLogout)
  }
  document.body.appendChild(notification)
})
