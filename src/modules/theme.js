const dropdown = document.getElementById("dropdown-menu");
const themes = document.querySelectorAll(".theme-option");
const html = document.documentElement;

// Chamando o evento de clique para trocar tema
dropdown.addEventListener("click", (event) => {
  const element = event.target.dataset.theme;
  if (element) {
    console.log("Tema clicado: ", element);
    activeTheme(element);
  }
});

console.log(dropdown);
console.log(themes);

// Captura o tema escolhido
function activeTheme(element) {
  themes.forEach((theme) => {
    theme.classList.remove("active");
    const activeTheme = theme.dataset.theme;
    if (activeTheme == element) {
      theme.classList.add("active");
      console.log("Tema passado: ", activeTheme);
      choseTheme(activeTheme);
    }
  });
}

// aplica no dom o tema escolhido
function choseTheme(theme) {
  switch (theme) {
    case "dark":
      html.classList.add("dark");
      break;
    case "light":
      html.classList.remove("dark");
      break;
    case "auto":
      autoTheme();
      break;
    default:
      break;
  }
}

// Captura no DOM Storage o tema de preferência
function autoTheme() {
  if (window.matchMedia) {
    const preferTheme = "(prefers-color-scheme: dark)";

    // Se preferir modo dark
    const prefersDarkMode = window.matchMedia(preferTheme).matches;
    if (prefersDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Ouvinte para capturar mudanças em tempo real
    window.matchMedia(preferTheme).addEventListener("change", (event) => {
      if (event.matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    });

  } else {
    noPreference();
  }
}

// Caso o navegador não suporte matchMedia
function noPreference() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme == "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
