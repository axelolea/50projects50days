const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currentActivite = 1;

next.addEventListener('click', () => {

    currentActivite = (currentActivite >= circles.length) ? circles.length : currentActivite + 1;
    update();

});

prev.addEventListener('click', () => {

    currentActivite = currentActivite <= 1 ? circles.length : currentActivite - 1;
    update();
});

const update = () => {
    circles.forEach((circle, i) => {
        if ( i < currentActivite ){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    var activeCirclesPorcent = document.querySelectorAll('.active')
    progress.style.width = ((activeCirclesPorcent.length - 1) / (circles.length - 1)) * 100 + '%';

    if( currentActivite === 1){
        prev.disabled = true
    }
    else if ( currentActivite === circles.length ){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}


