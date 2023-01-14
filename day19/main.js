const hourNeedle = document.getElementById('hour')
const minuteNeedle = document.getElementById('minute')
const secondNeedle = document.getElementById('second')

const timeText = document.getElementById('time')
const dateText = document.getElementById('date')

const theme = document.getElementById('theme')

const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const timelaps = 1000 // 1000 miliseconds = 1s

theme.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Neon Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    hourNeedle.style.transform = `translate(-50%, -80%) rotate(${scaleValue(hours, 0, 12, 0, 360)}deg)`
    minuteNeedle.style.transform = `translate(-50%, -80%) rotate(${scaleValue(minutes, 0, 60, 0, 360)}deg)`
    secondNeedle.style.transform = `translate(-50%, -80%) rotate(${scaleValue(seconds, 0, 60, 0, 360)}deg)`

    timeText.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    dateText.innerHTML = `${daysArr[day]}, ${monthsArr[month]} <span class="circle">${date}</span>`
}

function scaleValue (num, in_min, in_max, out_min, out_max){
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, timelaps)