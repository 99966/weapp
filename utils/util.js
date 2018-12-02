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
  var Nowdate = new Date();
  var vYear = Nowdate.getFullYear();
  var vMon = Nowdate.getMonth() + 1;
  if (vMon == 1) {
    vYear = Nowdate.getFullYear() - 1;
    vMon = 12;
  } else {
    vMon = vMon - 1;
  }
  if (vMon < 10) {
    vMon = "0" + vMon;
  }
  var date = vYear + "-" + vMon;
  console.log(date)
  return date;
}

module.exports = {
  formatTime: formatTime,
  parseDate: parseDate
}
