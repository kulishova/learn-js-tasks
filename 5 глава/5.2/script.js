// 1
let firstNum = +prompt('Введите первое число', '')
let secondNum = +prompt('Введите второе число', '')

alert(firstNum + secondNum)

// 2
alert(Math.round(6.35 * 10) / 10)

// 3
function readNumber() {
  let num

  do {
    num = prompt('Введите число', 0)
  } while (!isFinite(num))

  if (num === null || num === '') return null

  return +num
}

alert(`Число ${readNumber()}`)

// 4
let i = 0
while (i < 11) {
  i += 0.2
  if (i > 9.8 && i < 10.2) alert(i)
}

// 5
function random(min, max) {
  return min + Math.random() * (max - min)
}

alert(random(1, 5))
alert(random(1, 5))
alert(random(1, 5))

// 6

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
