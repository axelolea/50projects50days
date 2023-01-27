const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

const segmentsContent = [
    {
        "background": "https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg",
        "title": "Generic Text 1",
        "text": "",
        "color": "#736454",
    },
    {
        "background": "http://store-images.s-microsoft.com/image/apps.26620.13682773009232620.62a18cea-40b3-43f1-811b-46ef9d15331b.96a2c700-d04f-4128-b94c-596de2c4cc83",
        "title": "Generic Text 2",
        "text": "",
        "color": "#7d8079",
    },
    {
        "background": "https://coolwallpapers.me/th700/5217218-road-tree-perspective-road-trip-forest-woodland-leaf-leaves-mist-fog-outdoors-nature-question-dark-foggy-nobody-silence-path-unknown-wallpaper-png-images.jpg",
        "title": "Generic Text 3",
        "text": "",
        "color": "#3c3c38",
    },
    {
        "background": "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000",
        "title": "Generic Text 4",
        "text": "",
        "color": "#cea372",
    },
    {
        "background": "https://c4.wallpaperflare.com/wallpaper/48/545/106/nature-background-pictures-hd-1920x1200-wallpaper-preview.jpg",
        "title": "Generic Text 5",
        "text": "",
        "color": "#399096",
    },
]

const slidesLength = segmentsContent.length

const createSegments = () => {
    segmentsContent.forEach(seg => {
        const rightSeg = document.createElement('div')
        rightSeg.style.backgroundImage = `url('${seg.background}')`
        
        slideRight.append(rightSeg)
    })
    segmentsContent.reverse().forEach(seg => {
        const leftSeg = document.createElement('div')
    
        leftSeg.style.backgroundColor = seg.color
        leftSeg.innerHTML = `
            <h1>${seg.title}</h1>
            <p>${seg.title}</p>
        `
        slideLeft.append(leftSeg)
    })
}

createSegments()

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// Move items 

let currentPos = 0

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        currentPos++
        if(currentPos > slidesLength - 1) {
            currentPos = 0
        }
    } else if(direction === 'down') {
        currentPos--
        if(currentPos < 0) {
            currentPos = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${currentPos * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${currentPos * sliderHeight}px)`
}

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))