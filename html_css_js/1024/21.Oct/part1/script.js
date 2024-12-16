const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
const form = document.querySelector('.form')

const title = document.createElement('h3')

const mainInput = document.querySelector('#main__input')

btn.addEventListener('click', event => {
  console.log(event)
})

container.addEventListener('click', event => {
  console.log(event)
})

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e.target['input'].value)
  console.log(e)
})

mainInput.addEventListener('input', e => {
  console.log(e.target.value)
})

const form2 = document.querySelector('.form2')
// Напишите форму в которой 1 инпут и кнопка отправить. Надо вывести в консоль введенное в инпут по клику на кнопку
form2.addEventListener('submit', e => {
  e.preventDefault()
  // 2. Теперь вывести на страницу в h3 по клику на кнопку отправить то, что пользователь написал в инпут
  let value = e.target['input'].value
  if (value.length > 0) {
    title.innerText = value
  }
  e.target['input'].value = ''

  console.log(e.target['input'].value)
  document.body.append(title)
})

// Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в противном случае выведите сообщение "Введите корректный email".
const form3 = document.querySelector('.form3')
const text = document.createElement('span')
const inputE = document.querySelector('#input_email')

form3.addEventListener('submit', e => {
  e.preventDefault()
  const v = e.target['input_email'].value
  if (v.length > 0 && v.includes('@')) {
    text.innerText = 'Форма отправлена'
    inputE.insertAdjacentElement('afterend', text)
  } else {
    text.innerText = 'Введите корректный email'
    inputE.insertAdjacentElement('afterend', text)
  }
  e.target['input_email'].value = ''
})
