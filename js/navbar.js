
const nav = document.querySelector("nav");
var nav_wrapper=document.querySelector(".navigation-wrapper")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    nav_wrapper.classList.add('black-me');

  } else {
    nav.classList.remove("nav--hidden");
    nav_wrapper.classList.remove('black-me');
  }

  lastScrollY = window.scrollY;
});


