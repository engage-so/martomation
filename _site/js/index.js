const sidebarLink = document.querySelector(".sidebar__nav-item");

// sidebar links active state
const activePage = window.location.pathname;
const navlinks = document.querySelectorAll("nav ul li a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    // hero.style.display = "none";
    // hero.style.visibility = "hidden";
    // hero.style.opacity = 0;
  }
});

console.log(navlinks);
