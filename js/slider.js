// view new terms on mobile
const btnSlider = document.querySelector(".button--outline");
// slider
const slider = document.querySelector(".slider-container");
// const filter = document.querySelector(".engage_filter");
const btnClose = document.querySelector(".close__btn");

btnSlider.addEventListener("click", function (e) {
  slider.style.visibility = "visible";
  slider.classList.add("slide-in-top");

  slider.style.display = "block";

  btnClose.style.display = "block";

  e.preventDefault();
});
btnClose.addEventListener("click", function (e) {
  slider.style.visibility = "hidden";
  slider.style.display = "none";
  slider.classList.remove("slide-in-top");

  btnClose.style.display = "none";
  e.preventDefault();
});
