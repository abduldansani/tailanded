const menuToggle = document.querySelector(".header__menuBtn");
const menuIcon = document.querySelector(".header__menuIcon");
const mobileMenu = document.querySelector(".menu");
const body = document.body; // Select the body element

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuIcon.classList.toggle("open");

  // Disable or enable scrolling
  body.style.overflow = isOpen ? "hidden" : "auto";
});

const copyrightElement = document.querySelector(".footer__copyright");
const currentYear = new Date().getFullYear();
copyrightElement.innerHTML = `© Navin ${currentYear}. All Rights Reserved.`;
