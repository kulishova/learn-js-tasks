'use strict'

// 1
if ('0') {
  alert('Привет')
}
// ДА, выведется

//   2
let company = prompt('Какое "официальное" название JavaScript?', '')

if (company == 'ECMAScrip') {
  alert('Верно!')
} else {
  alert('Не знаете? ECMAScript!')
}

// 3

let num = prompt('Введи число', '')

if (num > 0) {
  alert(1)
} else if (num < 0) {
  alert(-1)
} else if ((num = 0)) {
  alert(0)
}

// 4

let result = a + b < 4 ? 'Мало' : 'Много'
alert(result)
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// 5

let message =
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : ''

alert(message)
