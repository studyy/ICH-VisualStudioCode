const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
  console.log('Hello world')
})

btn.addEventListener('click', () => {
  console.log('Hello World')
})

// function hello(callbackfn) {
//   return callbackfn;
// }

// function fn() {
//   console.log("Hello world");
// }

// hello(fn());

const arr = ['one', 'two', 'three']
const ul = document.createElement('ul')

const btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', function () {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    li.innerText = arr[i]
    ul.append(li)
  }
})

document.body.insertAdjacentElement('afterbegin', ul)

// У вас есть элемент, например, <p>. При клике на элементе, измените его текст. При следующем клике восстановите исходный текст.
// Задачу решить двумя способами:  c помощью атрибута onclick и с помощью addEventListener.

const paragraph = document.createElement('p')
paragraph.innerText = 'Click here'
paragraph.addEventListener('click', function () {
  paragraph.innerText = 'Clicked!!'
})

document.body.append(paragraph)
