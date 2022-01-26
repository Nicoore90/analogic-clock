setInterval(setClock, 1000)
setInterval(setBottomClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)


}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

function setBottomClock() {

    let currentDateBottom = new Date

    
    let hours = currentDateBottom.getHours()
    let minutes = currentDateBottom.getMinutes()
    let seconds = currentDateBottom.getSeconds()

    
    let hourSpan = document.querySelector("#hour")
    let minuteSpan = document.querySelector("#minute")
    let secondSpan = document.querySelector("#second")

    
    hourSpan.innerHTML = "<p>" + hours + ":</p>"
    minuteSpan.innerHTML = "<p>" + minutes + ":</p>"
    secondSpan.innerHTML = "<p>" + seconds + "</p>"
}

setBottomClock()

