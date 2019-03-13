const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('#digital-time');

function set_date() {
  let now = new Date();

  let seconds = now.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  let mins = now.getMinutes();
  let minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  let hours = now.getHours();
  let hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  digitalTime.innerHTML = `${hours}:${mins}:${seconds}`;
}

// Run every secondl
setInterval(set_date, 1000);