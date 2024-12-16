function hash() {
  console.log(arguments)
  console.log([])
  console.log({})
  console.log([].join.call(arguments)) // 1,2
  return arguments[0]
}
hash(1, 2)
console.log(hash(1, 2))

console.log('//////////////')

function fn() {
  let count = 0
  count++
  return count
}

console.log(fn())
console.log(fn())
console.log('//////////////')
let numb = fn()
console.log(numb)

numb += fn()
console.log(numb)

numb = null
console.log(numb)

numb += fn()
console.log(numb)

numb += fn()
console.log(numb)
