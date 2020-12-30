const pad = (number, length) => {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
};

const getDate = (date) => {
  const currentDate = new Date(date);
  const rst =
    pad(currentDate.getFullYear(), 2) +
    '/' +
    pad(currentDate.getMonth() + 1, 2) +
    '/' +
    pad(currentDate.getDate(), 2) +
    ' ' +
    pad(currentDate.getHours(), 2) +
    ':' +
    pad(currentDate.getMinutes(), 2);
  return rst;
};

const diffTime = (date) => {
  let diff = date;
  if (diff <= 0) {
    return `Contest is Over`;
  }
  const day = Math.round(diff / 86400000);
  if (day >= 3) {
    return `Before start ${day} days`;
  }
  let h = Math.floor(diff / 3600000);
  if (h < 10) h = '0' + h;
  diff %= 3600000;
  let m = Math.floor(diff / 60000);
  if (m < 10) m = '0' + m;
  diff %= 60000;
  let s = Math.floor(diff / 1000);
  if (s < 10) s = '0' + s;
  return `Before start ${h}:${m}:${s}`;
};

export { getDate, diffTime };
