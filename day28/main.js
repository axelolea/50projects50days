const urlGithub = 'https://api.github.com/users/'

const inputSearch = document.getElementById('search')
const form = document.getElementById('form-search')
const profileCard = document.getElementById('card-container')

async function searchUser (username)
{
    try
    {
        const resp = await fetch(urlGithub + username)
        const data = await resp.json()
        console.log(data.message != 'Not Found')
        notFounded()
        if(data.message != 'Not Found'){
            createUserCard(data)
        }
        else{
        }
    }
    catch(err) {
        console.log(err)
        if(err.response.status == 404) {
            notFounded()
        }
    }
}

const notFounded = () => {
    const text = document.createElement('h2')
    text.classList.add('sample-text')
    text.innerText = 'Not Founded'
    profileCard.innerText = ''
    profileCard.append(text)
}

const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const createBtn = (network, url) => {
    return (`
        <a href='${url}'>
        <button class='btn ${network}'>
            ${capitalizeFirstLetter(network)}
            <i class="bi bi-${network}"></i>
        </button>
        </a>
    `)
}

function createUserCard ({  avatar_url,
                            bio,
                            followers,
                            following,
                            login,
                            name,
                            twitter_username,
                            public_repos })
{
    const userBio = bio ? `<p class='bio'>${bio}</p>` : ''
    const nameProfile = name ? `<h1 class='name'>${name}</h1>` : ''
    const usernameProfile = login ? `<h2 class='username'>@${login}</h2>` : ''
    profileCard.innerHTML = `
        <div class='card'>
            <div class='bg'>
            </div>
            <img class='avatar-img' src='${avatar_url}' />
            ${nameProfile}
            ${usernameProfile}
            ${userBio}
            <div class='info-container'>
                <div class='count'>
                    <p class='count-title'>Followers</p>
                    <p class='count-number'>${followers}</p>
                </div>
                <div class='count'>
                    <p class='count-title'>Following</p>
                    <p class='count-number'>${following}</p>
                </div>
                <div class='count'>
                    <p class='count-title'>Public Repo</p>
                    <p class='count-number'>${public_repos}</p>
                </div>
            </div>
            <div class='buttons'>
                ${createBtn('github', `https://github.com/${login}`)}
                ${twitter_username
                    ? createBtn('twitter', `https://twitter.com/${twitter_username}`)
                    : ''}
            </div>
        </div>
    `
}


form.addEventListener('submit', e => {
    e.preventDefault()
    const user = inputSearch.value
    if(user){
        searchUser(user)
        inputSearch.value = ''
    }
})
