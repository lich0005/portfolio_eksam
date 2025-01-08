/****************Burger menu******************/
// Select the burger icon and navigation links
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

// Add click event listener to the burger
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle the 'active' class on nav-links
});
