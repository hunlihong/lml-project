const nav = document.querySelector(".nav");
const nav_bar = document.querySelector(".nav-bar");

nav_bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// about
const readmore_about = document.querySelector(".about-panel > button");

readmore_about.addEventListener("click", () => {
  if (readmore_about.textContent == "បិទ...") {
    document.querySelectorAll(".about-panel > div")[1].style.display = "none";
    document.querySelectorAll(".about-panel > div")[2].style.display = "none";
    readmore_about.textContent = "អានបន្ថែម...";
  } else {
    document.querySelectorAll(".about-panel > div").forEach((each_panel) => {
      each_panel.style.display = "inherit";
    });
    readmore_about.textContent = "បិទ...";
  }
});
