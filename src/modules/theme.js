const dropdown = document.getElementById("dropdown-menu");
const dropdownMovel = document.getElementById("dropdown-menu-movel");
const themes = document.querySelectorAll(".theme-option");
const themeIcons = document.querySelectorAll(".theme-icon");
const html = document.documentElement;

// Chamando o evento de clique para trocar tema
dropdown.addEventListener("click", (event) => {
  const element = event.target.dataset.theme;
  if (element) {
    console.log("Tema clicado: ", element);
    activeTheme(element);
  }
});

dropdownMovel.addEventListener("click", (event) => {
  const element = event.target.dataset.theme;
  if (element) {
    console.log("Tema clicado: ", element);
    activeTheme(element);
  }
});

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
      changeIcon(theme);
      break;
    case "light":
      html.classList.remove("dark");
      changeIcon(theme);
      break;
    case "auto":
      autoTheme();
      break;
    default:
      break;
  }
}

// Trocar o ícone do botão de mudar o tema
function changeIcon(selectedTheme) {
  console.log(selectedTheme)
  themeIcons.forEach((icon) => {
    if (selectedTheme == "light") {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    } else if (selectedTheme == "dark") {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    }
  });
}

// Captura no DOM Storage o tema de preferência
function autoTheme() {
  if (window.matchMedia) {
    const preferTheme = "(prefers-color-scheme: dark)";

    // Se preferir modo dark
    const prefersDarkMode = window.matchMedia(preferTheme).matches;
    if (prefersDarkMode) {
      html.classList.add("dark");
      changeIcon("dark")
    } else {
      html.classList.remove("dark");
      changeIcon("light")
    }
    
    // Ouvinte para capturar mudanças em tempo real
    window.matchMedia(preferTheme).addEventListener("change", (event) => {
      if (event.matches) {
        html.classList.add("dark");
        changeIcon("dark")
      } else {
        html.classList.remove("dark");
        changeIcon("light")
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
    changeIcon("dark")
  } else {
    html.classList.remove("dark");
    changeIcon("light")
  }
}
