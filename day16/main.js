// Main Components
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')
const interactiveSection = document.getElementById("cups-sec");
// Edit Components
const restCups = document.getElementById('rest-cups')
const addCups = document.getElementById('add-cups')
const textCups = document.getElementById('text-cups')
const restLiters = document.getElementById('rest-liters')
const addLiters = document.getElementById('add-liters')
const textLiters = document.getElementById('text-liters')

// Capacity
const bigCupHeight = 500
const litersDefault = 2000; //mililiters
const totalCupsDefault = 8;
const numDecimals = 1
const maxCups = 12
const minCups = 6
const maxLiters = 3000
const minLiters = 1000
const snapLiters = 200
let actualLiters = 0
let actualTotalCups = 0
let actualCupCapacity = 0
// const actual

createCups(litersDefault, totalCupsDefault);

function createCups(liters, cups) {
  interactiveSection.innerText = ''
  const ml = liters / cups;
  for (let i = 0; i < cups; i++) {
    const cup = document.createElement("div");
    cup.classList.add("cup", "small-cup");
    cup.innerText = `${ml.toFixed()}ml`;
    cup.addEventListener("click", () => highlightCups(i));
    interactiveSection.appendChild(cup);
  }
  actualLiters = liters
  actualTotalCups = cups
  actualCupCapacity = ml
  textCups.innerText = `${actualTotalCups}`
  const textLitersInner = actualLiters / 1000
  textLiters.innerText = `${textLitersInner % 1 == 0 ? textLitersInner.toFixed(): textLitersInner.toFixed(1)}L`
  updateBigCup(cups)
}

// Set properties

function highlightCups(idx) {
  const smallCups = document.querySelectorAll(".small-cup");
  if(smallCups[idx].classList.contains('full') && 
    (!smallCups[idx].nextElementSibling || !smallCups[idx].nextElementSibling.classList.contains('full'))){
      idx--
  }
  smallCups.forEach((cup, idCup) => {
    if(idCup <= idx ){
      cup.classList.add('full')
    }
    else {
      cup.classList.remove('full')
    }
    updateBigCup(smallCups.length)
  });
}

function updateBigCup(totalCups) {
  const fullCups = document.querySelectorAll('.small-cup.full').length
  if(fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / actualTotalCups) * bigCupHeight}px`
    const percentageNumber = (fullCups / actualTotalCups) * 100
    percentage.innerText = `${percentageNumber % 1 ? percentageNumber.toFixed(numDecimals) : percentageNumber.toFixed()}%`
  }
  
  if(fullCups === totalCups) {
      remained.style.opacity = 0
      remained.style.visibility = 'hidden'
      remained.style.height = 0
  } else {
    remained.style.opacity = 1
    remained.style.visibility = 'visible'
    let prefix = 'ml'
    let litersFull = actualLiters - (actualCupCapacity * fullCups)
    if (litersFull >= 1000){
      prefix = 'L'
      litersFull = litersFull / 1000
    }
    liters.innerText = `${litersFull % 1 ? litersFull.toFixed(numDecimals) : litersFull.toFixed()}${prefix}`
  }
}

// Edit Buttons

restCups.addEventListener('click', () => {
  if(minCups < actualTotalCups){
    actualTotalCups--
    createCups(actualLiters, actualTotalCups)
  }
})

addCups.addEventListener('click', () => {
  if(maxCups > actualTotalCups){
    actualTotalCups++
    createCups(actualLiters, actualTotalCups)
  }
})

restLiters.addEventListener('click', () => {
  if(minLiters < actualLiters){
    actualLiters -= snapLiters
    createCups(actualLiters, actualTotalCups)
  }
})

addLiters.addEventListener('click', () => {
  if(maxLiters > actualLiters){
    actualLiters += snapLiters
    createCups(actualLiters, actualTotalCups)
  }
})