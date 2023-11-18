const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY, 100);
});

const ham = document.getElementById("menu-toggle");
ham.addEventListener("click", (e) => {
  document.querySelector(".menu-items-mobile").classList.add("show");
});

const close = document.getElementById("menu-close");
close.addEventListener("click", (e) => {
  document.querySelector(".menu-items-mobile").classList.remove("show");
});
