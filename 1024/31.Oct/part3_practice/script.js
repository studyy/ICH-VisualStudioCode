// const btn = document.querySelector('.btn')
// const container = document.querySelector('.container')
// const title = document.createElement('h3')
// const username = localStorage.getItem('username')

// function createElement(el, value) {
//   el.innerText = value
//   container.append(el)
// }

// if (username) {
//   createElement(title, username)
// }

// btn.addEventListener('click', () => {
//   localStorage.setItem('username', 'yury1997')
//   const username = localStorage.getItem('username')
//   container.innerHTML = ''
//   createElement(title, username)
// })

console.log('=====================')

// Создайте простое приложение для сохранения списка задач. Пользователь должен иметь возможность добавлять и удалять задачи. Список задач должен сохраняться в localStorage.
const form = document.querySelector('.form')
const container = document.querySelector('.container')

const toDos = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : []

function render() {
  container.innerHTML = ''
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const taskValue = e.target['task'].value
  const descriptionValue = e.target['description'].value

  const newTask = {
    taskValue,
    descriptionValue,
  }
  toDos.push(newTask)

  localStorage.setItem('task', JSON.stringify(toDos))
  const taskArr = JSON.parse(localStorage.getItem('task'))
  console.log(taskArr)

  taskArr.forEach(element => {
    const list = document.createElement('dl')
    const listTitle = document.createElement('dt')
    const listDescription = document.createElement('dd')
    listTitle.innerText = element.taskValue
    listDescription.innerText = element.descriptionValue
    list.append(listTitle, listDescription)
    container.append(list)
  })
})
