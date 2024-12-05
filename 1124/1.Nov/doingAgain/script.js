const registrationForm = document.querySelector('.form__registration')
const loginForm = document.querySelector('.form__login')
const taskForm = document.querySelector('.task__form')
const messageDiv = document.getElementById('message')
const toLoginButton = document.getElementById('to-login')
const toSignupButton = document.getElementById('to-signup')
const logoutButton = document.getElementById('logout')

// Überprüfen, ob der Benutzer beim Laden der Seite angemeldet ist
const loggedInUser = localStorage.getItem('currentUser')
if (loggedInUser) {
  showTaskForm()
} else {
  showSignupForm() // Zeigt das Registrierungsformular an, wenn kein Benutzer angemeldet ist
}

registrationForm.addEventListener('submit', e => {
  e.preventDefault()
  const email = e.target['email'].value
  const password = e.target['password'].value

  let users = JSON.parse(localStorage.getItem('users')) || []

  const userExists = users.some(user => user.email === email)
  if (userExists) {
    showMessage(
      'Пользователь с таким адресом электронной почты уже зарегистрирован.'
    )
    return
  }

  users.push({ email, password, tasks: [] })
  localStorage.setItem('users', JSON.stringify(users))

  showMessage(
    'Регистрация прошла успешно! Пожалуйста, войдите в свой аккаунт.',
    true // Erfolgreiche Nachricht
  )
  showLoginForm()
})

loginForm.addEventListener('submit', e => {
  e.preventDefault()
  const login = e.target['login'].value
  const loginPassword = e.target['login-password'].value

  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(
    user => user.email === login && user.password === loginPassword
  )

  if (user) {
    localStorage.setItem('currentUser', user.email) // Benutzer im Local Storage speichern
    showTaskForm()
    showMessage('Вы успешно вошли в систему.', true) // Erfolgreiche Nachricht
  } else {
    showMessage('Неверный логин или пароль. Пожалуйста, попробуйте снова.')
  }

  loginForm.reset()
})

taskForm.addEventListener('submit', e => {
  e.preventDefault()
  const title = e.target['title'].value
  const description = e.target['description'].value

  const currentUser = getCurrentUser()
  if (currentUser) {
    addTaskToDOM(title, description)
    saveTask(currentUser.email, title, description)
    taskForm.reset()
  }
})

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('currentUser') // Benutzer abmelden
  showSignupForm() // Zeigt das Registrierungsformular an
  showMessage('Вы вышли из системы.', true) // Erfolgreiche Nachricht
})

function getCurrentUser() {
  const email = localStorage.getItem('currentUser')
  const users = JSON.parse(localStorage.getItem('users')) || []
  return users.find(user => user.email === email)
}

function showSignupForm() {
  registrationForm.style.display = 'flex'
  loginForm.style.display = 'none'
  taskForm.style.display = 'none'
  toLoginButton.style.display = 'block'
  toSignupButton.style.display = 'none'
}

function showLoginForm() {
  registrationForm.style.display = 'none'
  loginForm.style.display = 'flex'
  taskForm.style.display = 'none'
  toLoginButton.style.display = 'none'
  toSignupButton.style.display = 'block'
}

function showTaskForm() {
  registrationForm.style.display = 'none'
  loginForm.style.display = 'none'
  taskForm.style.display = 'flex'
  const currentUser = getCurrentUser()
  loadTasks(currentUser.email)
}

function addTaskToDOM(title, description) {
  const taskItem = document.createElement('li')
  taskItem.textContent = `${title}: ${description}`

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Удалить'
  deleteButton.onclick = function () {
    if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
      taskItem.remove()
      removeTaskFromLocalStorage(title, description)
    }
  }

  taskItem.appendChild(deleteButton)
  const taskList = document.getElementById('taskList')
  taskList.appendChild(taskItem)
}

function removeTaskFromLocalStorage(title, description) {
  let users = JSON.parse(localStorage.getItem('users')) || []
  const currentUser = getCurrentUser()
  const user = users.find(user => user.email === currentUser.email)

  user.tasks = user.tasks.filter(
    task => !(task.title === title && task.description === description)
  )
  localStorage.setItem('users', JSON.stringify(users))
}

function saveTask(email, title, description) {
  let users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(user => user.email === email)
  if (user) {
    user.tasks.push({ title, description })
    localStorage.setItem('users', JSON.stringify(users))
  }
}

function loadTasks(email) {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find(user => user.email === email)
  if (user && user.tasks) {
    user.tasks.forEach(task => {
      addTaskToDOM(task.title, task.description)
    })
  }
}

function showMessage(message, isSuccess = false) {
  messageDiv.textContent = message
  messageDiv.className = isSuccess ? 'success' : 'error' // Farbe der Nachricht basierend auf Erfolg ändern
  setTimeout(() => {
    messageDiv.textContent = ''
    messageDiv.className = '' // Klasse zurücksetzen, um das Styling zu entfernen
  }, 3000)
}

// Zeige das Registrierungsformular standardmäßig an
showSignupForm()

toLoginButton.addEventListener('click', showLoginForm)
toSignupButton.addEventListener('click', showSignupForm)
