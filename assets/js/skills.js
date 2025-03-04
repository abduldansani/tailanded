const tools = [
  {
    title: "Figma",
    description: "Prototyping & UI Design",
    image: "./assets/images/skills/figma_icon.svg",
  },
  {
    title: "Photoshop",
    description: "Prototyping & UI Design",
    image: "./assets/images/skills/ps_icon.svg",
  },
  {
    title: "Adobe Xd",
    description: "Prototyping & UI Design",
    image: "./assets/images/skills/xd_icon.svg",
  },
  {
    title: "Sketch",
    description: "Prototyping & UI Design",
    image: "./assets/images/skills/sketch_icon.svg",
  },
];

const skillsContainer = document.querySelector(".skills__container");
const skills = tools
  .map(
    (tool) =>
      `
    <div class="skills__tool">
        <img src="${tool.image}" alt="${tool.name} logo" width="138" height="138"/>
        <div class="skills_about">
            <h3 class="skills__name">${tool.title}</h3>
            <p class="skills__use">${tool.description}</p>
        </div>
    </div>
    `
  )
  .join("");

skillsContainer.innerHTML = skills;
