// 1
let i = 3

while (i) {
  alert(i--)
} // 1

// 2
let i = 0
while (++i < 5) alert(i) // 4

let i = 0
while (i++ < 5) alert(i) // 4

// 3
for (let i = 0; i < 5; i++) alert(i) // 4

for (let i = 0; i < 5; ++i) alert(i) // 4

// 4
// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) alert(i)
}

// 5
let i
while (i < 3) {
  alert(`number ${i}!`)
  i++
}

// 6

let num = prompt('Введите число больше 100', '')

do {
  let num = prompt('Введите число больше 100', 0)
} while (num < 100 && num == null)

// 7
let n = 10

nextNum: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNum
  }
  alert(i)
}
