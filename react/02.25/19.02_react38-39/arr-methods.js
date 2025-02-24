function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], index, array));
  }

  return result;
}

function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], index, array)) {
      result.push(array[i]);
    }
  }

  return result;
}

// [].map((item) => {});
// [].filter((item) => typeof item === "number");
// myMap([], (item) => {})

Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], index, this));
  }

  return result;
}

[].myMap((item) => {})
[1, 2, 3, 4, 5].reduce((acc, item) => acc + item, [])

Array.prototype.myReduce = function(callback, initialValue) {
  if (this.length === 0) {
    throw new Error();
  }

  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue
  } else {
    accumulator = this[0]
  }

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }

  return accumulator;
}
