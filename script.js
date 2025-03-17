document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;";
  document.querySelector("nav").prepend(menuToggle);

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Sample Project Data
  const projects = [
    { title: "AI Chatbot", price: "$20" },
    { title: "E-commerce Website", price: "$30" },
    { title: "Android Attendance System", price: "$25" }
  ];

  // Load Projects Dynamically
  const projectContainer = document.querySelector(".project-cards");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>Price: ${project.price}</p>
      <button class="buy-btn">Buy Now</button>
    `;
    projectContainer.appendChild(projectCard);
  });

  // Sample Categories Data
  const categories = ["Web Development", "AI/ML", "Cybersecurity", "IoT"];
  const categoryContainer = document.querySelector(".category-cards");

  categories.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");
    categoryCard.innerHTML = `<h3>${category}</h3>`;
    categoryContainer.appendChild(categoryCard);
  });

  // Newsletter Form Validation
  const newsletterForm = document.querySelector(".newsletter form");
  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector("input");
    if (emailInput.value.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      alert("Thank you for subscribing!");
      emailInput.value = ""; // Clear input field after submission
    }
  });
});
