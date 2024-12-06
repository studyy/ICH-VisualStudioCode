const colorBox = document.querySelector('#colorBox')
const colors = ['#ff0000', '#00ff00', '#0000ff']

function changeBackgroundColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  colorBox.style.backgroundColor = randomColor
}

setInterval(changeBackgroundColor, 1000)
