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

const btn = document.getElementById("button");
const content = document.getElementById("container");
const items = document.querySelectorAll(".list-item");

btn.addEventListener("click", () => {
  const currentState = btn.getAttribute("closed");
  if (currentState === "false") {
    btn.setAttribute("closed", "true");
    content.classList.add('show-nav')
    items.forEach((item) => item.classList.add('active'));
    disableScroll()
  } else {
    btn.setAttribute("closed", "false");
    content.classList.remove('show-nav');
    items.forEach((item) => item.classList.remove('active'));
    enableScroll()
  }
});

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}