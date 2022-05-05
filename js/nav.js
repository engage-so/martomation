const hamburgerMenu = document.querySelector(".hamburger-menu");
// selection for left column - the nav bar
const sidebarMobile = document.querySelector(".sidebar");
// selection for the heading + slider
const hero = document.querySelector(".hero");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggle");
  sidebarMobile.classList.toggle("dn");
  sidebarMobile.classList.toggle("dn-m");
  sidebarMobile.classList.toggle("db-l");
  sidebarMobile.classList.toggle("scale-in-center");
  // hero.classList.toggle("dn");
  // hero.classList.toggle("flex");
  // hero.classList.remove("active");
});
