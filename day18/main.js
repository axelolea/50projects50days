const imagesContainer = document.getElementById('images-container')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const bgBody = document.getElementById('bg')

const images = [
    {
        'url': 'https://cdn.apartmenttherapy.info/image/upload/v1620923497/at/art/design/2021-02/Greendigs-plants/zoom%20backgrounds/zoombackground-2.jpg',
        'alt': 'undefinded'
    },
    {
        'url': 'https://img.freepik.com/free-vector/colorful-summer-background-zoom_23-2148582985.jpg?w=740&t=st=1673603118~exp=1673603718~hmac=2cd1ddc14dffe0cc2ea5edd3520ec01aed6c5aa5c9206206fb7f13a93d9b5389',
        'alt': 'undefinded'
    },
    {
        'url': 'https://img.freepik.com/free-vector/colorful-summer-background-zoom_52683-41719.jpg?w=2000',
        'alt': 'undefinded'
    },
    {
        'url': 'https://img.freepik.com/premium-vector/summer-background-zoom-theme_23-2148604734.jpg',
        'alt': 'undefinded'
    },
    {
        'url': 'https://img.freepik.com/free-vector/colorful-summer-background-zoom_52683-40951.jpg?w=2000',
        'alt': 'undefinded'
    },
]

let current = 0

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

const classImg = 'images-bg'

function createImages(){
    const imgFragment = document.createDocumentFragment()

    images.forEach( (img, id) => {
        const imgElement = document.createElement('img')
        setAttributes(imgElement, {
            'class': classImg,
            'id': id,
            'src': img['url'],
            'alt': img['alt'],
        })
        imgFragment.appendChild(imgElement)
    })
    bgBody.setAttribute('src', images[current].url)
    imagesContainer.appendChild(imgFragment)
    return imgFragment
}

createImages()

const imagesFragment = document.querySelectorAll(`.${ classImg }`)

const centerClass = 'center'
const rightClass = 'rigth'
const leftClass = 'left'
const hiddenClass = 'hidden'

function evaluatePosition(pos){
    const finalPos = imagesFragment.length - 1
    if(pos > finalPos){
        pos = 0
    }
    else if(pos < 0){
        pos = finalPos
    }
    return pos
}

function updateClass (id, className){
    const updateImg = document.getElementById(id)
    updateImg.classList.add(className)
}

function updateBodyBG(id){
    bgBody.setAttribute('src', images[id].url)
}

function updatePosition (){
    current = evaluatePosition(current)
    let leftCurrent = evaluatePosition(current - 1)
    let rightCurrent = evaluatePosition(current + 1)
    imagesFragment.forEach(img => {
        img.classList.remove(centerClass, rightClass, leftClass, hiddenClass)
        if(img.id == current){
            updateClass(img.id, centerClass)
            updateBodyBG(current)
        }
        else if (img.id == leftCurrent){
            updateClass(img.id, leftClass)
        }
        else if (img.id == rightCurrent){
            updateClass(img.id, rightClass)
        }
        else{
            updateClass(img.id, hiddenClass)
        }
    })
}

updatePosition()

rightBtn.addEventListener('click', () => {
  current++
  updatePosition()
})

leftBtn.addEventListener('click', () => {
  current--
  updatePosition()
})