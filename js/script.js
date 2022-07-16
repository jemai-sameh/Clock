const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const dateTime = document.querySelector('.date');

let setDate=()=>{
    const currentDate=new Date();
    return {
        hour: currentDate.getHours()*30 + ((currentDate.getMinutes()/2)) + 90,
        minute: currentDate.getMinutes() *6 + 90,
        second: currentDate.getSeconds() * 6 + 90
    }

}

const setStyle=()=>{
    let clock=setDate();
    secondHand.style.transform = `rotate(${clock.second}deg)`;
    minuteHand.style.transform = `rotate(${clock.minute}deg)`;
    hourHand.style.transform = `rotate(${clock.hour}deg)`;
}

setInterval(setStyle, 1000);



