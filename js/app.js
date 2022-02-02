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

    let weekday = currentDateBottom.getDay()
    let date = currentDateBottom.getDate()
    let month = currentDateBottom.getMonth()
    let year = currentDateBottom.getFullYear()
    let hours = currentDateBottom.getHours()
    let minutes = currentDateBottom.getMinutes()
    let seconds = currentDateBottom.getSeconds()

    let weekdaySpan = document.querySelector("#weekday")
    let daySpan = document.querySelector("#date")
    let monthSpan = document.querySelector("#month")
    let yearSpan = document.querySelector("#year")
    let hourSpan = document.querySelector("#hour")
    let minuteSpan = document.querySelector("#minute")
    let secondSpan = document.querySelector("#second")

    switch(weekday) {
        case 0:
            weekdaySpan.innerHTML = "<p>Sunday, </p>"
            break
        case 1:
            weekdaySpan.innerHTML = "<p>Monday, </p>"
            break
        case 2:
            weekdaySpan.innerHTML = "<p>Tuesday, </p>"
            break
        case 3:
            weekdaySpan.innerHTML = "<p>Wednesday, </p>"
            break
        case 4:
            weekdaySpan.innerHTML = "<p>Thursday, </p>"
            break
        case 5:
            weekdaySpan.innerHTML = "<p>Friday, </p>"
            break
        case 6:
            weekdaySpan.innerHTML = "<p>Saturday, </p>"
    }
    //daySpan.innerHTML = "<p>" + date + "/</p>"
    if(date <= 9) {
        daySpan.innerHTML = "<p>0" + date + "/</p>"
    } else {
        daySpan.innerHTML = "<p>" + date + "/</p>"
    }
    switch(month) {
        case 0:
            monthSpan.innerHTML = "<p>January/</p>"
            break
        case 1:
            monthSpan.innerHTML = "<p>February/</p>"
            break
        case 2:
            monthSpan.innerHTML = "<p>March/</p>"
            break
        case 3:
            monthSpan.innerHTML = "<p>April/</p>"
            break
        case 4:
            monthSpan.innerHTML = "<p>May/</p>"
            break
        case 5:
            monthSpan.innerHTML = "<p>June/</p>"
            break
        case 6:
            monthSpan.innerHTML = "<p>July/</p>"
            break
        case 7:
            monthSpan.innerHTML = "<p>August/</p>"
            break
        case 8:
            monthSpan.innerHTML = "<p>September/</p>"
            break
        case 9:
            monthSpan.innerHTML = "<p>October/</p>"
            break
        case 10:
            monthSpan.innerHTML = "<p>November/</p>"
            break
        case 11:
            monthSpan.innerHTML = "<p>December/</p>"
            break
    }
    yearSpan.innerHTML = "<p>" + year + ",</p>"
    //hourSpan.innerHTML = "<p>" + hours + ":</p>"
    if(hour <= 9) {
        hourSpan.innerHTML = "<p>0" + hours + ":</p>"
    } else {
        hourSpan.innerHTML = "<p>" + hours + ":</p>"
    }
    //minuteSpan.innerHTML = "<p>" + minutes + ":</p>"
    if(minutes <= 9) {
        minuteSpan.innerHTML = "<p>0" + minutes + ":</p>"
    } else {
        minuteSpan.innerHTML = "<p>" + minutes + ":</p>"
    }
    //secondSpan.innerHTML = "<p>" + seconds + "</p>"
    if(seconds <= 9) {
        secondSpan.innerHTML = "<p>0" + seconds + "</p>"
    } else {
        secondSpan.innerHTML = "<p>" + seconds + "</p>"
    }
}

setBottomClock()

