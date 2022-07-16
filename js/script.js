const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
let setDate=()=>{
    const currentDate=new Date();
    return {
        hour: ((currentDate.getHours() / 12) * 360) + ((currentDate.getMinutes()/60)*30) + 90,
        minute: ((currentDate.getMinutes() / 60) * 360) + ((currentDate.getSeconds()/60)*6) + 90,
        second: ((currentDate.getSeconds() / 60) * 360) + 90
    }

}

const setStyle=()=>{
    let clock=setDate();
    secondHand.style.transform = `rotate(${clock.second}deg)`;
    minuteHand.style.transform = `rotate(${clock.minute}deg)`;
    hourHand.style.transform = `rotate(${clock.hour}deg)`;
}

setInterval(setStyle, 1000);