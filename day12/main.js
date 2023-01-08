const btns = document.querySelectorAll('.faq-btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('.bi')
        console.log(icon)
        if (icon.classList.contains('bi-x')){
            icon.classList.remove('bi-x')
            icon.classList.add('bi-caret-down-fill')
        }
        else{
            icon.classList.add('bi-x')
            icon.classList.remove('bi-caret-down-fill')
        }
        btn.parentNode.classList.toggle('active')
    })
})