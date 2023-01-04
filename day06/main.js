// Main Code Day

const boxes = document.querySelectorAll('.content-box')
const activedArea = 7/10

window.addEventListener('scroll', () => {
    const triggerBotton = window.innerHeight * activedArea
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top
        if(triggerBotton > boxTop) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
})