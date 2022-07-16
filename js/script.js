const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const dateTimeDay = document.querySelector('.Date');
const dateTimeSecond = document.querySelector('#second');
const dateTimeHour = document.querySelector('#hour');
const dateTimeMinute = document.querySelector('#minute');

/*var audio = new Audio('./sound/tink.wav');*/

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let setDate=(currentDate)=>{
    console.log(currentDate.getHours())
    return {
        hour: currentDate.getHours()*30 + ((currentDate.getMinutes()/2)) + 90,
        minute: currentDate.getMinutes() *6 + 90,
        second: currentDate.getSeconds() * 6 + 90
    }

}
let setDateTime=(currentDate)=>{
    dateTimeDay.textContent =dayNames[currentDate.getDay()] + " " + currentDate.getDate() + ' ' + monthNames[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
    dateTimeSecond.textContent= (currentDate.getSeconds() < 10 ? "0" : ""  )+ currentDate.getSeconds();
    dateTimeMinute.textContent= (currentDate.getMinutes() < 10 ? "0" : ""  )+ currentDate.getMinutes();
    dateTimeHour.textContent= (currentDate.getHours() < 10 ? "0" : ""  )+ currentDate.getHours();

}

const setStyle=()=>{
    const currentDate=new Date();

    let clock=setDate(currentDate);
    let clockDayTime=setDateTime(currentDate)

    secondHand.style.transform = `rotate(${clock.second}deg)`;
    const audio = document.querySelector(`audio`);
    if (audio) {
    audio.play();
    }
    minuteHand.style.transform = `rotate(${clock.minute}deg)`;
    hourHand.style.transform = `rotate(${clock.hour}deg)`;
}

setInterval(setStyle, 1000);




