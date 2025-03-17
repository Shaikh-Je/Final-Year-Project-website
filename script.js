// document.addEventListener("DOMContentLoaded", function () {
//   // Mobile Menu Toggle
//   const menuToggle = document.createElement("div");
//   menuToggle.classList.add("menu-toggle");
//   menuToggle.innerHTML = "&#9776;";
//   document.querySelector("nav").prepend(menuToggle);

//   const navLinks = document.querySelector(".nav-links");
//   menuToggle.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//   });

//   // Sample Project Data
//   const projects = [
//     { title: "License Plate Number Recognition System", price: "Rs 2000" },
//     { title: "2x2 Player Dice Game", price: "Rs 500" },
//     { title: "Security Camera using Laptop Camera", price: "Rs 2000" }
//   ];

//   // Load Projects Dynamically
//   const projectContainer = document.querySelector(".project-cards");
//   projects.forEach((project) => {
//     const projectCard = document.createElement("div");
//     projectCard.classList.add("project-card");
//     projectCard.innerHTML = `
//       <h3>${project.title}</h3>
//       <p>Price: ${project.price}</p>
//       <button class="buy-btn">Buy Now</button>
//     `;
//     projectContainer.appendChild(projectCard);
//   });

//   // Sample Categories Data
//   const categories = ["Web Development", "AI/ML", "Cybersecurity", "IoT"];
//   const categoryContainer = document.querySelector(".category-cards");

//   categories.forEach((category) => {
//     const categoryCard = document.createElement("div");
//     categoryCard.classList.add("category-card");
//     categoryCard.innerHTML = `<h3>${category}</h3>`;
//     categoryContainer.appendChild(categoryCard);
//   });

//   // Newsletter Form Validation
//   const newsletterForm = document.querySelector(".newsletter form");
//   newsletterForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const emailInput = newsletterForm.querySelector("input");
//     if (emailInput.value.trim() === "") {
//       alert("Please enter a valid email.");
//     } else {
//       alert("Thank you for subscribing!");
//       emailInput.value = "";
//     }
//   });
// });


///////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "&#9776;";
  document.querySelector("nav").prepend(menuToggle);

  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Sample Project Data
  const projects = [
    { title: "License Plate Number Recognition System", price: "Rs 2000" },
    { title: "2x2 Player Dice Game", price: "Rs 500" },
    { title: "Security Camera using Laptop Camera", price: "Rs 2000" }
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
      emailInput.value = "";
    }
  });

  // Testimonials Code
  const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonialCards = document.querySelector('.testimonial-cards');
    let index = 0;

    function showTestimonial(n) {
        const totalTestimonials = document.querySelectorAll('.testimonial-card').length;
        index = (n + totalTestimonials) % totalTestimonials;
        testimonialCards.style.transform = `translateX(-${index * 100}%)`;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showTestimonial(index - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showTestimonial(index + 1);
        });
    }

    // Auto-slide functionality (optional)
    setInterval(() => {
        showTestimonial(index + 1);
    }, 5000); // Change slide every 5 seconds
});
