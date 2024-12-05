// terminal
// npm init -y
// v json: "start": "node script.js"
// npm run start
// npm install nodemon -D
// v json: "dev": "nodemon script.js"
// npm run dev

// localStorage —
// это объект, хранящийся в window, который
// позволяет долговременно сохранять данные в
// браузере.

// localStorage
// ● Работает как хранилище данных в формате ключ-значение.
// ● Значения хранятся в виде строк.
// ● Не имеет ограничений по времени хранения.
// ● Максимальный объем данных ограничен размером 5MB.

// setItem() —
// это метод, который используется для записи. Он
// принимает два строковых параметра: ключ, по
// которому будет сохранено значение, и само значение.

// getItem() —
// это метод, который используется для чтения. Метод c
// одним параметром, который указывает на ключ для
// чтения и возвращает полученное значение из
// хранилища. Если по этому ключу нет значения, то метод
// вернёт null.

// removeItem() —
// это метод, который удаляет запись из хранилища
// removeItem('ключ'). Он успешно выполнится даже если
// указанного ключа не существует в хранилище.

// clear() —
// это метод, который очищает хранилище полностью.

// localStorage.setItem('username', 'yury1997')
// localStorage.setItem('username2', 'yury19972')
// localStorage.setItem('username3', 'yury19973')

// // localStorage.removeItem('username')
// // localStorage.clear()

// const h3 = document.querySelector('.h3')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   const username = localStorage.getItem('username')
//   h3.textContent = username
// })

console.log('================')

// Необходимо добавить в локальное хранилище свои имя и фамилию и вывести их на страницу
// Установить данные в локальное хранилище с помощью setItem
// Получить и передать на страницу с помощью getItem
localStorage.setItem('name', 'Mahammad-Amin')
localStorage.setItem('lastname', 'Kutushev')

const fistName = localStorage.getItem('name')
const lastName = localStorage.getItem('lastname')

const yourId = document.createElement('h3')

yourId.innerText = `Hello ${fistName} ${lastName}!`

document.body.append(yourId)

console.log('================')

const form = document.querySelector('#form')
const btn = document.querySelector('#btn__value')

form.addEventListener('submit', e => {
  e.preventDefault()
  const target = e.target['input'].value
  localStorage.setItem('inputValue', target)

  btn.addEventListener('click', () => {
    const value = localStorage.getItem('inputValue')
    console.log(value)

    document.querySelector('p').textContent = value
  })
})

// Доделать:
// 4. Добавить кнопку, которая очищает localStorage.
// Создадим кнопку, которая переключает значение localStorage из 1 в 0 и обратно.
