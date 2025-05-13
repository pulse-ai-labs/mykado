// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
const header = document.querySelector(".header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Scroll Down
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Scroll Up
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Add animation to social buttons on hover
const socialButtons = document.querySelectorAll(".social-btn");
socialButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});

// Menu mobile
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  closeMenuBtn.classList.add("active");
  mobileMenuBtn.classList.add("hidden");
  document.body.style.overflow = "hidden"; // Empêche le défilement quand le menu est ouvert
});

closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  closeMenuBtn.classList.remove("active");
  mobileMenuBtn.classList.remove("hidden");
  document.body.style.overflow = ""; // Réactive le défilement
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    closeMenuBtn.classList.remove("active");
    mobileMenuBtn.classList.remove("hidden");
    document.body.style.overflow = "";
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    nav.classList.remove("active");
    closeMenuBtn.classList.remove("active");
    mobileMenuBtn.classList.remove("hidden");
    document.body.style.overflow = "";
  }
});

// Animation au scroll
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observer les sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});
