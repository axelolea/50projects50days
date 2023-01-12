const box = document.getElementById('box')
const textArea = document.getElementById('choices')

const colors = ['#fffec2',
'#ff9688',
'#a5eea0',
'#b2dafa',
'#e4fbfb',
'#ecd6c0',
'#ffe5f0',
'#dfcae1']
const strokeColor = '#616161'
const strokeSize = 4

const timeOutSpin = 10
const animationSpin =  `transition-duration: ${timeOutSpin}s; transition-timing-function: cubic-bezier(0.38, 0, 0.15, 1);`

const arrow = document.querySelector('.arrow')
const canvasText = document.querySelector('.canvas-text')

textArea.addEventListener('input', (e) => {
    updateChoices(e.target.value)
})

function updateChoices(value) {
    const split = value.split('\n').filter(choice => choice !== '')
    if(split.length > 0){
        arrow.classList.remove('disable')
        canvasText.classList.add('disable')
    }
    else{
        arrow.classList.add('disable')
        canvasText.classList.remove('disable')
    }
    drawRoullette(split)
}

var canvas = document.getElementById("canvas");

canvas.width = 300
canvas.height = 300

var context = canvas.getContext("2d");

class Fragment {
    constructor(x, y, r, ap, af, color, text){
        this.posX = x
        this.posY = y
        this.radio = r
        this.ap = ap //first angle
        this.af = af //final angle
        this.color = color
        this.text = text
        this.ad = (this.af - this.ap) / 2 //divide angle
        this.am = this.ap + this.ad // Text Angle
        this.textRotate = Math.PI + this.am
        this.desfaseRadio = 10
        this.textRadio = this.radio - this.desfaseRadio
        this.txtX = this.posX + (this.textRadio * Math.cos(this.am))
        this.txtY = this.posY + (this.textRadio * Math.sin(this.am))
    }
    draw(ctx){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.strokeStyle = strokeColor
        ctx.lineWidth = strokeSize
        ctx.moveTo(this.posX, this.posY)
        ctx.arc(this.posX, this.posY, this.radio, this.ap, this.af, false)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        // Rotate Text
        ctx.translate(this.txtX, this.txtY)
        ctx.rotate(this.textRotate)
        ctx.fillStyle = strokeColor
        ctx.font = "20px Arial";
        ctx.textAlign = 'start'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.text, 0, 0)
        ctx.rotate(-this.textRotate)
        ctx.translate(-this.txtX, -this.txtY)
    }
}

const drawRoullette = (arr) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(arr.length === 0){
        return
    }
    // Set parts with atribute 
    canvas.setAttribute('parts', arr.length)
    // Set pos X, Y and radio 
    var posX = canvas.width / 2;
    var posY = canvas.height / 2;
    var radio = posX - strokeSize;
    const parts = arr.length
    const radPart = (Math.PI * 2) / parts
    // Custom properties
    for(let i = 0; i < parts; i++){
        let frag = new Fragment(posX, posY, radio, radPart * i, radPart * (i + 1), colors[i % colors.length], arr[i])
        frag.draw(context)
    }
}

const randomSpin = (min, max) => {
    const range = max - min
    const number = Math.random() * range
    return number + min
}


let actualRad = 0

function spin () {
    const roullette = document.getElementById('canvas')
    actualRad = actualRad <= 100 ? randomSpin(100, 150) : randomSpin(0, 50)
    const style = `transform: rotate(${actualRad}rad);` + animationSpin
    roullette.setAttribute('style', style)
    printResult(actualRad, parseInt(roullette.getAttribute('parts')))
}

function printResult (rad, parts){
    const radsPart = (Math.PI * 2) / parts
    const result = Math.floor((rad % (Math.PI * 2)) / radsPart)
    console.log(`${parts - result} / ${rad}`)
}