const btn = document.getElementById("button");
const content = document.getElementById("container");

btn.addEventListener("click", () => {
  const currentState = btn.getAttribute("closed");
  if (currentState === "false") {
    btn.setAttribute("closed", "true");
    content.classList.add('show-nav')
  } else {
    btn.setAttribute("closed", "false");
    content.classList.remove('show-nav')
  }
});