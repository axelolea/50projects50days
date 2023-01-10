const btn = document.getElementById('navbar-button')
const navbar = document.getElementById('navbar')

btn.addEventListener('click', () => {
    btn.firstElementChild.classList.toggle('active')
    navbar.classList.toggle('active')
})

