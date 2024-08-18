let menuBtn = document.querySelector(".menu-bar");
let nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav");
  nav.classList.toggle("menuNav");
});
