// view new terms on mobile
const btnSlider = document.querySelector(".button--outline");
// slider
const slider = document.querySelector(".slider-container");
// const filter = document.querySelector(".engage_filter");
const btnClose = document.querySelector(".close__btn");
const hero = document.querySelector(".hero");

const sidebarLink = document.querySelector(".sidebar__nav-item");

// sidebarLink.addEventListener("click", function (e) {
//   hero.style.display = "none";

//   e.preventDefault();
// });

// btnClose.style.display = "none";

// if ((engageLink.style.display = "block")) {
//   btnClose.style.display = "none";
// } else {
//   btnClose.style.display = "block";
// }
btnSlider.addEventListener("click", function (e) {
  slider.style.visibility = "visible";
  slider.classList.add("slide-in-top");
  // slider.classList.toggle("dn");
  slider.style.display = "block";
  // filter.style.display = "none";
  // engage.style.display = "none"
  btnClose.style.display = "block";
  // btnClose.classList.toggle("dn");
  e.preventDefault();
});
btnClose.addEventListener("click", function (e) {
  slider.style.visibility = "hidden";
  // slider.classList.toggle("dn");
  slider.style.display = "none";
  slider.classList.remove("slide-in-top");
  // filter.style.display = "block";
  // engage.style.display = "block"
  btnClose.style.display = "none";
  e.preventDefault();
});

// sidebar links active state
const activePage = window.location.pathname;
const navlinks = document.querySelectorAll("nav ul li a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    hero.style.display = "none";
    hero.style.visibility = "hidden";
    hero.style.opacity = 0;
  } else if (link.href.includes("/")) {
    link.classList.remove("active");
  }
});
