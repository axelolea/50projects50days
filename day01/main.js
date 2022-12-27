const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active') == true) {
            console.log(card.classList)
            removeActiveClasses()
        }
        else{
            removeActiveClasses()
            card.classList.add('active')
        }
    })
})

function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}