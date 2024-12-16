const obj = {
  a: 5,
  b: 7,
}
// ЛХ - локальное хранилище
//локальное хранилище принимает только строки в качестве значени
//JSON.stringify - превращение объекта в строку так как ЛХ принимает только строки
localStorage.setItem('keyObj', JSON.stringify(obj))
const storedObj = localStorage.getItem('keyObj')
console.log(storedObj)
// //JSON.parse - превращает обратно из строки в объект
const parsedObj = JSON.parse(storedObj)
console.log(parsedObj)

console.log('========================')

const arr = [
  {
    id: 1,
    title: 'hello',
    description: 'hello desc',
  },
  {
    id: 2,
    title: 'hello2',
    description: 'hello desc2',
  },
  {
    id: 3,
    title: 'hello3',
    description: 'hello desc3',
  },
]
// Передать в ЛХ setItem и вытащить в консоль через getItem. Использовать новые JSON.stringify, JSON.parse
localStorage.setItem('arrObj', JSON.stringify(arr))
const storagedArr = localStorage.getItem('arrObj')
const parseArr = JSON.parse(storagedArr)
console.log(parseArr)

console.log('========================')

const form = document.querySelector('.form')

if (form) {
  // document.body.innerHTML = form
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const userName = e.target['username'].value
  const email = e.target['email'].value
  console.log({
    username: userName,
    email: email,
  })
  console.log(e)
  const data = {
    username: userName,
    email: email,
  }
  console.log(data)

  localStorage.setItem('dataObj', JSON.stringify(data))
  const stodredObj = JSON.parse(localStorage.getItem('dataObj'))
  const pUserName = document.createElement('p')
  const pEmail = document.createElement('p')
  pUserName.innerText = storedObj.userName
  pEmail.innerText = storedObj.email
  form.insertAdjacentElement('afterend', pUserName)
  form.insertAdjacentElement('afterend', pEmail)
})
