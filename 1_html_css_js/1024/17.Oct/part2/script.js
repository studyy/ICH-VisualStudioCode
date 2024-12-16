const container = document.querySelector('.container')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
container.append(btn1, btn2, btn3)

btn1.innerText = 'Click'
btn2.innerText = 'Click2'
btn3.innerText = 'Toggle'
const p = document.createElement('p')
p.innerText = 'Добавления текста в элимент'
container.insertAdjacentElement('afterbegin', p)

const arr = ['1aaa', '2bbb', '3ccc', 'loremloremloremlorem']
const list = document.createElement('ul')
p.insertAdjacentElement('afterend', list)

function arrFn(ramdomArr) {
  for (let k of ramdomArr) {
    const li = document.createElement('li')
    li.innerText = k
    li.classList.add('listItem')
    list.append(li)
  }
}
arrFn(arr)

const span = document.createElement('span')

btn1.addEventListener('click', function () {
  p.classList.add('content')
  document.body.style.background = 'magenta'
  span.innerHTML = ''
})

btn2.addEventListener('click', function () {
  p.classList.remove('content')
  document.body.style.background = 'unset'
  span.innerText = 'this was horrible'
  span.classList.add('text')
  container.append(span)
})

// btn3.addEventListener('click', function () {
const listItem = document.querySelectorAll('.listItem')
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', function () {
    listItem[i].classList.toggle('active')
  })
}
// })
