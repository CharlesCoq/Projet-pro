// Menu Burger Mobile
function openBurger() {
    var burger = document.getElementById("myMenu");
    if (burger.style.display === "block") {
      burger.style.display = "none";
    } else {
      burger.style.display = "block";
    }
  }


// Dark theme

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Theme Button
