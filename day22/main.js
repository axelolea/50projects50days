const options = document.getElementById('options')

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const canvasHeight = 600
const canvasWidth = 800

let isDrawing = false;
let selectColor = '#f00'
let widthStoke = 5
let snapshot;
let prevX;
let prevY;
let fillFigure = false;
let tool = 'line'

const tools = [{
    'tool': 'pencil',
    'icon': 'bi-pencil-fill'
}]

function empytCanvas () {
    context.fillStyle = '#fff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = selectColor;
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height)
}

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    empytCanvas()
})

function drawPoint(x, y){
    context.beginPath();
    context.arc(x, y, widthStoke, 0, Math.PI * 2)
    context.fillStyle = selectColor;
    context.fill();
}

function drawLine(x1, y1, x2, y2) {
    drawPoint(x1, y1)
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    drawPoint(x2, y2)
}

function drawRectangle(x1, y1, x2, y2){
    if(fillFigure){
        context.fillRect(x1, y1, x2 - x1, y2 - y1)
    }
    else {
        context.strokeRect(x1, y1, x2 - x1, y2 - y1)
    }
}

function startDrawing (e){
    isDrawing = true;
    prevX = e.offsetX;
    prevY = e.offsetY;
    context.strokeStyle = selectColor
    context.fillStyle = selectColor
    context.lineWidth = widthStoke * 2
}

function endDrawing (){
    isDrawing = false
    snapshot = context.getImageData(0, 0, canvas.width, canvas.height)
}

function drawing (e) {
    if(!isDrawing) return;
    context.putImageData(snapshot, 0, 0)
    if(tool == 'brush'){
        drawLine(prevX, prevY, e.offsetX, e.offsetY)
        prevX = e.offsetX
        prevY = e.offsetY
        snapshot = context.getImageData(0, 0, canvas.width, canvas.height)
    }
    else if(tool == 'line'){
        drawLine(prevX, prevY, e.offsetX, e.offsetY)
    }
    else if ( tool == 'rect' ){
        drawRectangle(prevX, prevY, e.offsetX, e.offsetY)
    }
}



canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mouseup', endDrawing)
canvas.addEventListener('mousemove', drawing)








// const canvas = document.getElementById('canvas');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');
// const sizeEL = document.getElementById('size');
// const colorEl = document.getElementById('color');
// const clearEl = document.getElementById('clear');


// let size = 10
// let isPressed = false
// colorEl.value = 'black'
// let color = colorEl.value
// let x
// let y

// canvas.addEventListener('mousedown', (e) => {
//     isPressed = true

//     x = e.offsetX
//     y = e.offsetY
// })

// document.addEventListener('mouseup', (e) => {
//     isPressed = false

//     x = undefined
//     y = undefined
// })

// canvas.addEventListener('mousemove', (e) => {
//     if(isPressed) {
//         const x2 = e.offsetX
//         const y2 = e.offsetY

//         drawCircle(x2, y2)
//         drawLine(x, y, x2, y2)

//         x = x2
//         y = y2
//     }
// })

// function drawCircle(x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, size, 0, Math.PI * 2)
//     ctx.fillStyle = color
//     ctx.fill()
// }

// function drawLine(x1, y1, x2, y2) {
//     ctx.beginPath()
//     ctx.moveTo(x1, y1)
//     ctx.lineTo(x2, y2)
//     ctx.strokeStyle = color
//     ctx.lineWidth = size * 2
//     ctx.stroke()
// }

// function updateSizeOnScreen() {
//     sizeEL.innerText = size
// }

// increaseBtn.addEventListener('click', () => {
//     size += 5

//     if(size > 50) {
//         size = 50
//     }

//     updateSizeOnScreen()
// })

// decreaseBtn.addEventListener('click', () => {
//     size -= 5

//     if(size < 5) {
//         size = 5
//     }

//     updateSizeOnScreen()
// })

// colorEl.addEventListener('change', (e) => color = e.target.value)

// clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))