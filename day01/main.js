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

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active') == true) {
            removeActiveClasses()
        }
        else{
            removeActiveClasses()
            card.classList.add('active')
        }
    })
})


function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}