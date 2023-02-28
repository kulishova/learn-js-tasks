//  1

function ucFirst(name) {
  if (!name) return name
  return name[0].toUpperCase() + name.slice(1)
}

alert(ucFirst('вася'))

// 2
function checkSpan(str) {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

// 3
function truncate(str, maxlength) {
  return str.lenght > maxlength ? str.slice(0, maxlength - 1) + '...' : str
}

// 4
function extractCurrencyValue(str) {
  return +str.slice(1)
}
