const image = document.getElementById('image')
const likesContent = document.getElementById('count-likes')
const like = document.getElementById('like')
const maxLikes = 1000

let likes = Math.floor(Math.random() * maxLikes)

const fillHeart = (flag) => {
    if(flag){
        like.classList.add('bi-heart-fill', 'active')
        like.classList.remove('bi-heart')
    }
    else{
        like.classList.add('bi-heart')
        like.classList.remove('bi-heart-fill', 'active')
    }
}

const addLikes = count => {
    likesContent.innerText = `${count}`
}

const createHeart = () => {
    const icon = document.createElement('i')
    icon.classList.add('bi', 'bi-heart-fill')
    return icon
}

image.addEventListener('dblclick', () => {
    const heart = createHeart()
    addLikes(likes + 1)
    image.appendChild(heart)
    heart.classList.add('active')
    fillHeart(true)
    setTimeout(() => {
        heart.remove()
    }, 2000)
})

like.addEventListener('click', () => {
    if(like.classList.contains('active')){
        fillHeart(false)
        addLikes(likes)
    }
    else{
        fillHeart(true)
        addLikes(likes + 1)
    }
})

addLikes(likes)