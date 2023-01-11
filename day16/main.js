const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')

// Capacity
const bigCupHeight = 500
const litersDefault = 2000; //mililiters
const totalCupsDefault = 12;
const numDecimals = 1
let actualLiters = 0
let actualTotalCups = 0
let actualCupCapacity = 0
// const actual

createCups(litersDefault, totalCupsDefault);

function createCups(liters, cups) {
  const interactiveSection = document.getElementById("cups-sec");
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
    percentage.innerText = `${((fullCups / actualTotalCups) * 100).toFixed(numDecimals)}%`
  }
  
  if(fullCups === totalCups) {
      remained.style.visibility = 'hidden'
      remained.style.height = 0
  } else {
      remained.style.visibility = 'visible'
      const litersFull = actualLiters - (actualCupCapacity * fullCups)
      liters.innerText = litersFull >= 1000 ? `${((litersFull) / 1000).toFixed(numDecimals)}L` : `${litersFull.toFixed(numDecimals)}ml`
  }
}