const navLinks = document.querySelectorAll(".dropdown");
const hiddenMenu = document.querySelector(".menu");
const iconClose = document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-toggle");

const introContainer = document.querySelector(".intro-container");
introContainer.addEventListener("click", () => {
  navLinks.forEach((e) => e.classList.remove("active"));
});

navLinks.forEach((el, i) => {
  el.addEventListener("click", () => {
    navLinks.forEach((el) => el.classList.remove("active"));
    el.classList.toggle("active");
  });
});
menuIcon.addEventListener("click", () => {
  hiddenMenu.classList.toggle("element-active");

  iconClose.classList.toggle("element-active");
  menuIcon.classList.toggle("element-active");
});
iconClose.addEventListener("click", () => {
  hiddenMenu.classList.toggle("element-active");
  navLinks.forEach((el) => el.classList.remove("active"));
  iconClose.classList.toggle("element-active");
  menuIcon.classList.toggle("element-active");
});
