window.addEventListener("scroll", () => stickyNavbar());

let stickyNavbar = () => {
  const nav = document.querySelector(".navbar");
  let height = window.scrollY;
  if (height > 0) {
    nav.classList.add("shadow-sm");
  } else {
    nav.classList.remove("shadow-sm");
  }
};

// Active Nav Link Start
const sections = document.querySelectorAll(".active-section");
const navLinks = document.querySelectorAll("#collapse .nav-link");

function updateActiveNavLink() {
  let scrollPosition = window.scrollY;
  let windowHeight = window.innerHeight;
  let documentHeight = document.documentElement.scrollHeight;

  // Caso especial para a última seção (seções muito pequenas)
  if (scrollPosition + windowHeight >= documentHeight - 200) {
    // Se estiver próximo ao final da página, ative o último link
    navLinks.forEach((link) => link.classList.remove("active"));
    const lastLink = document.querySelector('#collapse ul li a[href*="contato"]');
    if (lastLink) {
      lastLink.classList.add("active");
      return;
    }
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    // Ajuste para seções pequenas - considerar centro da viewport
    const viewportMiddle = scrollPosition + (windowHeight / 2);

    if (viewportMiddle >= sectionTop && viewportMiddle < (sectionTop + sectionHeight)) {
      // Remover classe 'active' de todos os links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Adicionar classe 'active' no link correspondente
      const correspondingLink = document.querySelector(`#collapse ul li a[href*="${sectionId}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
}

// Adicionar listeners para diferentes eventos de rolagem
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('resize', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Executar inicialmente para definir estado correto
updateActiveNavLink();
// Active Nav Link End

const $navbarCollapse = document.querySelector("#collapse");
const $navbarCollapseUl = document.querySelector(".offcanvas-body ul");
const btnlg = `<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#loginSignUp">Acessar</button>`;
let responseWindow = () => {
  let widht = window.innerWidth;
  const btnQuantity = document.querySelectorAll(".btn-lg");
  const arrayBtns = Array.from(btnQuantity);
  arrayBtns.forEach((btn, index) => {
    if (widht > 992) {
      if (index == 0) {
        btn.remove();
      }
    } else {
      if (index == 0) {
        btn.remove();
      }
    }
  });
  if (widht > 992) {
    $navbarCollapse.insertAdjacentHTML("afterend", btnlg);
  } else {
    $navbarCollapseUl.insertAdjacentHTML("beforebegin", btnlg);
  }
};

window.addEventListener("resize", () => responseWindow());
window.addEventListener("DOMContentLoaded", () => responseWindow());