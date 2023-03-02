function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return days[date.getDay()]
}

let date = new Date(2014, 0, 3)
alert(getWeekDay(date))

// 2
function getLocalDay(date) {
  let day = date.getDay()

  if (day == 0) {
    day = 7
  }

  return day
}

// 3
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days)
  return date.getDate()
}

// 4
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

// 5
function getSecondsToday() {
  let d = new Date()
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()
}
