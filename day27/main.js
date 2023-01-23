const toastContainer = document.getElementById('toast-container')
const buttonsContainer = document.getElementById('buttons-container')
const apiUrl = 'https://api.quotable.io/random?minLength=5&maxLength=35'
const timelapse = 3500
const timedelay = 500

const types = {

    "error": {
        "nameIcon": "Error",
        "icon": "bi-x-circle-fill",
        "color-light": "#ffd5d5",
        "color-dark": "#360000",
    },
    "success": {
        "nameIcon": "Success",
        "icon": "bi-check-circle-fill",
        "color-light": "#d5ffdb",
        "color-dark": "#003607",
    },
    "warning": {
        "nameIcon": "Warning",
        "icon": "bi-exclamation-circle-fill",
        "color-light": "#fffed5",
        "color-dark": "#323600",
    },
    "info": {
        "nameIcon": "Info",
        "icon": "bi-info-circle-fill",
        "color-light": "#d5f3ff",
        "color-dark": "#002736",
    }
}

async function generateText() {
    const resp = await fetch(apiUrl)
    const data = await resp.json()
    return data.content
}

const createNotification = (type, text) => {
    const notification = document.createElement('div')
    const textNotifi = document.createElement('p')
    const iconType = document.createElement('i')
    const iconClose = document.createElement('i')
    const btn = document.createElement('button')
    notification.classList.add('notification', 'active')
    notification.style.backgroundColor = types[type]['color-light']
    notification.style.color = types[type]['color-dark']
    btn.classList.add('close-btn')
    btn.append(iconClose)
    btn.addEventListener('click', () => {
        notification.classList.remove('active')
        setTimeout(() => {
            notification.remove()
        }, timedelay)
    })
    iconType.classList.add('bi', types[type]['icon'])
    iconClose.classList.add('bi', 'bi-x')
    textNotifi.innerText = `${types[type].nameIcon}: ${text}`
    notification.append(iconType, textNotifi, btn)
    return notification
}

Object.keys(types).forEach( key => {
    const btn = document.createElement('button')
    btn.id = key
    btn.classList.add('btn')
    btn.innerText = types[key].nameIcon
    btn.addEventListener('click', () => generateNotification(key))
    buttonsContainer.append(btn)
})

async function generateNotification(key){
    const textContent = await generateText()
    const item = createNotification(key, textContent)
    toastContainer.append(item)
    setTimeout(() => {
        item.classList.remove('active')
    }, timelapse)
    setTimeout(() => {
        item.remove()
    }, timelapse + timedelay)
}