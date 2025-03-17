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
    { title: "License Plate Number Recognition System", technologies: "Python", price: "Rs 2000" },
    { title: "2x2 Player Dice Game", technologies: "JavaScript", price: "Rs 500" },
    { title: "Security Camera using Laptop Camera", technologies: "Python", price: "Rs 2000" }
  ];

  // Load Projects Dynamically
  const projectContainer = document.querySelector(".project-cards");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
     <h3>${project.title}</h3>
     <h4>Technologies: ${project.Technologies}</h4>
     <p>Price: ${project.price}</p>
     <div id="buyNowModal" class="modal">
      <div class="modal-content">
       <span class="close">&times;</span>
       <img src="hero-image.jpg" alt="Project Image">
       <button class="buy-btn">Buy Now</button>
     </div>
    </div>
  `; // Corrected
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
   let currentSlide = 0;

  function moveSlide(direction) {
    const slides = document.querySelectorAll('.testimonial-card');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.testimonial-cards').style.transform = `translateX(${offset}%)`;
  }

  // Auto slide every 5 seconds
  setInterval(() => moveSlide(1), 3000);


///////////// Get the modal ////////////////////
var modal = document.getElementById("buyNowModal");

  // Get the button that opens the modal
var btns = document.querySelectorAll(".buy-now-btn");

  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
btns.forEach(function(btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  };
});

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
