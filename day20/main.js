const btn = document.getElementById('effect');
const replicas = 3;
const delaylaps = 200;
const timelaps = 1000 + ((replicas - 1) * delaylaps); // 500 miliseconds or 0.5s

const setFree = (group) => {
    const spanEffect = document.querySelectorAll('.effect')
    spanEffect.forEach( span => {
        if(span.getAttribute('group') == group ){
            span.remove()
        }
    })
}

let currentGroup = 0

btn.addEventListener('click', (e) => {
    const groupID = currentGroup;
    currentGroup++
    // Position (x,y) cursor
    const posX = e.clientX;
    const posY = e.clientY;
    // Offset position Button Element 
    const offsetY = e.target.offsetTop;
    const offsetX = e.target.offsetLeft;
    // Calc origin pos of effect
    const effectPosX = posX - offsetX;
    const effectPosY = posY - offsetY;
    // Create span element of effect
    const fragmenReplicas = document.createDocumentFragment()
    for(let i = 0; i < replicas; i++){
        const effectElement = document.createElement('span');
        effectElement.classList.add('effect');
        effectElement.style.top = effectPosY + 'px';
        effectElement.style.left = effectPosX + 'px';
        effectElement.style.animationDelay = `${i * delaylaps}ms`;
        effectElement.setAttribute('group', `${groupID}`)
        fragmenReplicas.appendChild(effectElement);
    }
    // Append element of button 
    btn.appendChild(fragmenReplicas);
    // Set timeout of colddown
    setTimeout(() => setFree(groupID) , timelaps);
})