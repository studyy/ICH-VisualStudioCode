// 1. Erstellen Sie eine Klasse Calculator und fügen Sie eine statische Methode subtract() hinzu, die zwei Zahlen
// annimmt und deren Differenz zurückgibt.

// 2. Erstellen Sie eine Klasse StringUtils und fügen Sie eine statische Methode toUpperCase() hinzu, die einen String
// annimmt und ihn in Großbuchstaben zurückgibt.

// 3. Erstellen Sie eine Klasse MathUtils und fügen Sie eine statische Methode getMin() hinzu, die ein Array von Zahlen
// annimmt und die kleinste Zahl zurückgibt.

const numbers = [1, 2, 3, 4, 5, 6, 0]
console.log(Math.min(...numbers))

class MathUtils {
  static getMin(numbersArray) {
    if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
      throw new Error('Ein Leereres Array wurde übergeben')
    }

    let min = numbersArray[0]

    for (let num of numbersArray) {
      if (num < min) {
        min = num
      }
    }

    return min
  }
}

const result = MathUtils.getMin([6, 9, 3])
console.log(result)

// 4. Erstellen Sie eine Klasse ArrayUtils und fügen Sie eine statische Methode average() hinzu, die ein Array von
// Zahlen annimmt und den Durchschnitt berechnet.

class ArrayUtils {
  static average(array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error('Ein Leereres Array wurde übergeben')
    }

    let sum = 0

    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }

    return sum / array.length
  }
}

const resultAvarage = ArrayUtils.average([9, 3])
console.log(resultAvarage)

// 5. Erstellen Sie eine Klasse RandomNumberGenerator und fügen Sie statische Eigenschaften defaultMin und
// defaultMax hinzu, die Standardwerte für das Minimum und Maximum des Bereichs enthalten.
