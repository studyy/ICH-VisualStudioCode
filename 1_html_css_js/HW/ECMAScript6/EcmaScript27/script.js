// Задача 1
// Реализовать функцию, которая будет создавать элементы списка на основе массива данных. Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.

async function fetchCommentsApi() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=10`
    )
    if (!response.ok) {
      throw new Error('URL error')
    }
    const data = await response.json()
    renderComments(data)
  } catch (error) {
    console.error(error)
  }
}
fetchCommentsApi()

function renderComments(obj) {
  const comments = document.querySelector('.comments')

  comments.innerHTML = ''

  obj.forEach((item, index) => {
    const listItem = document.createElement('li')
    const commentName = document.createElement('h3')
    const comment = document.createElement('p')
    const deleteBtn = document.createElement('button')

    commentName.innerText = item.name
    comment.innerText = item.body
    deleteBtn.innerText = 'Delete this comment'

    deleteBtn.addEventListener('click', () => {
      obj.splice(index, 1)
      renderComments(obj)
    })

    listItem.append(commentName, comment, deleteBtn)
    comments.append(listItem)
  })
}
