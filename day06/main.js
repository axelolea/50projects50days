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

const boxes = document.querySelectorAll('.content-box')
const activedArea = 7/10

window.addEventListener('scroll', () => {
    const triggerBotton = window.innerHeight * activedArea
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top
        if(triggerBotton > boxTop) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
})