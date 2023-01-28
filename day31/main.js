const outputPassword = document.getElementById('output-password')
// Print length password in span

const lengthSlide = document.getElementById('length-slide')
const lengthPrint = document.getElementById('length-print')

const printValueLength = ({ value }) => { lengthPrint.innerText = value }
// Print actual value 
printValueLength(lengthSlide)

lengthSlide.addEventListener('input', (e) => printValueLength(e.target))

// Copy clipboard Action 

const copyButton = document.getElementById('copy')

copyButton.addEventListener('click', () => {
    if(!outputPassword.value) return
    
    navigator.clipboard.writeText(outputPassword.value)
    alert("Copy Password")
})

// Generate Password

const generatePassword = document.getElementById('generate')

// Includes 

const uppercaseCheckbox = document.getElementById('uppercase')
const lowercaseCheckbox = document.getElementById('lowercase')
const numbersCheckbox = document.getElementById('numbers')
const symbolsCheckbox = document.getElementById('symbols')

// Random Func 

const getChar = (start, len) => {
    let result = ''
    for(let i = start; i < (start + len); i++){
        result += String.fromCharCode(i)
    }
    return result
}

const uppercaseArr = getChar(65, 26)
const lowercaseArr = getChar(97, 26)
const numbersArr = getChar(48, 10)
const symbolsArr = "~!@#$%^&*()-+={[}]|:;<>?/"

// Create Password

function createArrayCharacthers()
{
    let arr = ''
    arr += uppercaseCheckbox.checked ? uppercaseArr : ''
    arr += lowercaseCheckbox.checked ? lowercaseArr : ''
    arr += numbersCheckbox.checked ? numbersArr : ''
    arr += symbolsCheckbox.checked ? symbolsArr : ''
    return arr
}

function createPassword (len, arr)
{
    if(arr.length <= 0){
        alert('Please Select options')
        return ''
    }
    let password = ''
    for(let i = 0; i < len; i++){
        password += arr[Math.floor(Math.random() * arr.length)]
    }
    return password
}

generatePassword.addEventListener('click', () => {
    outputPassword.value = createPassword(
        lengthSlide.value,
        createArrayCharacthers()
    )
})