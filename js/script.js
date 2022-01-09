const m0801 = document.querySelector("#m0801");
const m0804 = document.querySelector("#m0804");
const popup__0801 = document.querySelector(".popup__0801");
const popup__0804 = document.querySelector(".popup__0804");
const back = document.querySelectorAll(".back");
const input0804 = document.querySelector(".input0804");
const pf0804 = document.querySelector(".pf0804");
const send = document.querySelector(".send");

pf0804.addEventListener("click", () => {
  pf0804.style.height = "100px";
  input0804.style.height = "90px";
  send.style.display = "block";
});

input0804.addEventListener("onchange", () => {
  send.style.opacity = "1";
  console.log(input0804.value);
});

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

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const date = time.getDate();
const hour = time.getHours();
const min = time.getMinutes();
const sec = time.getMinutes();
console.log(year, month + 1, date, hour, min, sec);
