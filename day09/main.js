// Colors

const red = '0'
const blue = '179'
const green = '118'
const purple = '308'

// // Grid Colors
// Other Pattern Colors
// const launchpadColors = [   red,      red,      red,      red,
//                             blue,     blue,     blue,     blue,
//                             green,    green,    green,    green,
//                             purple,   purple,   purple,   purple]

const launchpadColors = [   red,      blue,      green,     purple,
                            purple,   red,       blue,      green,
                            green,    purple,    red,       blue,
                            blue,     green,     purple,    red]

const launchpadKeys = [ '1', '2', '3', '4',
                        'q', 'w', 'e', 'r',
                        'a', 's', 'd', 'f',
                        'z', 'x', 'c', 'v']

const launchpadGrid = document.getElementById('launchpad-grid')

const createBtn = (color) => {
    const btn = document.createElement("div");
    btn.classList.add('light-btn')
    btn.setAttribute('style', `--c:${color}`)
    return btn;
}

launchpadColors.forEach(color => {
    launchpadGrid.appendChild(createBtn(color))
})

