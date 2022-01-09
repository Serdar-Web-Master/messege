const m0801 = document.querySelector("#m0801");
const m0804 = document.querySelector("#m0804");
const popup__0801 = document.querySelector(".popup__0801");
const popup__0804 = document.querySelector(".popup__0804");
const back = document.querySelectorAll(".back");


m0801.addEventListener("click", () => {
  popup__0801.style.display = "block";
});

m0804.addEventListener("click", () => {
  popup__0804.style.display = "block";
});

back[0].addEventListener("click", () => {
  popup__0801.style.display = "none";
});
back[1].addEventListener("click", () => {
  popup__0804.style.display = "none";
});
