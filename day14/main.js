const btn = document.getElementById('navbar-button')
const navbar = document.getElementById('navbar')
const icons = document.querySelectorAll('.bi')
btn.addEventListener('click', () => {
    btn.firstElementChild.classList.toggle('active')
    navbar.classList.toggle('active')
})

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        const text = document.querySelector(`.${icon.id}`)
        text.classList.add('active')
    })
    icon.addEventListener('mouseout', () => {
        const text = document.querySelector(`.${icon.id}`)
        text.classList.remove('active')
    })
})