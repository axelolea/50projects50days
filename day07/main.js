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

const container = document.querySelector('.container')

const leftRange = window.innerWidth * 0.45
const rightRange = window.innerWidth * 0.55

container.addEventListener('mousemove', (e) => {
    if (e.clientX < leftRange){
        container.classList.remove('hover-right');
        container.classList.add('hover-left');
    }
    else if (e.clientX > rightRange) {
        container.classList.add('hover-right')
    }
    else {
        container.classList.remove('hover-right');
        container.classList.remove('hover-left');
    }
})