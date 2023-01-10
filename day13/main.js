const box = document.getElementById('box')
const textArea = document.getElementById('choices')

textArea.addEventListener('input', (e) => {
    updateChoices(e.target.value)
})

function updateChoices(value) {
    box.innerHTML = ''
    const split = value.split('\n')
    const choices = document.createElement('div')
    choices.classList.add('choices')
    split.forEach(choice => {
        if(choice !== ''){
            const span = document.createElement('span')
            span.classList.add('badge')
            span.innerText = choice
            choices.appendChild(span)
        }
    });
    box.append(choices)
}

function randomSelect() {
    if(document.querySelector('.active')){
        unactiveBadge(document.querySelector('.active'))
    }
    const times = 30
    const timeInterval = 100
    const interval = setInterval(() => {
        const randomBange = selectChoice()
	
	if (randomBange !== undefined) {
        activeBadge(randomBange)

        setTimeout(() => {
            unactiveBadge(randomBange)
        }, timeInterval)
	}
    }, timeInterval);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomBange = selectChoice()

            activeBadge(randomBange)
        }, timeInterval)

    }, times * timeInterval)
}

const selectChoice = () => {
    const badges = document.querySelectorAll('.badge')
    return badges[Math.floor(Math.random() * badges.length)]
}

const activeBadge = ( badge ) => {
    badge.classList.add('active')
}

const unactiveBadge = ( badge ) => {
    badge.classList.remove('active')
}