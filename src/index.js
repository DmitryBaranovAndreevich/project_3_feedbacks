import './styles/index.css';
function getTimeStamp() {
  let today = new Date(); //fetch today's date and store it in variable

  let date = today.getDate(); //fetch the date i.e. 1-31
  date = date < 10 ? "0" + date : date; //prefix 0 if date is single-digit

  let month = today.getMonth() + 1; //fetch the month i.e. 0-11 and add 1 to it to make it 1-12
  month = month < 10 ? "0" + month : month; //prefix 0 if month is single-digit

  let year = today.getFullYear(); //fetch the year (four-digit)

  let fullDate = `${date}-${month}-${year}`; //form a "DD-MM-YYYY" string

  let hours = today.getHours(); //fetch hours i.e. 0-23
  let hrs = hours < 12 ? hours : hours - 12; //convert 24-hour time to 12-hour time
  hrs = hrs < 10 ? "0" + hrs : hrs; //prefix 0 if hours is single-digit

  let minutes = today.getMinutes(); //fetch minutes i.e. 0-59
  minutes = minutes < 10 ? "0" + minutes : minutes; //prefix 0 if minutes is single-digit

  let seconds = today.getSeconds(); //fetch minutes i.e. 0-59
  seconds = seconds < 10 ? "0" + seconds : seconds; //prefix 0 if seconds is single-digit

  let sfx = hours < 12 ? "AM" : "PM"; //display AM/PM according to time

  let fullTime = `${hrs}:${minutes}:${seconds} ${sfx}`; //form a "HH:MM:SS TT" string

  return [fullDate, fullTime]; //return array when the function is called
}

const [date, time] = getTimeStamp(); //store returned array in destructured array

document.getElementById(
  "pageFooter"
).innerHTML = `Loaded on ${date} at ${time}`; //display values in page footer
