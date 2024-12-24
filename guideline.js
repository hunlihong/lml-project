const nav = document.querySelector(".nav");
const nav_bar = document.querySelector(".nav-bar");

nav_bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// guidline
const buttons = document.querySelectorAll(".btn-group > button");
const guideline = document.querySelector(".guideline");

buttons.forEach((btn) => {
  btn.addEventListener("click", (click) => {
    const title = click.currentTarget;
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
    title.classList.add("active");
    for (let i = 0; i < guideline.children.length; i++) {
      guideline.children[i].style.display = "none";
    }
    guideline.children[title.dataset.id - 1].style.display = "inherit";
  });
});
