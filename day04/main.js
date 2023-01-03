// Get link to Isotype
const isotypeLink = document.getElementById('isotype-link');
const data = fetch("../main/src/days-info.json")
  .then((response) => {
      return response.json();
    })
    .then((data) => {
    isotypeLink.setAttribute('href', data['links']['main-link'])
  });

// Main Code Day

const button = document.getElementById('button');
const textInput = document.getElementById('text-input');

button.addEventListener( 'click', () => {
    if (textInput.getAttribute('closed') == 'true'){
        textInput.setAttribute('closed', 'false');
        button.classList.add('actived');
        textInput.focus()
    }
    else {
        textInput.setAttribute('closed', 'true');
        button.classList.remove('actived');
        textInput.blur()
    }
})