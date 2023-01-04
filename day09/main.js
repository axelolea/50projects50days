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

const buttons = 4 * 4 //Number of buttons (Col * Row)

const launchpadColors = [   red,      blue,      green,     purple,
                            purple,   red,       blue,      green,
                            green,    purple,    red,       blue,
                            blue,     green,     purple,    red]

const launchpadKeys = [ '1', '2', '3', '4',
                        'q', 'w', 'e', 'r',
                        'a', 's', 'd', 'f',
                        'z', 'x', 'c', 'v']
const sounds = []

const containerSounds = document.getElementById('container-sounds')
const launchpadGrid = document.getElementById('launchpad-grid')


// Create Sounds in SoundsContianer

const createSound = (key) => {
    const sound = document.createElement("audio");
    sound.setAttribute('id', `sound-${key}`)
    // Original Line Code
    // sound.setAttribute('src', `./sounds/${key}.mp3`)
    sound.setAttribute('src', `./dross.mp3`)
    containerSounds.appendChild(sound)
}

// Actived Sound Function

const activeSound = (key) => {
    document.getElementById(`sound-${key}`).play()
}

const stopSound = (key) => {
    const sound = document.getElementById(`sound-${key}`)
    sound.pause()
    sound.currentTime = 0;
}

// Create Button

const createBtn = (color, key) => {
    const btn = document.createElement("button");
    const keyElement = document.createElement("p");
    createSound(key)
    keyElement.innerText = key.toUpperCase();
    btn.appendChild(keyElement);
    btn.classList.add('light-btn');
    btn.onmousedown = () => { activeSound(key) }
    btn.onmouseup = () => { stopSound(key) }
    btn.setAttribute('id', `${key}`)
    btn.setAttribute('style', `--c:${color}`)
    btn.addEventListener('soundPlay', () => {
    })
    return btn;
}

for (var i = 0; i < buttons; i++) {
    launchpadGrid.appendChild(createBtn(launchpadColors[i], launchpadKeys[i]));
}


// Event Key Listeners
// Activate Sounds for key pressed

document.addEventListener('keydown', e => {
    if (launchpadKeys.includes(e.key) ) {
        const btn = document.getElementById(e.key)
        btn.classList.add('active')
        activeSound(e.key)
    }
});

// Stop Sounds for key pressed
document.addEventListener('keyup', e => {
    if (launchpadKeys.includes(e.key) ) {
        const btn = document.getElementById(e.key)
        btn.classList.remove('active')
        stopSound(e.key)
    }
});