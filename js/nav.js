const hamburgerMenu = document.querySelector(".hamburger-menu");
// selection for left column - the nav bar
const sidebarMobile = document.querySelector(".sidebar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggle");
  hamburgerMenu.classList.toggle("active");
  sidebarMobile.classList.toggle("dn");
  sidebarMobile.classList.toggle("dn-m");
  sidebarMobile.classList.toggle("db-l");
});
