import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const deadLine = new Date(2023, 7, 5);
const dateToday = new Date();
const time = deadLine - dateToday;
console.log(time);


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  flatpickr("#datetime-picker", {options});


// // If using flatpickr in a framework, its recommended to pass the element directly
// flatpickr(element, {});

// // Otherwise, selectors are also supported
// flatpickr("#myID", {});

// // creates multiple instances
// flatpickr(".anotherSelector");







function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(time)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
