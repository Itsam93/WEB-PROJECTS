document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    })
  );
});

// // Array of image paths (change to your actual image paths)
// const imagePaths = [
//   "images/plate2.png",
//   "images/plate3.png",
//   "images/plate4.png",
// ];

// let currentIndex = 0;

// // Get the image element
// const imageElement = document.querySelector("#image img");

// // Function to switch image
// function switchImage() {
//   currentIndex = (currentIndex + 1) % imagePaths.length;
//   imageElement.src = imagePaths[currentIndex];
// }

// // Change image every 4 seconds
// setInterval(switchImage, 4000);
