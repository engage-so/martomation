const exploreTermsBtn = document.querySelector(".explore");
const sidebarNavItem = document.querySelector(".sidebar__nav-item1");
// const terms = document.querySelector(".glossary__item-container");

// console.log(sidebarNavItem);

exploreTermsBtn.addEventListener("click", (e) => {
  document.documentElement.scrollTo({
    left: 0,
    top: 700,
    behavior: "smooth",
  });
  e.preventDefault();
  // on page refresh scroll back to the top
});

// sidebarNavItem.addEventListener("click", (e) => {
//   // if (window.onload) {
//   // }
//   document.documentElement.scrollTo({
//     left: 0,
//     top: 1700,
//     behavior: "smooth",
//   });

//   // e.preventDefault();
// });
// it should first load the page and then take me to the position - is that not ajax or something
sidebarNavItem.addEventListener("click", (e) => {
  sidebarNavItem.addEventListener("DOMContentLoaded", () => {
    document.documentElement.scrollTo({
      left: 0,
      top: 1700,
      behavior: "smooth",
    });
  });
});

// sidebarNavItem.addEventListener("click", (e) => {
//   terms.scrollTo({
//     left: 0,
//     top: 700,
//     behavior: "smooth",
//   });
//   // e.preventDefault();
// });

// const link = e.target.href;
// console.log(link);
// const fixedNavigation = document.querySelector(".fixed__navigation");

// let coordinates = fixedNavigation.getBoundingClientRect();

// console.log(coordinates);

//
// exploreTermsBtn.addEventListener(
//   "click",
//   scrollTo({
//     left: 0,
//     top: 500,
//     behavior: "smooth",
//   })
// );

// exploreTermsBtn.scrollTo({
//   left: 300,
//   top: 500,
//   behavior: "smooth",
// });

// document.querySelector(".explore").scrollIntoView({ behavior: "smooth" });
// exploreTermsBtn.onclick().scrollTO({ top: 1500, left: 0, behavior: "smooth" });
