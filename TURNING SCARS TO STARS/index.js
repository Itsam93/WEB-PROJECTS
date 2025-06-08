const hero = document.getElementById("header");
const bgImages = [
  "Images/background.jpg",
  "Images/slider2.jpg",
  "Images/slider3.jpg",
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${bgImages[current]}')`;
  current = (current + 1) % bgImages.length;
}

changeBackground(); // Initial load
setInterval(changeBackground, 5000); // Change every 5 seconds

//INTEGRATION OF PAYSTACK SYSTEM OF PAYMENT........
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: "MY_PUBLIC_KEY_HERE", // Replace with your Paystack public key
    email: document.querySelector('input[name="email"]').value,
    amount: document.querySelector('input[name="amount"]').value * 100, // In kobo
    currency: "NGN",
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Unique reference
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: document.querySelector('input[name="tel"]').value,
        },
      ],
    },
    callback: function (response) {
      alert("Success. Transaction reference is " + response.reference);
      // Optionally, redirect to a thank you page
      window.location.href = "thankyou.html";
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });
  handler.openIframe();
}

// // ===== Mobile Menu Toggle =====
// const menuToggle = document.querySelector("#menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// if (menuToggle && navLinks) {
//   menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("hidden");
//   });
// }

// ===== Form Validation =====
// const contactForm = document.querySelector("#contactForm");
// if (contactForm) {
//   contactForm.addEventListener("submit", function (e) {
//     const email = document.querySelector("#email").value;
//     if (!email.includes("@")) {
//       e.preventDefault();
//       alert("Please enter a valid email address.");
//     }
//   });
// }
