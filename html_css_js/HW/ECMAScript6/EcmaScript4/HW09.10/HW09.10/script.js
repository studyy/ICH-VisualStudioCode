// Задание 1
// Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

const personInfo = {
    name: 'Karina',
    age: 25
}

console.log(`Name: ${personInfo.name}, Age: ${personInfo.age}`)

// Задание 2
// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

const book1 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
};

const book2 = {
    title: '1984',
    author: 'George Orwell'
};

const book3 = {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
};

const bookList = [book1, book2, book3];

for (let book of bookList) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}


// Задание 3 *
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.
const rectangle = {
    a: 10,
    b: 35
};

rectangle.s = rectangle.a * rectangle.b; 
rectangle.p = 2 * (rectangle.a + rectangle.b); 

console.log(rectangle);


// Задание 4 *
// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.

const fruitsArr = [
        {
            name: 'Apple',
            color: 'Red'
        },
        {
            name: 'Banana',
            color: 'Yellow'
        },
        {
            name: 'Orange',
            color: 'Orange'
        },
        {
            name: 'Grapes',
            color: 'Purple'
        },
        {
            name: 'Lemon',
            color: 'Yellow'
        }
    ];

    for (let fruit of fruitsArr) {
        if (fruit.color === 'Red') {
            console.log(`Fruit: ${fruit.name}, Color: ${fruit.color}`);
        }
    }

// Задание 5 **
// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

const playlist = {
    songs: [
        {
            title: 'Bohemian Rhapsody',
            artist: 'Queen',
        },
        {
            title: 'Stairway to Heaven',
            artist: 'Led Zeppelin',
        },
        {
            title: 'Imagine',
            artist: 'John Lennon',
        },
        {
            title: 'Hotel California',
            artist: 'Eagles',
        },
        {
            title: 'Billie Jean',
            artist: 'Michael Jackson',
        }
    ]
};

for (let song of playlist.songs) {
    console.log(`Title: ${song.title}, Artist: ${song.artist}`);
}