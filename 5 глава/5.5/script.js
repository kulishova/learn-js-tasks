//  1
function camelize(str) {
  return str
    .split('-')
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}

// 2
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b)
}

// 3
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]

    if (val < a || val > b) {
      arr.splice(i, 1)
      i--
    }
  }
}

// 4
let arr = [5, 2, 1, -10, 8]
arr.sort((a, b) => a - b)
alert(arr)

// 5
function copySorted(arr) {
  return arr.slice().sort()
}

let arr = ['HTML', 'JavaScript', 'CSS']

let sorted = copySorted(arr)

// 6
function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  }

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }

    return this.methods[op](a, b)
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}

// 7
let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }
let users = [vasya, petya, masha]

let names = users.map((item) => item.name)

// 8
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}))

// 9
function sortByAge(arr) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1))
}

let vasya = { name: 'Вася', age: 25 }
let petya = { name: 'Петя', age: 30 }
let masha = { name: 'Маша', age: 28 }

let arr = [vasya, petya, masha]

sortByAge(arr)

//   10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

//   11
