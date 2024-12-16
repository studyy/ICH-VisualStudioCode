// Задание 1
// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.
const form = document.querySelector('.form')

const login = 'Kumuam'
const passwd = 123456

form.addEventListener('submit', e => {
  e.preventDefault()
  const error = document.querySelector('.error')
  const p = document.createElement('p')

  const controlLogin = e.target['login'].value
  const controlPassword = e.target['password'].value

  error.innerHTML = ''

  if (controlLogin !== login && controlPassword != passwd) {
    p.innerText = 'put the right login and password!!'
  } else if (controlLogin !== login) {
    p.innerText = 'put the right login!!'
  } else if (controlPassword != passwd) {
    p.innerText = 'put the right password!!'
  } else {
    p.innerText = 'Success!!!!'
  }

  error.append(p)
})

{
  /* <input type="button" value="1" />
    <input type="button" value="2" />

    <script>
      document.addEventListener('click', event => {
        if (event.target.dataset.counter != undefined) {
          event.target.value++
        }
      })
    </script> */
}
