const counters = document.querySelectorAll('.count-number')

const updateCounter = (count) => {
    const target = count.getAttribute('data-target')
    const timeInterval = 10
    const maxIterations = 310
    var value = 0
    const setValue = () => {
        if(value > maxIterations){
            clearInterval(interval);
            count.innerText = target
            return
        }
        const valueFunc = ((Math.sin((value * 0.01) - (Math.PI / 2)) + 1) / 2) * target
        count.innerText = `${Math.ceil(valueFunc)}`
        value++
    }
    const interval = setInterval(setValue, timeInterval)
}


counters.forEach(count => {
    count.innerText = '0'
    updateCounter(count)
})