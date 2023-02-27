// 1
function makeUser() {
  return {
    name: 'John',
    ref: this,
  }
}

let user = makeUser()

alert(user.ref.name) // underfind, так как вызывается как функция, а не как метод

// 2
let calculator = {
  mul() {
    return this.a * this.b
  },
  sum() {
    return this.a + this.b
  },
  read() {
    this.a = +prompt('Введите a', 0)
    this.b = +prompt('Введите b', 0)
  },
}
calculator.read()
alert(calculator.sum())
alert(calculator.mul())

// 3
let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step)
    return this
  },
}

ladder.up().up().down().showStep().down().showStep() // показывает 1 затем 0
