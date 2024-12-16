const btn = document.querySelector('.btn')

const storagedStatus = localStorage.getItem('status')
if (storagedStatus) {
  renderElement()
}

btn.addEventListener('click', () => {
  localStorage.setItem('status', 'online')
  renderElement()
})

//render - otobrajat na stranize
function renderElement() {
  const status = localStorage.getItem('status')
  const p = document.createElement('p')

  p.innerText = status
  document.body.append(p)
}
