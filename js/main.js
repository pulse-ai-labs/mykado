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
  mobileMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  mobileMenuBtn.classList.remove("hidden");
  closeMenuBtn.classList.remove("active");
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileMenuBtn.classList.remove("hidden");
    closeMenuBtn.classList.remove("active");
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
    mobileMenuBtn.classList.remove("hidden");
    closeMenuBtn.classList.remove("active");
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

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu handling
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  const nav = document.querySelector("nav");

  mobileMenuBtn.addEventListener("click", () => {
    nav.classList.add("active");
    mobileMenuBtn.classList.add("hidden");
    closeMenuBtn.classList.add("active");
  });

  closeMenuBtn.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileMenuBtn.classList.remove("hidden");
    closeMenuBtn.classList.remove("active");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        nav.classList.remove("active");
        mobileMenuBtn.classList.remove("hidden");
        closeMenuBtn.classList.remove("active");
      }
    });
  });

  // Active navigation state
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // Set initial active state

  // Newsletter form handling
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      // Here you would typically send this to your backend
      console.log("Newsletter signup:", email);
      // Show success message
      alert("Merci de votre inscription !");
      newsletterForm.reset();
    });
  }
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem("cookieConsent");

  if (!cookieChoice) {
    // Show the cookie consent popup if no choice has been made
    cookieConsent.style.display = "block";
  }

  // Handle accept button click
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    cookieConsent.style.display = "none";
    // Here you can add code to enable cookies or analytics
  });

  // Handle decline button click
  declineButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    cookieConsent.style.display = "none";
    // Here you can add code to disable cookies or analytics
  });
});
