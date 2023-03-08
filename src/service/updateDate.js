function updateDate(date, createTime) {
  const today = new Date();
  const dateToObj = date ? new Date(date) : createTime;
  const delta = Math.floor((today - dateToObj) / 1000 / 60 / 60);
  const day =
    delta < 24 ? 'Сегодня' : delta < 48 ? 'Вчера' : `${getFullDate(dateToObj)}`;
  return `${day},${getTime(createTime)}`;
}

function getTime(date) {
  let hrs = date.getHours();
  hrs = hrs < 10 ? '0' + hrs : hrs;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hrs}:${minutes}`;
}

function getFullDate(date) {
  let day = date.getDate();
  day = day < 10 ? '0' + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default updateDate;
