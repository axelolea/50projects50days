const numbers = 5
const timelaps = 1000
const numbersContainer = document.getElementById('numbers-container')
const animations = [
    'zoom-in',
    'zoom-out',
    'slice-top',
    'slice-bottom',
    'rotate-left',
    'rotate-right',
]

const createSecuence = arr => {
    if(arr.isArray) return false
    const sequence = arr.reduce((acc ,id) => {
        if (!animations[id]) return acc 
        return [...acc, animations[id]]
    }, [])
    return sequence
}

const createSpan = () => document.createElement('span')

const deleteSpan = span => span.remove

function animationStart (num, sequence)
{   
    animations.forEach( animation => {

    })
}

const sequenceArr = [5,4,3,2,1,0]

const sequenceAnimations = createSecuence(sequenceArr)

animationStart(numbers, sequenceAnimations)