//  1
// Оба варианта работают, разницы нет

// 2

function checkAge(age) {
  if (age > 18) {
    return true
  } else {
    return confirm('Родители разрешили?')
  }
}

//   2.1
function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?')
}

//  2.2
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?')
}

// 3
function min(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

// 4

function pow(x, n) {
  let result = x

  for (let i = 1; i < n; i++) {
    result *= x
  }
  return result
}

let x = prompt('введите x', '')
let n = prompt('введите n', '')

if (n < 1) {
  alert(`Степень ${n} не соответствует параметрам`)
} else {
  alert(pow(x, n))
}
