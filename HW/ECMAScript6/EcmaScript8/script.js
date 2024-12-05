// Home Work
// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка). Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.
const ul = document.querySelector('.calcLength')
const li = ul.querySelectorAll('li')
if (li.length > 2) {
  const newLi = document.createElement('li')
  newLi.innerText = 'New Item'
  ul.replaceChild(newLi, li[li.length - 1])
}

// Задача 1: Создание кнопки с выводом сообщения
// Создайте кнопку с текстом "Click me". При клике на кнопку в консоль должно выводиться сообщение "Button clicked!".
const btn = document.createElement('button')
btn.innerText = 'Click me'
// addEventListener (1: sobitie(event), 2: function)
btn.addEventListener('click', function () {
  btn.innerText = 'Button clicked!'
})

// Задача 2: Создание списка с удалением элементов
// Создайте список из трёх элементов (li). Каждому элементу добавьте кнопку "Удалить". При клике на кнопку соответствующий элемент списка должен удаляться.
const List = document.createElement('ul')
// eto mojno sdelat eshe kruche, no poka ne znayu kak
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
  const bnt2 = document.createElement('button')
  bnt2.innerText = 'Удалить'
  bnt2.addEventListener('click', function () {
    li.remove()
  })
  li.append(bnt2)
  // li.document.createElement("button")
  List.append(li)
}
document.body.append(List)
// Задача 3: Добавление новых элементов списка
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку в конец списка добавляется новый элемент списка с текстом "New Item".
const btn3 = document.createElement('button')
btn3.innerText = 'Добавить элемент'
btn3.addEventListener('click', function () {
  const li = document.createElement('li')
  li.innerText = 'New Item'
  List.append(li)
})
const number = document.body.append(btn3)
// Задача 4: Переключение класса по клику
// Создайте блок <div> с текстом "Click to toggle". При клике на этот блок добавьте/удалите класс, который изменяет его цвет.
const div = document.createElement('div')
div.innerText = 'Click to toggle'
div.addEventListener('click', function () {
  div.classList.toggle('colorDiv')
})
document.body.append(div)

// Задача 5: Создание галереи изображений
// Создайте кнопку "Добавить изображение". При клике на кнопку добавляется новое изображение на страницу.

// Задача 6: Изменение текста элемента по клику
// Создайте несколько элементов списка (li). При клике на любой элемент его текст должен изменяться на "Clicked!".

// Задача 7: Увеличение счетчика кликов
// Создайте кнопку с текстом "Click me". При каждом клике на кнопку увеличивайте счетчик кликов и выводите его в параграф под кнопкой.

// Задача 8: Создание элемента с событием удаления
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку создается новый элемент списка, который содержит текст "New Item". Каждый новый элемент списка также должен содержать кнопку "Удалить", которая удаляет этот элемент при клике.

// Задача 9: Отображение скрытого текста по клику
// Создайте кнопку "Показать текст" и блок <p> с текстом, который изначально скрыт (с display: none). При клике на кнопку текст должен становиться видимым.

// Задача 10: Смена изображения по клику
// Создайте элемент изображения и кнопку "Сменить изображение". При клике на кнопку меняйте изображение на другое.
