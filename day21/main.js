const desktop = document.getElementById('desktop')

const column = 8
const row = 4
const iconsData = [{
                        "x": 0,
                        "y": 0,
                        "text": "Firefox",
                        "url": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/firefox-browser-icon.png",
                    },
                    {
                        "x": 0,
                        "y": 1,
                        "text": "Terminal",
                        "url": "https://149366088.v2.pressablecdn.com/wp-content/uploads/2016/09/terminal-icon.png",
                    },
                    {
                        "x": 1,
                        "y": 0,
                        "text": "Home",
                        "url": "https://149366088.v2.pressablecdn.com/wp-content/uploads/2019/01/brown-folder-icon-png.png",
                    },
                    {
                        "x": 0,
                        "y": 2,
                        "text": "gato_elegante.jpeg",
                        "url": "https://images7.memedroid.com/images/UPLOADED613/5f7e221925fea.jpeg",
                    }]
let activeIcon;

function createGridDesktop (desk){
    const rowFragment = document.createDocumentFragment()
    for(let i = 0; i < row; i++){
        const columnFragment = document.createDocumentFragment()
        for(let j = 0; j < column; j++){
            const box = document.createElement('div')
            box.classList.add('box')
            box.setAttribute('pos',`${j}-${i}`)
            columnFragment.appendChild(box)
        }
        rowFragment.append(columnFragment)
    }
    desk.append(rowFragment)
}

function inyectIcon (posX, posY, url, text){
    const icon = document.createElement('div')
    const img = document.createElement('img')
    const textIcon = document.createElement('span')
    const boxInyect = document.querySelector(`[pos="${posX}-${posY}"]`)
    img.setAttribute('src', url)
    textIcon.innerText = text
    icon.classList.add('icon')
    icon.setAttribute('draggable', 'true')
    icon.append(img, textIcon)
    boxInyect.appendChild(icon)
}

function createIcons (data){
    data.forEach(icon => inyectIcon(icon['x'], icon['y'], icon['url'], icon['text']))
}

createGridDesktop(desktop)
createIcons(iconsData)

const boxes = document.querySelectorAll('.box')
const icons = document.querySelectorAll('.icon')

icons.forEach(icon => {
    icon.addEventListener('dragstart', dragStart)
    icon.addEventListener('dragend', dragEnd)
})

boxes.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
})

function dragStart() {
    activeIcon = this
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'icon'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    if(e.target.classList.contains('box')){
        this.className += ' hovered'
    }
}

function dragLeave() {
    this.className = 'box'
}

function dragDrop(e) {
    if(e.target.classList.contains('box')){
        this.className = 'box'
        this.append(activeIcon)
    }
}

