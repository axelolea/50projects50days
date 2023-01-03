// Get link to Isotype
const isotypeLink = document.getElementById('isotype-link');
const data = fetch("../main/src/days-info.json")
  .then((response) => {
      return response.json();
    })
    .then((data) => {
    console.log(data);
    isotypeLink.setAttribute('href', data['links']['main-link'])
  });

// Main Code Day

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const lengthTriangule = 912

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

    if ( currentActivite === 1 ){
        progress.style.strokeDashoffset = lengthTriangule;
    }
    else if ( currentActivite === 2 ){
        progress.style.strokeDashoffset = lengthTriangule * 0.66;
    }
    else if ( currentActivite === 3 ){
        progress.style.strokeDashoffset = lengthTriangule * 0.33;
    }
    else {
        progress.style.strokeDashoffset = 0;
    }

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


