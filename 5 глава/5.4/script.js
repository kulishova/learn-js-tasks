// 1
let fruits = ['Яблоки', 'Груша', 'Апельсин']

// добавляем новое значение в "копию"
let shoppingCart = fruits
shoppingCart.push('Банан')

alert(fruits.length) // 3

// 2
let styles = ['jazz', 'bluz']
styles.push('rock-and-roll')
styles[Math.floor((styles.lenght - 1) / 2)] = 'classic'
alert(styles.shift())
styles.unshift('hip-hop', 'reggy')

// 3

// 4
function sumInput() {
  let numbers = []

  while (true) {
    let value = prompt('Введите число', 0)

    if (value === '' || value === null || !isFinite(value)) break

    numbers.push(+value)
  }

  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}

alert(sumInput())

// 5
function getMaxSubSum(arr) {
  let maxSum = 0
  let partialSum = 0

  for (let item of arr) {
    partialSum += item
    maxSum = Math.max(maxSum, partialSum)
    if (partialSum < 0) partialSum = 0
  }

  return maxSum
}
