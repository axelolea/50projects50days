const topSlide = document.getElementById('top-slide')
const bottomSlide = document.getElementById('bottom-slide')

const buttonUp = document.getElementById('up')
const buttonDown = document.getElementById('down')

const leftSlideClass = 'left-slide'
const rightSlideClass = 'right-slide'
const imgSlideClass = 'image-slide'
const titleSlideClass = 'tilte-slide'

const segmentsContent = [
    {
        "background": "",
        "text": "",
        "color": "",
    },
    {
        "background": "",
        "text": "",
        "color": "",
    },
    {
        "background": "",
        "text": "",
        "color": "",
    },
    {
        "background": "",
        "text": "",
        "color": "",
    },
    {
        "background": "",
        "text": "",
        "color": "",
    },
]


function createSegment(data, containerLeft, containerRight)
{   
    const fragmentLeft = document.createDocumentFragment()
    data.forEach(seg => {
        const segmentDiv = document.createElement('div')
        const title = document.createElement('h2')
        title.classList.add(titleSlideClass)
        title.innerText = seg.text
        segmentDiv.classList.add(leftSlideClass)
        segmentDiv.style.backgroundColor = seg.color
        segmentDiv.append(title)
        fragmentLeft.append(segmentDiv)
    });
    containerLeft.append(fragmentLeft)
    
    const fragmentRight = document.createDocumentFragment()
    data.reverse()
    data.forEach(seg => {
        const segmentDiv = document.createElement('div')
        const img = document.createElement('img')
        img.classList.add(imgSlideClass)
        img.src = seg.background
        segmentDiv.classList.add(rightSlideClass)
        segmentDiv.append(img)
        fragmentRight.append(segmentDiv)
    });

    containerRight.append(fragmentRight)
}



createSegment(segmentsContent, topSlide, bottomSlide)

buttonUp.addEventListener('click', () => {

})

buttonDown.addEventListener('click', () => {

})