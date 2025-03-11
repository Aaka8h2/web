// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js for dynamic typing in the hero section
  var typed = new Typed("#typed-text", {
    strings: ["Developer", "Cybersecurity Enthusiast", "Stock Bot Creator"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // GSAP: Animate all sections with the "fade-in" class on page load
  gsap.from(".fade-in", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
  });

  // Mobile hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Simple testimonial carousel functionality (rotates every 5 seconds)
  const testimonials = document.querySelectorAll(".testimonial-item");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.toggle("hidden", i !== index);
    });
  }

  showTestimonial(currentIndex);
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);
});