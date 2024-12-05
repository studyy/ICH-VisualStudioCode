const dataList = [
  {
    username: 'Typical Employee',
    description: 'Rabota Rabota Rabota Rabota Rabota Rabota Rabota Rabota',
  },
  {
    username: 'Typical Employee',
    description: 'Rabota Rabota Rabota Rabota Rabota Rabota Rabota Rabota',
  },
  {
    username: 'Typical Employee',
    description: 'Rabota Rabota Rabota Rabota Rabota Rabota Rabota Rabota',
  },
]

const container = document.querySelector('.container')
for (let i = 0; i < dataList.length; i++) {
  const listItem = document.createElement('div')
  const itemImage = document.createElement('img')
  const itemTitle = document.createElement('h3')
  const itemParagraph = document.createElement('p')
  const itemButton = document.createElement('button')

  listItem.classList.add('listItem')

  itemImage.setAttribute('src', '../Assets/opyat_rabota.jpg')
  itemTitle.innerText = dataList[i].username
  itemParagraph.innerText = dataList[i].description
  itemButton.innerText = 'Submit'

  listItem.append(itemImage, itemTitle, itemParagraph, itemButton)
  container.appendChild(listItem)
}

const mainButton = document.createElement('button')
mainButton.innerText = 'Modal window'
mainButton.classList.add('mainButton')

container.insertAdjacentElement('afterend', mainButton)

const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close__modal')
mainButton.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})
