const secondHand = document.querySelector('.second-hand');

function set_date() {
  let now = new Date();
  let seconds = now.getSeconds();
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log(secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}

// Run every second
setInterval(set_date, 1000);