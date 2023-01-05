const jokes = document.querySelectorAll('.joke')
const jokeBtn = document.getElementById('jokeBtn')

const apiUrl = 'https://icanhazdadjoke.com'

// USING ASYNC/AWAIT
async function generateJoke() {
  const headers = {
    headers: {
      Accept: 'application/json',
    },
  }
  const response = await fetch(apiUrl, headers)
  const data = await response.json()
  return data['joke']
}

function changeStates(pos1, pos2, pos3) {
  jokes[0].setAttribute('jokePosition', pos1);
  jokes[1].setAttribute('jokePosition', pos2);
  jokes[2].setAttribute('jokePosition', pos3);
}

function changeColor() {
  const color = Math.floor(Math.random() * 360);
  document.body.style.setProperty('background-color', `hsl(${color}, 100%, 95%)`);
  document.querySelector('.btn').style.setProperty('background-color', `hsl(${color}, 100%, 85%)`);
}

async function inizialize() {
  jokeBtn.addEventListener('click', changeJoke);
  for await (const joke of jokes) {
    joke.innerText = await generateJoke()
  } 
  changeStates('center', 'right', 'left')
}

async function changeJoke (){

  const current = document.querySelector('[jokePosition="center"]').getAttribute('id')
  if(current == 1){
    changeStates('left', 'center', 'right')
    jokes[2].innerText = await generateJoke()
  }
  else if(current == 2){
    changeStates('right', 'left', 'center')
    jokes[0].innerText = await generateJoke()
  }
  else{
    changeStates('center', 'right', 'left')
    jokes[1].innerText = await generateJoke()
  }
  changeColor()
}

// Que malisimo me esta quedando esto

inizialize()