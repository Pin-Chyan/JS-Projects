
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const hours = now.getHours();
    const hoursDegress = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;
    // console.log("hour: " + hours);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    // console.log("minute: " + minutes);

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log("second: " + seconds);
}

setInterval(setDate, 1000);