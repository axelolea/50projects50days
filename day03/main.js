const btn = document.getElementById("button");
const content = document.getElementById("container");
const items = document.querySelectorAll(".list-item");

btn.addEventListener("click", () => {
  const currentState = btn.getAttribute("closed");
  if (currentState === "false") {
    btn.setAttribute("closed", "true");
    content.classList.add('show-nav')
    items.forEach((item) => item.classList.add('active'));
  } else {
    btn.setAttribute("closed", "false");
    content.classList.remove('show-nav');
    items.forEach((item) => item.classList.remove('active'));
  }
});