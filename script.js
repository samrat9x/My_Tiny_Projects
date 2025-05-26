const preloader = document.querySelector("#loading");

function myFunction() {
  preloader.style.display = "none";
}

// Footer year
const today = new Date();
const yearContainer = document.querySelector(".year-container");
const currentYear = today.getFullYear();
yearContainer.textContent = currentYear;
