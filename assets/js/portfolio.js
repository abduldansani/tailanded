const projects = [
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_1.png",
  },
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_2.png",
  },
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_3.png",
  },
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_4.png",
  },
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_5.png",
  },
  {
    title: "projectName",
    link: "/",
    image: "./assets/images/portfolio/project_6.png",
  },
];

const portfolioContainer = document.querySelector(".portfolio__container");
const portfolioItems = projects
  .map(
    (project) =>
      `
      <div class="portfolio__card">
          <img src="${project.image}" alt="${project.title} image"/>
          <a class="portfolio__link" href="${project.link}">View Demo</a>
      </div>
      `
  )
  .join("");

portfolioContainer.innerHTML = portfolioItems;
