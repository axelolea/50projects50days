const interactiveSection = document.getElementById('cups-sec')
const litersDefault = 2000 //mililiters
const totalCupsDefault = 8

createCups(litersDefault, totalCupsDefault)

function createCups (liters, cups) {
    const ml = liters / cups
    for(let i = 0; i < cups; i++){
        const cup = document.createElement('div')
        cup.classList.add('cup', 'small-cup')
        cup.innerText = `${ml}`
        cup.setAttribute('capacity', `${ml}`)
        cup.addEventListener('click', () => highlightCups(i))
        interactiveSection.appendChild(cup)
    }
}

function highlightCups (idx) {
    const smallCups = document.querySelectorAll('small-cups')
    smallCups.forEach((cup, idCup))
    console.log(id)
}

function updateBigCup(){

}