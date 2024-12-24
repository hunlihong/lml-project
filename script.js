const nav = document.querySelector(".nav");
const nav_bar = document.querySelector(".nav-bar");
const questions = document.querySelectorAll(".wondering > ul > li");
const readmore = document.querySelectorAll(".major-details > button");

// home
nav_bar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

readmore.forEach((read) => {
  read.addEventListener("click", (click) => {
    const check_id = click.currentTarget.dataset.id;
    const span_details = document.querySelectorAll(".major-details > p > span");
    span_details[check_id - 1].style.display = "inherit";
    readmore[check_id - 1].style.display = "none";
  });
});
