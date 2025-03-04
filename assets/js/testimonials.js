const testimonials = [
  {
    name: "Wade Warren",
    position: "President of Sales",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "./assets/images/testimonials/review_1.png",
  },
  {
    name: "Wade Warren",
    position: "President of Sales 1",
    testimonial:
      "From number 2 consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "./assets/images/testimonials/review_1.png",
  },
  {
    name: "Wade Warren",
    position: "President of Sales 2",
    testimonial:
      "from no 3 amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "./assets/images/testimonials/review_1.png",
  },
];

const testimonialsContainer = document.querySelector(
  ".testimonials__container"
);

let activeTestimonial = 0;
const testimonialContainer = document.querySelector(".testimonials__content");
const nextBtn = document.querySelector(".testimonials__nextBtn");
const prevBtn = document.querySelector(".testimonials__prevBtn");

const testimonialImage = document.querySelector(".testimonials__image");
const testimonialName = document.querySelector(".testimonials__name");
const testimonialPosition = document.querySelector(".testimonials__position");
const testimonialContent = document.querySelector(".testimonials__testimonial");

function changeActiveTestimonial(direction) {
  if (direction === "next" && activeTestimonial >= testimonials.length - 1)
    return;
  if (direction === "prev" && activeTestimonial <= 0) return;

  if (direction === "next") activeTestimonial++;
  if (direction === "prev") activeTestimonial--;

  prevBtn.style.display = activeTestimonial === 0 ? "none" : "flex";
  nextBtn.style.display =
    activeTestimonial === testimonials.length - 1 ? "none" : "flex";

  testimonialImage.src = testimonials[activeTestimonial].image;
  testimonialName.innerHTML = testimonials[activeTestimonial].name;
  testimonialPosition.innerHTML = testimonials[activeTestimonial].position;
  testimonialContent.innerHTML = testimonials[activeTestimonial].testimonial;
}

nextBtn.addEventListener("click", () => changeActiveTestimonial("next"));
prevBtn.addEventListener("click", () => changeActiveTestimonial("prev"));

// Initialize content
testimonialImage.src = testimonials[activeTestimonial].image;
testimonialName.innerHTML = testimonials[activeTestimonial].name;
testimonialPosition.innerHTML = testimonials[activeTestimonial].position;
testimonialContent.innerHTML = testimonials[activeTestimonial].testimonial;
