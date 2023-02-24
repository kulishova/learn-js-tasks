// 1
alert(null || 2 || undefined) //2

// 2
alert(alert(1) || 2 || alert(3)) //2

// 3

alert(1 && null && 2) // null

// 4
alert(alert(1) && alert(2)) // 1, underfined

// 5
alert(null || (2 && 3) || 4) // 3, underfined

//6
let age

if (age >= 14 && age <= 90)
  // 7
  // 7.1
  alert(!(age >= 14 && age <= 90))

//  7.2
if (age < 14 || age > 90)
  if (-1 || 0)
    // 8
    alert('first') // Выполняется
if (-1 && 0) alert('second') // Не выполянется
if (null || (-1 && 1)) alert('third') // Выполняется

// 9
let user = prompt('Кто там?', '')

if (user === 'Админ') {
  let pass = prompt('Пароль?', '')

  if (pass === 'Я главный') {
    alert('Здравствуйте')
  } else if (pass === '' || pass === null) {
    alert('ОТмена')
  } else {
    alert('неверный пароль')
  }
} else if (user === '' || user === null) {
  alert('Отмена')
} else {
  alert('Я вас не знаю')
}
