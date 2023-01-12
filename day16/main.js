const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')
const interactiveSection = document.getElementById("cups-sec");

// Capacity
const bigCupHeight = 500
const litersDefault = 2000; //mililiters
const totalCupsDefault = 8;
const numDecimals = 1
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
      remained.style.visibility = 'hidden'
      remained.style.height = 0
  } else {
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