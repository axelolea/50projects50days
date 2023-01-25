const inputText = document.getElementById('input-text')
const timeRange = document.getElementById('input-time')
const showText = document.getElementById('show-text')
const rangeText = document.getElementById('range-text')
const maxSpeed = 200
const minSpeed = 30
const defaultPerSpeed = 0
const defaultText = 'Hola pueblo magico'

const speedCalc = (percentage) => {
    return maxSpeed - (((maxSpeed - minSpeed) * percentage) / 100)
}

let text = defaultText
let speed = speedCalc(defaultPerSpeed)
let posLetter = 1

timeRange.value = defaultPerSpeed
inputText.value = text

function textEffect ()
{
    showText.innerText = text.slice(0, posLetter);
    posLetter++;
    if(posLetter > text.length) posLetter = 1;
    setTimeout(textEffect, speed);
}

inputText.addEventListener('input', (e) => {
    text = e.target.value
})

timeRange.addEventListener('input', (e) => {
    speed = speedCalc(e.target.value)
    rangeText.innerText = `Speed ${e.target.value}%`
})

textEffect()