const apiUrl = 'https://api.jikan.moe/v4'
const defaultUrl = '/seasons/now'
const searchUrl = '/anime'

const maxLenghtSynopsis = 400

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial animes
getAnimes(apiUrl + defaultUrl)

async function getAnimes(url) {
    const res = await fetch(url)
    const data = await res.json()
    showAnimes(data.data)
}

async function getDataSearch(search){
    // const parameters = {
    //     q: `${search}`,
    // };
    // const options = {
    //     method: 'GET',
    //     body: JSON.stringify(parameters),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // }
    // const res = await fetch(apiUrl + searchUrl, parameters)

    const res = await fetch(apiUrl + searchUrl + '?order_by=popularity&q=' + search)
    const data = await res.json()
    showAnimes(data.data)
}


function showAnimes(animes) {
    main.innerHTML = ''
    animes.forEach( anime => {
        const { images, episodes, mal_id, score, title, synopsis, airing} = anime
        const animeCard = document.createElement('div')
        const color = getClassByScore(score)
        animeCard.classList.add('anime')
        animeCard.innerHTML = `
            <div class="card-anime">
                <img src="${images['jpg']['image_url']}" alt="${title}" class="img-card">
                ${color ? `<span class="score" style="background-color: var(--${color})">${score}</span>` : ``}
                ${ airing ? '<span class="airing">Airing</span>' : ''}
            </div>
            <h2 class="main-title">${title}</h2>
            <div class="synopsis">
                <h3>${title}</h3>
                <div class="badges">
                    <h4>Episodes: ${episodes ? episodes : '???'}</h4>
                    <h4>
                        ${score ? score : '???'} <i class="bi bi-star-fill"></i>
                    </h4>
                </div>
                <p>${synopsis.length >= maxLenghtSynopsis ? synopsis.substr(0, maxLenghtSynopsis) + '...' : synopsis}</p>
                <a href="https://myanimelist.net/anime/${mal_id}">
                    <button class="btn">More Info</button>
                </a>
            </div>
        `
        main.appendChild(animeCard)
    })
}


function getClassByScore(score){
    if(score >= 9) {
        return 'green'
    } else if(score >= 8) {
        return 'lime'
    } else if(score >= 7) {
        return 'yellow'
    } else if(score >= 6) {
        return 'orange'
    } else if(score >= 4) {
        return 'red'
    } else if(score > 0){
        return 'omgf'
    }
    else{
        return false
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm && searchTerm !== '') {
        getDataSearch(searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})