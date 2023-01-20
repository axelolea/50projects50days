const navbar = document.getElementById('navbar')
const topOffset = 200
const classSticky = 'sticky'

window.addEventListener('scroll',() =>  (window.scrollY > navbar.offsetHeight + topOffset)
                                        ? navbar.classList.add(classSticky)
                                        : navbar.classList.remove(classSticky)
)