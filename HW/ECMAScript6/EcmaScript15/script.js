// Задание 1

// Создайте простую веб-страницу, где пользователь может вводить текст заметки. Рядом с полем ввода должна быть кнопка "Сохранить", которая сохраняет введенный текст в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка. При обновлении страницы заметка должна оставаться на месте.
const form = document.querySelector('.form')
const h4 = document.querySelector('.h4')

const getInputValue = localStorage.getItem('inputValueKey')

if (getInputValue) {
  h4.innerText = getInputValue
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const inputValue = e.target['input'].value
  localStorage.setItem('inputValueKey', inputValue)

  h4.innerText = inputValue

  console.log(inputValue)
  console.log(e)
})
