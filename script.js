// Año
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Dark mode (persistente)
const root = document.documentElement;
const THEME_KEY = "theme";

function setTheme(mode) {
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem(THEME_KEY, mode);
}

// Inicializar tema
const saved = localStorage.getItem(THEME_KEY);
if (saved) {
  setTheme(saved);
} else {
  // Si no hay preferencia guardada, usa la del sistema
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

function toggleTheme() {
  const isDark = root.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
}

document.getElementById("themeBtn")?.addEventListener("click", toggleTheme);
document
  .getElementById("themeBtnMobile")
  ?.addEventListener("click", toggleTheme);

// Filtro simple de proyectos
const filterBtns = document.querySelectorAll(".filterBtn");
const projectCards = document.querySelectorAll(".projectCard");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const type = card.getAttribute("data-type");
      const show = filter === "all" || filter === type;
      card.classList.toggle("hidden", !show);
    });
  });
});
