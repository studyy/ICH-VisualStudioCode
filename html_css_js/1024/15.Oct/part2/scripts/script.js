const container = document.querySelector('.container')
console.log(container)
container.innerHTML = `
Hello World
<h3>text</h3>
`
const img = document.querySelector('#image')
img.setAttribute('src', './assets/theOffice.png')
console.log(img)

const title = document.querySelector('#title')
console.log(title)
const img2 = document.querySelector('#image2')
img2.setAttribute('src', './assets/cat.webp')
console.log(img2)
const input = document.querySelector('#input')
input.value = 'hello world'
console.log(input)

const content = document.querySelector('.content')

const title1 = document.createElement('h3')
const newParagraph = document.createElement('p')

title1.innerText = 'New title from JS'
newParagraph.innerText = 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'

content.append(title1)
content.append(newParagraph)
