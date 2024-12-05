const openModal = document.querySelector('.open__modal')
const closeModal = document.querySelector('#close')
const modal = document.querySelector('.modal')

openModal.addEventListener('click', () => {
  modal.style.display = 'flex'
})

modal.addEventListener('click', e => {
  const target = e.target
  console.log(target)
  if (target === modal) {
    modal.style.display = 'none'
  }
})
closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})
