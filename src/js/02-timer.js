import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const buttonStart = document.querySelector("[data-start]");
const inputArea = document.getElementById("datetime-picker")
const dayElement = document.querySelector("[data-days]");
const hourElement = document.querySelector("[data-hours]");
const minuteElement = document.querySelector("[data-minutes]");
const secondElement = document.querySelector("[data-seconds]");


let timerId = null;
let differenceTime = 0; 
let formatDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    curentDiffDateVolume(selectedDates[0]);
  },
};

buttonStart.setAttribute("disabled", true);

flatpickr(inputArea, options);

buttonStart.addEventListener("click", onButtonStart);


function onButtonStart() {
  timerId = setInterval(timer, 1000);
}


function curentDiffDateVolume(selectedDates) {
  const curentDate = Date.now();

if(selectedDates < curentDate) {
  buttonStart.setAttribute("disabled", true);
  return Notify.failure("Please choose a date in the future")
}else{
  differenceTime = selectedDates.getTime() - curentDate;
  formatDate = convertMs(differenceTime);

  upgradeDate(formatDate);
  buttonStart.removeAttribute("disabled");
}

}

function timer() {
  buttonStart.setAttribute("disabled", true);
  inputArea.setAttribute("disabled", true);

  differenceTime -= 1000;

  if(secondElement.textContent <= 0 && minuteElement.textContent <= 0) {
    clearInterval(timerId);
  } 
    formatDate = convertMs(differenceTime);
    upgradeDate(formatDate);
  console.log(formatDate);
}


function convertMs(differenceTime) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(differenceTime/ day);
  // Remaining hours
  const hours = Math.floor((differenceTime % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((differenceTime % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((differenceTime % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function upgradeDate(formatDate){

dayElement.textContent = formatDate.days;
hourElement.textContent = formatDate.hours;
minuteElement.textContent = formatDate.minutes;
secondElement.secondElement = formatDate.seconds;

}

