const key = document.getElementById('key')
const keyContainer = document.getElementById('keyContainer') 
const codes = document.querySelectorAll('.code')

window.addEventListener('keydown', (e) => {
    keyContainer.classList.add('pressed')
    key.innerText = e.key
    codes[0].innerText = `event.key: ${e.key}`
    codes[1].innerText = `event.keyCode: ${e.keyCode}`
    codes[2].innerText = `event.code: ${e.code}`
})

window.addEventListener('keyup', (e) => {
    keyContainer.classList.remove('pressed')
})