
//The setInterval() method calls a function at specified intervals (in milliseconds).
setInterval(setClock, 1000)


const secondHand = document.querySelector('[varSecondHand]')
const minuteHand = document.querySelector('[varMinuteHand]')
const hourHand = document.querySelector('[varHourHand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    secondHand.style.setProperty('--rotation', secondsRatio * 360)
    minuteHand.style.setProperty('--rotation', minutesRatio * 360)
    hourHand.style.setProperty('--rotation', hoursRatio * 360)


    // setRotation(secondHand, secondsRatio)
    // setRotation(minuteHand, minutesRatio)
    // setRotation(hourHand, hoursRatio)


}

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)
// }

setClock()