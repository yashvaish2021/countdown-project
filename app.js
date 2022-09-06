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

const giveaway = window.document.querySelector(".giveaway");
const deadLine = window.document.querySelector(".deadline");

const futureDate = new Date("September 20 , 2022 16:35:00");
giveaway.textContent = `giveaway ends on ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()} PM`;

window.setInterval(() => {
  // future time in milisecond
  const currentDate = new Date();
  let differenceDate = futureDate - currentDate;
  let noOfDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  let noOfSeconds = Math.floor((differenceDate / 1000) % 60);
  let noOfMinutes = Math.floor((differenceDate / (1000 * 60)) % 60);
  let noOfHours = Math.floor((differenceDate / (1000 * 60 * 60)) % 24);

  // targeting html content

  renderDifference(noOfDays, noOfHours, noOfMinutes, noOfSeconds);
}, 1000);

function renderDifference(days, hours, minutes, seconds) {
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

  daysDeadLine.textContent = days;
  hoursDeadLine.textContent = hours;
  minsDeadLine.textContent = minutes;
  secsDeadLine.textContent = seconds;
}
