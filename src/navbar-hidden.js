const minTop = 70
let actualTop = 0

const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    if(scrollTop < actualTop || scrollTop < minTop)
    {
        navbar.classList.remove('hidden')
    }
    else
    {
        navbar.classList.add('hidden')
    }
    actualTop = scrollTop
})