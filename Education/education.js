let menuBtn = document.querySelector(".menu-bar");
let nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  console.log("btn was clicked");

  nav.classList.toggle("nav");
  nav.classList.toggle("menuNav");
  console.log(nav.classList.toString());
});
