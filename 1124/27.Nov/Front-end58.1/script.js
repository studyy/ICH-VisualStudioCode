// {/* <canvas> —
// это HTML элемент, использующийся для рисования
// графики средствами языков программирования
// (обычно это JavaScript). Может использоваться для
// рисования графов, создания коллажей или простой
// анимации. */}

// Элемент canvas
// ● Выглядит, как элемент <img>, но не имеет атрибутов src и alt
// ● Имеет только два атрибута - ширину и высоту
// ● Если атрибуты высоты и ширины не установлены, canvas будет по умолчанию шириной 300 пикселей и в
// высоту 150 пикселей
// ● <canvas id="canvas"></canvas>
// ● Из-за того, что старые браузеры не поддерживают элемент <canvas>, следует предоставить запасное
// содержимое для отображения этими браузерами

// Рендеринг содержимого
// ● Холст изначально пустой и прозрачный
// ● Скрипт получает доступ к контексту и отрисовывает его
// ● <canvas> имеет метод getContext(), используется для получения контекста визуализации и её функции
// рисования
// ● getContext() принимает один параметр, тип контекста
// ● Для 2D графики используется метка "2d"

// fillRect(x, y, width, height) —
// это функция, которая рисует фигуру с координатами x,
// y, шириной width и высотой height.

// Сетка
// ● Начало координат canvas сетки расположено в верхнем левом углу в координате (0,0 )
// ● Все элементы размещены относительно этого начала
// ● Положение верхнего левого угла синего квадрата: х пикселей слева и у пикселей сверху, на координате (х, у)

// canvas
// Поддерживает только одну примитивную фигуру: прямоугольник.
// Другие фигуры должны быть созданы комбинацией одного или большего количества
// контуров (paths), набором точек, соединенных в линии.

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

// console.log([canvas.getContext('2d')])
// ctx.fillStyle = `rgb(66, 135, 245)`
// ctx.fillRect(10, 10, 1000, 120)

// ctx.fillStyle = `rgb(66, 0, 245)`
// ctx.fillRect(0, 0, 150, 150)

// // clearRect(x, y, width, height) —
// // это функция, которая очищает прямоугольную область,
// // делая содержимое прозрачным.
// ctx.clearRect(0, 0, 50, 50)

// // fillRect(x, y, width, height) —
// // это функция, которая рисует заполненный
// // прямоугольник.
// ctx.fillStyle = 'rgb(200, 0, 0)'
// ctx.fillRect(25, 25, 100, 100)

// // strokeRect(x, y, width, height) —
// // это функция, которая рисует прямоугольный контур.
// ctx.strokeStyle = 'pink'
// ctx.strokeRect(50, 50, 150, 25)

// Контур —
// это набор точек, которые, соединяясь в отрезки линий,
// могут образовывать различные фигуры, изогнутые или
// нет, разной ширины и разного цвета. Контур (или
// субконтур) может быть закрытым.

// Алгоритм создания фигур:
// Создание контура
// Рисование контура с помощью команд рисования
// Закрытие контура

//рисуем линию
// ctx.beginPath()
// ctx.moveTo(75, 50)
// ctx.lineTo(150, 50)
// ctx.strokeStyle = 'red'
// // stroke() —
// // это метод, который позволяет обвести созданный
// // контур.
// ctx.stroke()

// рисуем треугольник
// ctx.beginPath()
// ctx.moveTo(75, 50)
// ctx.lineTo(50, 25)
// ctx.lineTo(100, 25)
// ctx.lineTo(75, 50)
// ctx.fillStyle = 'red'
// // fill() —
// // это метод, который позволяет залить созданный
// // контур для его отображения.
// ctx.fill()

// рисуем дугу
// ctx.beginPath()
// // arc(x, y, radius, startAngle, endAngle, anticlockwise) —
// // это метод, который рисует дугу с центром в точке (x,y) радиусом radius, начиная с
// // угла startAngle и заканчивая в endAngle в направлении против часовой стрелки
// // anticlockwise (по умолчанию по ходу движения часовой стрелки).
// ctx.arc(75, 75, 50, 0, 4)
// ctx.stroke()

// arcTo(x1, y1, x2, y2, radius) —
// это метод, который рисует дугу с заданными
// контрольными точками и радиусом, соединяя эти
// точки прямой линией.

// ЗАДАНИЕ 1
// Нарисовать треугольник произвольного размера, обведенный зеленым контуром.
//triangle
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(100, 70)
ctx.lineTo(150, 10)
ctx.lineTo(50, 50)
ctx.strokeStyle = 'pink'
ctx.stroke()

// ЗАДАНИЕ 2
// Нарисовать круг радиусом 25px, залитый розовым цветом.

// ЗАДАНИЕ 3
// Нарисовать прямоугольник произвольного размера, залитый черным цветом

// // солнце
// const sun = document.querySelector('#sun')
// const ctx = sun.getContext('2d')
// const centerX = 200
// const centerY = 200
// const sunRad = 50
// ctx.beginPath()
// ctx.arc(centerX, centerY, sunRad, 0, 2 * Math.PI)
// ctx.fillStyle = 'yellow'
// ctx.fill()
// ctx.closePath()
// // лучики
// const rayCount = 12
// for (let index = 0; index < rayCount; index++) {
//     const angle = (2*Math.PI/rayCount)*index
//     const rayLength = index % 2 === 0 ? 70 : 100
//     const startX = centerX + Math.cos(angle)*sunRad
//     const startY = centerY + Math.sin(angle)*sunRad
//     const endX = centerX + Math.cos(angle)*(sunRad + rayLength)
//     const endY = centerY + Math.sin(angle)*(sunRad + rayLength)
//     ctx.beginPath()
//     ctx.moveTo(startX, startY)
//     ctx.lineTo(endX, endY)
//     ctx.strokeStyle = 'yellow'
//     ctx.lineWidth = 2
//     ctx.stroke()
//     ctx.closePath()
// }
