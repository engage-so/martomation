const hamburgerMenu = document.querySelector(".hamburger-menu");
// selection for left column - the nav bar
const sidebarMobile = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggle");
  sidebarMobile.classList.toggle("dn");
  sidebarMobile.classList.toggle("dn-m");
  sidebarMobile.classList.toggle("db-l");
  sidebarMobile.classList.toggle("scale-in-center");
});
