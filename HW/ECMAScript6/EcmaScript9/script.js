// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.
const box = document.querySelector('.box')
box.addEventListener('mouseover', () => {
  box.style.background = 'red'
})
box.addEventListener('mouseout', function () {
  box.style.background = 'blue'
})
// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".

// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент
const colorBox = document.querySelector('#colorBlock')
const colorButton = document.querySelector('#colorButton')

function getRandomRGB() {
  // Генерируем случайное число от 0 до 255 для каждого цвета
  const r = Math.floor(Math.random() * 256) // Красный компонент
  const g = Math.floor(Math.random() * 256) // Зелёный компонент
  const b = Math.floor(Math.random() * 256) // Синий компонент

  // Формируем строку RGB
  return `rgb(${r}, ${g}, ${b})`
}

// Пример использования
console.log(getRandomRGB()) // Выведет, например, "rgb(123, 45, 67)"

colorButton.addEventListener('click', function () {
  colorBox.style.backgroundColor = getRandomRGB()
})
