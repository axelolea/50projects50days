const leftSlide = document.getElementById('left-container')
const rightSlide = document.getElementById('right-container')

const buttonUp = document.getElementById('up')
const buttonDown = document.getElementById('down')

const leftSlideClass = 'left-slide'
const rightSlideClass = 'right-slide'
const imgSlideClass = 'image-slide'
const titleSlideClass = 'title-slide'

const segmentsContent = [
    {
        "background": "https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg",
        "text": "Generic Text 1",
        "color": "",
    },
    {
        "background": "http://store-images.s-microsoft.com/image/apps.26620.13682773009232620.62a18cea-40b3-43f1-811b-46ef9d15331b.96a2c700-d04f-4128-b94c-596de2c4cc83",
        "text": "Generic Text 2",
        "color": "",
    },
    {
        "background": "https://coolwallpapers.me/th700/5217218-road-tree-perspective-road-trip-forest-woodland-leaf-leaves-mist-fog-outdoors-nature-question-dark-foggy-nobody-silence-path-unknown-wallpaper-png-images.jpg",
        "text": "Generic Text 3",
        "color": "",
    },
    {
        "background": "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000",
        "text": "Generic Text 4",
        "color": "",
    },
    {
        "background": "https://c4.wallpaperflare.com/wallpaper/48/545/106/nature-background-pictures-hd-1920x1200-wallpaper-preview.jpg",
        "text": "Generic Text 5",
        "color": "",
    },
]


function createSegment(data, containerLeft, containerRight)
{   
    const fragmentLeft = document.createDocumentFragment()
    const fragmentRight = document.createDocumentFragment()
    data.forEach(seg => {
        const segmentLeftDiv = document.createElement('div')
        const segmentRightDiv = document.createElement('div')
        
        const title = document.createElement('h2')

        title.classList.add(titleSlideClass)
        title.innerText = seg.text

        segmentLeftDiv.classList.add(leftSlideClass)
        segmentLeftDiv.style.backgroundColor = seg.color
        segmentLeftDiv.append(title)
        fragmentLeft.append(segmentLeftDiv)

        const img = document.createElement('img')

        img.classList.add(imgSlideClass)
        img.src = seg.background

        segmentRightDiv.classList.add(rightSlideClass)
        segmentRightDiv.append(img)
        fragmentRight.append(segmentRightDiv)
    });

    containerRight.append(fragmentRight)
    containerLeft.append(fragmentLeft)
}

createSegment(segmentsContent, leftSlide, rightSlide)

let currentPos = 0

const leftSegments = document.querySelectorAll(`.${leftSlideClass}`)
const rightSegments = document.querySelectorAll(`.${rightSlideClass}`)

const changePos = (current) => {
    leftSlide.style.transform = `translateY(${current * 100}%)`
    rightSlide.style.transform = `translateY(-${current * 100}%)`
}

buttonUp.addEventListener('click', () => {
    currentPos++
    if(currentPos > (segmentsContent.length - 1)){
        currentPos = 0
    }
    changePos(currentPos)
})

buttonDown.addEventListener('click', () => {
    currentPos--
    if(currentPos < 0){
        currentPos = (segmentsContent.length - 1)
    }
    changePos(currentPos)
})
