const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const daysDeadLine = window.document.querySelector(".days");
const hoursDeadLine = window.document.querySelector(".hours");
const minsDeadLine = window.document.querySelector(".minutes");
const secsDeadLine = window.document.querySelector(".seconds");

const items = window.document.querySelector(".deadline-format h4");

const giveaway = window.document.querySelector(".giveaway");
const deadLine = window.document.querySelector(".deadline");

let futureDate = new Date("September 6 , 2022 18:54:00");
function renderDateInformation() {
  giveaway.textContent = `giveaway ends on ${
    weekdays[futureDate.getDay()]
  }, ${futureDate.getDate()} ${
    months[futureDate.getMonth()]
  } ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()} `;
}

const interval = window.setInterval(() => {
  // future time in milisecond
  const currentDate = new Date();
  const differenceDate = futureDate - currentDate;
  let noOfDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  let noOfSeconds = Math.floor((differenceDate / 1000) % 60);
  let noOfMinutes = Math.floor((differenceDate / (1000 * 60)) % 60);
  let noOfHours = Math.floor((differenceDate / (1000 * 60 * 60)) % 24);

  // targeting html content

  renderDifference(noOfDays, noOfHours, noOfMinutes, noOfSeconds);
}, 1000);

function renderDifference(days, hours, minutes, seconds) {
  if (days < 1) {
    futureDate = new Date(futureDate.setDate(futureDate.getDate() + 20));
    renderDateInformation();
  }

  if (days < 10) {
    days = `0${days}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (seconds <= 0) {
    clearInterval(interval);
    deadLine.innerHTML = `<h4>Sorry giveaway has expired</h4>`;
  }

  daysDeadLine.textContent = days;
  hoursDeadLine.textContent = hours;
  minsDeadLine.textContent = minutes;
  secsDeadLine.textContent = seconds;
}
