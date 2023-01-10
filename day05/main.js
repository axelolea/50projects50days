// Main Code Day

const loadingText = document.querySelector('.loading-text')
const loadingContainer = document.querySelector('.loading-container')
const bg = document.querySelector('.bg')
const loadingSVG = document.getElementById('loading')

var int = setInterval(blurTransition, 50)
var x = 0
var loading = 0
var maxCircunference = 220
var minCircunference = 50

function blurTransition (){
    x++;
    loading = Math.floor((1.05 ** x) - 1);
    if(loading > 99){
        loading = 100
        loadingText.innerHTML = `${loading}%`
        clearInterval(int);
    };
    loadingContainer.style.opacity = scaleValue(loading, 0, 100, 1, 0)
    bg.style.filter = `blur(${scaleValue(loading, 0, 100, 20, 0)}px)`
    loadingSVG.style.strokeDashoffset = scaleValue(loading, 0,100, maxCircunference, minCircunference)
    loadingText.innerHTML = `${loading}%`
}


const scaleValue = (number, inputMin, inputMax, outputMin, outputMax) => {
    return (number - inputMin) * (outputMax - outputMin) /
    (inputMax - inputMin) + outputMin;
}