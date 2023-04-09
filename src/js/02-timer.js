import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


// const deadLine = new Date(2023, 7, 5);

const dayElement = document.querySelector("[data-days]");
const hourElement = document.querySelector("[data-hours]");
const minuteElement = document.querySelector("[data-minutes]");
const secondElement = document.querySelector("[data-seconds]");

let deadLine = null; 



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
deadLine = selectedDates;
    console.log(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", {options});





function timer() {

  const dateToday = new Date();
  const time = dateToday - deadLine;
  console.log(time);
  
  function convertMs(time) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(time / day);
    // Remaining hours
    const hours = Math.floor((time % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((time % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((time % day) % hour) % minute) / second);

    dayElement.textContent = days;
    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
    secondElement.secondElement = seconds;
    
    // return { days, hours, minutes, seconds };
  }
}
setInterval(timer, 1000);

// console.log(convertMs(time)); // {days: 0, hours: 0, minutes: 0, seconds: 2}





// // If using flatpickr in a framework, its recommended to pass the element directly
// flatpickr(element, {});

// // Otherwise, selectors are also supported
// flatpickr("#myID", {});

// // creates multiple instances
// flatpickr(".anotherSelector");







