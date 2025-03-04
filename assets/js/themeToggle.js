const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
  updateThemeImages(theme);
};

function updateThemeImages(theme) {
  document.querySelectorAll(".theme-img").forEach((img) => {
    img.src =
      theme === "dark"
        ? img.getAttribute("data-dark")
        : img.getAttribute("data-light");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const preparesDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    applyTheme(preparesDark ? "dark" : "light");
  }
});

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
};

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
