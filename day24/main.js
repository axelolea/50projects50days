const cardImage = document.getElementById('card-image')
const cardTitle = document.getElementById('card-title')
const cardContent = document.getElementById('card-content')
const cardProfileImage = document.getElementById('card-profile-image')
const cardUsername = document.getElementById('card-username')
const cardDatePost = document.getElementById('date-post')

const animateItems = document.querySelectorAll('.placeholder')

const timelaps = 1800 // 800 miliseconds or 0.8 seconds

const data = {
    'mainImage': {
        'src': 'https://media.4rgos.it/i/Argos/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero?maxW=768&qlt=75&fmt.jpeg.interlaced=true',
        'alt': 'Main Image Post'
    },
    'title': 'Name of Post',
    'content': `Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum libero aperiam eaque molestiae explicabo, perferendis sed modi non minus, maxime officia vero tempora, beatae quidem animi quod. Porro, minima!`,
    'profile': {
        'image': 'https://avatars.githubusercontent.com/u/61808676?s=400&u=802b28547252330b07034223e5f9a91b97f8b1c4&v=4',
        'name': 'Axel Olea',
        'date': 'Jan 19, 2023'
    }
}

function createImage (src, alt) {
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    return img
}

function empytItems (){
    animateItems.forEach( item => {
        item.innerText = ''
        item.classList.remove('text-placeholder', 'image-placeholder')
    })
}

function inyectData(data) {
    empytItems()
    cardProfileImage.append(createImage(data.profile.image, data.profile.name))
    cardImage.append(createImage(data.mainImage.src, data.title))
    cardTitle.innerText = data.title
    cardUsername.innerText = data.profile.name
    cardContent.innerText = data.content
    cardContent.innerText = data.content
    cardDatePost.innerText = data.profile.date
}

setTimeout( () => {
    inyectData(data)
}, timelaps)