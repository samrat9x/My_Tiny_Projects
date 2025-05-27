const preloader = document.querySelector("#loading");

function myFunction() {
  preloader.style.display = "none";
}

// Footer year
const today = new Date();
const yearContainer = document.querySelector(".year-container");
const currentYear = today.getFullYear();
yearContainer.textContent = currentYear;

document
  .querySelector(".github-corner")
  .addEventListener("click", (e) =>
    window.open("https://github.com/samrat9x/My_Tiny_Projects", "_blank")
  );
