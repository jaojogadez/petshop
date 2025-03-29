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