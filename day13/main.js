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
const strokeColor = '#9b9b9b'
const strokeSize = 4

const animationSpin =  "transition-duration: 10s; transition-timing-function: cubic-bezier(0.6, 0, 0, 1);"

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
var ctx = canvas.getContext("2d");

const drawRoullette = (arr) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(arr.length === 0){
        return
    }
    // Set parts with atribute 
    canvas.setAttribute('parts', arr.length)
    // Set pos X, Y and radio 
    var X = canvas.width / 2;
    var Y = canvas.height / 2;
    var R = X - strokeSize;
    const parts = arr.length
    const radPart = (Math.PI * 2) / parts
    // Custom properties
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeSize;
    for(let i = 0; i < parts; i++){
        ctx.fillStyle = colors[(i % colors.length)];
        var ap = radPart * i;
        var af = radPart * (i + 1);
        var Xap = X + (R * Math.cos(ap));
        var Yap = Y + (R * Math.sin(ap));
        var Xap = X + (R * Math.cos(ap));
        var Yap = Y + (R * Math.sin(ap));
        ctx.beginPath();
        ctx.moveTo(X,Y);
        ctx.lineTo(Xap,Yap);
        ctx.arc(X,Y,R,ap,af);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        var amid = ((af - ap) / 2) + ap
        var Xtxt = X + ((R * 0.8) * Math.cos(amid))
        var Ytxt = Y + ((R * 0.8) * Math.sin(amid))
        ctx.moveTo(X,Y)
        ctx.font = "40px Georgia";
        ctx.textAlign = 'center'
        ctx.textBaseline = 'center'
        ctx.fillStyle = strokeColor;
        ctx.fillText(`${arr[i]}`, Xtxt, Ytxt + (strokeSize * 2))
        // Fix rotate text coming soon
    }
}

const randomSpin = (min, max) => {
    const range = max - min
    const number = Math.random() * range
    return number + min
}

function spin () {
    const roullette = document.getElementById('canvas')
    const rotateRad = randomSpin(100, 200)
    console.log(rotateRad)
    const parts = parseInt(roullette.getAttribute('parts'))
    const radsPart = (Math.PI * 2) / parts
    const result = Math.floor((rotateRad % (Math.PI * 2)) / radsPart)
    console.log(`${parts - result}`)
    const style = `transform: rotate(${rotateRad}rad);` + animationSpin
    roullette.setAttribute('style', style)
}