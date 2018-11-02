const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const parseDate = date => {
  var year = new Date().getFullYear();
  var monthParse = new Date().getMonth();
  var month = '';
  if (monthParse == 0 || monthParse == 11) {
    monthParse += 1
  }
  monthParse < 10 ? month = '0' + monthParse : monthParse
  console.log(monthParse)
  return year + '-' + monthParse
}

module.exports = {
  formatTime: formatTime,
  parseDate: parseDate
}
