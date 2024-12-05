// console.log(window)
// eto prosto ot Yury, ne po konspektu

function getCurrentData() {
  const date = new Date()
  const year = date.getFullYear()
  //padstart - кладет в начало строки какое то определенное кол во символов работает со строкой только и в качестве аргумента принимает максимальную величину строки, какой она должна стать, а вторым аругументом - символ в начало
  const month = String(date.getMonth() + 1).padStart('2', 0)
  const day = String(date.getDate()).padStart('2', 0)
  return `сегодня: ${day}-${month}-${year}`
}
console.log(getCurrentData())

console.log('================')
// tyt po konspektu

const btn = document.querySelector('#btn')

const html = document.querySelector('html')
const theme = localStorage.getItem('theme')

console.log(theme)

if (theme) {
  html.setAttribute('data-theme', theme)
}

btn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme')
  if (currentTheme) {
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark')
      html.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
      html.setAttribute('data-theme', 'light')
    }
  } else {
    localStorage.setItem('theme', 'dark')
    html.setAttribute('data-theme', 'dark')
  }
})

console.log('================')

// const container = document.querySelector('.container')
// const btn2 = document.querySelector('.btn2')
// const btnCl = document.querySelector('.btnCl')
// const myName = localStorage.getItem('username')
// if (myName) {
//   container.innerText = myName
// }

// btn2.addEventListener('click', () => {
//   localStorage.setItem('username', 'Muhammad')
//   const myName = localStorage.getItem('username')
//   if (myName) {
//     container.innerText = myName
//   }
// })

// btnCl.addEventListener('click', () => {
//   container.innerText = ''
//   localStorage.removeItem('username')
// })

console.log('================')

// Добавить значение инпута в Локал сторадж, вывести на страницу значение из локального хранилища и при обновлении чтоб сохранялось значение. Так же добавить кнопку по клику на которую будем убирать из локального хранилища и страницы данное значение
const input = document.querySelector('#input')
const displayBtn = document.querySelector('.displayLoginName')
const removeBtn = document.querySelector('.remove-btn')
const inputText = document.querySelector('.input-text')

const inputValue = localStorage.getItem('login')
if (inputValue) {
  inputText.innerText = inputValue
}

displayBtn.addEventListener('click', () => {
  inputText.innerText = input.value

  const value = localStorage.getItem('login')
  if (value) {
    inputText.innerText = value
  } else {
    localStorage.setItem('login', input.value)
  }
  console.log(input.value)
})

console.log('================')
