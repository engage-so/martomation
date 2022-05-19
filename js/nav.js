const hamburgerMenu = document.querySelector(".hamburger-menu");
// selection for left column - the nav bar
const sidebarMobile = document.querySelector(".sidebar");
const glossaryItems = document.querySelector(".glossary__item-container");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggle");
  hamburgerMenu.classList.toggle("active");
  sidebarMobile.classList.toggle("dn");
  sidebarMobile.classList.toggle("dn-m");
  sidebarMobile.classList.toggle("db-l");
  glossaryItems.classList.toggle("dn");
  glossaryItems.classList.toggle("db-m");
  glossaryItems.classList.toggle("db-l");
});
