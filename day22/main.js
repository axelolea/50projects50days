const options = document.getElementById('options')
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const undo = document.getElementById('undo')
const clear = document.getElementById('clear')
// Draw Properties
let prevX;
let prevY;
let snapshot = [];
const maxStrokeWidth = 50
const minStrokeWidth = 5
const defaultTool = 'pencil'
const defaultColor = '#000'
const defaultWidth = 5
// Default Settings
let isDrawing = false;
let selectColor = defaultColor
let widthStoke = defaultWidth
let fillFigure = false;
let actualTool = defaultTool
// Tools Array 
const tools = [{
        'tool': 'pencil',
        'icon': 'bi-pencil-fill',
        'fill': false,
        'id': 'pencil',
    },
    {
        'tool': 'line',
        'icon': 'bi-slash-lg',
        'fill': false,
        'id': 'line',

    },
    {
        'tool': 'circle',
        'icon': 'bi-circle-fill',
        'fill': true,
        'id': 'circle-fill',
    },
    {
        'tool': 'circle',
        'icon': 'bi-circle',
        'fill': false,
        'id': 'circle-stroke',
    },
    {
        'tool': 'square',
        'icon': 'bi-square-fill',
        'fill': true,
        'id': 'square-fill',
    },
    {
        'tool': 'square',
        'icon': 'bi-square',
        'fill': false,
        'id': 'square-stroke',
}]

function removeActive(){
    const buttons = document.querySelectorAll('.option')
    buttons.forEach(btn => btn.classList.remove('active'))
}

function createTool(){

    const fragmentTools = document.createDocumentFragment()
    tools.forEach(tool => {
        const btn = document.createElement('button')
        const icon = document.createElement('i')
        icon.classList.add('bi', tool.icon)
        btn.classList.add('option', 'btn')
        if(actualTool == tool.tool) btn.classList.add('active')
        btn.id = tool.id
        btn.append(icon)
        btn.addEventListener('click', () => {
            const btnActive = document.getElementById(`${tool.id}`)
            removeActive()
            btnActive.classList.add('active')
            actualTool = tool.tool
            fillFigure = tool.fill
        })
        fragmentTools.append(btn)
    })
    options.append(fragmentTools)
}

const pushSnapshot = () => {
    isDrawing = false
    snapshot.push(context.getImageData(0, 0, canvas.width, canvas.height))
}

function clearCanvas () {
    context.fillStyle = '#fff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = selectColor;
    pushSnapshot()
}

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    createTool()
    clearCanvas()
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

function drawCircle(x1, y1, x2, y2){
    const radX = (x2 - x1) / 2
    const radY = (y2 - y1) / 2
    const x = x1 + radX
    const y = y1 + radY
    context.beginPath();
    context.ellipse(x, y, Math.abs(radX), Math.abs(radY), 0, 0, Math.PI * 2);
    if(fillFigure){
        context.fill();
    }
    else{
        context.stroke(); 
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

function endDrawing(){
    if(!isDrawing) return;
    isDrawing = false
    pushSnapshot()
}

function undoAction() {
    if(snapshot.length <= 1) return;
    snapshot.pop()
    context.putImageData(snapshot.at(-1), 0, 0)
}

function drawing (e) {
    if(!isDrawing) return;
    if(actualTool == 'pencil'){
        drawLine(prevX, prevY, e.offsetX, e.offsetY)
        prevX = e.offsetX
        prevY = e.offsetY
        return
    }
    
    // Dynamic Draw
    context.putImageData(snapshot.at(-1), 0, 0)
    
    if(actualTool == 'line'){
        drawLine(prevX, prevY, e.offsetX, e.offsetY)
    }
    else if (actualTool == 'square' ){
        drawRectangle(prevX, prevY, e.offsetX, e.offsetY)
    }
    else if (actualTool == 'circle' ){
        drawCircle(prevX, prevY, e.offsetX, e.offsetY)
    }
}



canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mousemove', drawing)
canvas.addEventListener('mouseup', endDrawing)
canvas.addEventListener('mouseout', endDrawing)
undo.addEventListener('click', undoAction)
clear.addEventListener('click', clearCanvas)