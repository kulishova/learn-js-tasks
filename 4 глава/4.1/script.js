// 1

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// 1.1 выполнено с деструкторизацией для простоты чтения кода
let user = {}
const { name, surname } = user
name = 'John'
surname = 'Smith'
name = 'Pete'
delete name

// 2
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

// 3
const user = {
  name: 'John',
}

// это будет работать?
user.name = 'Pete'

//   "user.name" будет работать, так как содержимое объекта, объявленного через const можно изменять

// 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0

for (key in salaries) {
  sum += salaries[key]
}

alert(sum)

// 5

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

multiplyNumeric(menu)

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
}
