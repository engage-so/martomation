// view new terms on mobile
const btnSlider = document.querySelector(".button--outline");
// slider
const slider = document.querySelector(".slider-container");
// const filter = document.querySelector(".engage_filter");
const btnClose = document.querySelector(".close__btn");

const sidebarLink = document.querySelector(".sidebar__nav-item");

sidebarLink.addEventListener("click", function (e) {
  sidebarLink.addClass("active");
  e.preventDefault();
  console.log(sidebarLink);
});

// console.log(sidebarLink);

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
