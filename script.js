const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

// Get the current year
const currentYear = new Date().getFullYear();

// Set the target date for the end of the year (December 31st)
const targetDate = new Date(currentYear, 11, 31, 23, 59, 59).getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const remainingTime = targetDate - now;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the formatted time
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');

  // Check if countdown has reached zero
  if (remainingTime <= 0) {
    clearInterval(intervalId);
    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
  }
}

const intervalId = setInterval(updateCountdown, 1000);

updateCountdown(); // Call the function initially to display the starting time
