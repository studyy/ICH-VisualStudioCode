const randomArr = [1, 2, -6, -9, 3, 'hello wolrd', 'blink', 'dcdcd', false, true, {myName: 'Yury'}, 'hello world']


const myName = 'Yury'

const obj = {
    // где а = ключ (key), б = значение(value)
    a: 5,
    b: 8,
    c: 'hello',
    g: true,
    sviuhsdflibhsduifbpsibspob: 'hello world'
}

console.log(obj.sviuhsdflibhsduifbpsibspob)

const myKitten = {
    kittyName: 'Cercei',
    age: '2 months',
    color: 'white',
    habits: ['bite', 'eat on my legs', 'sleep'],
    playful: true,
    bonus: 'pee on flip flops',
    paws: 4
}

const arrKitten = ['Cercei', '2 months', 'white', 'bite']
const ourKittens = [
    {
        kittyName: 'Cercei',
        age: 2,
        color: 'white',
        habits: ['bite', 'eat on my legs', 'sleep'],
        playful: true,
        passport: {
            breed: 'semi - Angora',
            mom: 'Angora',
            father: 'Homeless',
            microchipId: 32904941,
            isVacinated: true
        },
        bonus: 'pee on flip flops',
        paws: 4
    },
    {
        kittyName: 'Persik',
        age: 48,
        color: 'orange white',
        habits: ['scratch a sofa', 'love to be pet', 'sleep on lags'],
        playful: false,
        bonus: 'morning alarm',
        paws: 4
    },
    {
        kittyName: 'Dynya',
        age: 36,
        color: 'brown',
        habits: ['love treats', 'spend time on balcony', 'eat cucumeber'],
        playful: true,
        bonus: 'beautiful tail',
        paws: 4
    },
]

//перебираем массив объектов и достаем котят по имени если их возраст больше 30 месяцев
for(let i = 0; i < ourKittens.length; i++) {
    if(ourKittens[i].age > 30) {
        console.log(ourKittens[i].kittyName)
    }
}

const additionalParams = {
    ds: '3DS_ADD_INIT',
    UNIPAY: 'UNIAUTO_LES',
    OSU: 'NXXTTRI'
}

const arr = ['3DS_ADD_INIT', 'UNIAUTO_LES', 'NXXTTRI']

const myCar = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'blue'
}

for(let key in myCar) {
    if(myCar[key] === 'blue') {
        console.log(myCar[key])
        myCar.color = 'red'
    }
    console.log(key)
}
console.log(myCar);


// console.log(myCar);
// //меняем значение свойства
// myCar.brand = 'Honda'
// delete myCar.color
// console.log(myCar.brand)
// console.log(myCar);


fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        
           const res = json.filter(item => item.userId == 1)
          
          console.log(res);
          console.log(json);
          
          
      })