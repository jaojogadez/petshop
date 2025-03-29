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