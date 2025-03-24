const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle('on');
  mobileMenu.classList.toggle("active");
});