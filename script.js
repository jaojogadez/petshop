const $navbarCollapse = document.querySelector("#collapse");
const $navbarCollapseUl = document.querySelector("#collapse ul");
const btnlg = `<button type="button" class="btn btn-primary btn-lg">Acessar</button>`;
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

  console.log(arrayBtns);
};

window.addEventListener("resize", () => responseWindow());
window.addEventListener("DOMContentLoaded", () => responseWindow());
