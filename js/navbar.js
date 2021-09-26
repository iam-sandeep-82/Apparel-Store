
const nav = document.querySelector("nav");
var nav_wrapper=document.querySelector(".navigation-wrapper")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav_wrapper.style.background='';

  } 
  else  {
    nav_wrapper.style.background='white';
  } 

  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    
  } 
  else {
    nav.classList.remove("nav--hidden");
    
  }
 
  lastScrollY = window.scrollY;
});



