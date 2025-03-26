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

// Swiper Start
var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
// Swiper End

// Active Nav Link Start
const sections = document.querySelectorAll(".active-section");
const navLinks = document.querySelectorAll("#collapse .nav-link");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.screenY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top > offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("#collapse ul li a[href*=' + id +']")
          .classList.add("active");
        let href = link.getAttribute("href");
        console.log(href.value);
      });
    }
  });
};
// Active Nav Link End

// Alterne Log In / Sign Up

const $logIn = document.querySelector("#logIn");
const $signUp = document.querySelector("#signUp");

document.querySelector("#logInBtn").addEventListener("click", () => {
  $signUp.classList.add("fade-out"); // elemento que sai
  setTimeout(() => {
    $signUp.classList.add("d-none");
    $signUp.classList.remove("fade-out");

    $logIn.classList.remove("d-none");
    $logIn.classList.add("fade-in");
  }, 100);
});

document.querySelector("#signUpBtn").addEventListener("click", () => {
  $logIn.classList.add("fade-out"); // animação de saída
  setTimeout(() => {
    $logIn.classList.add("d-none"); // elemento que sai
    $logIn.classList.remove("fade-out"); // remove animação para evitar conflito

    $signUp.classList.remove("d-none"); // elemento que chega
    $signUp.classList.add("fade-in"); // com animação
  }, 100);
});
