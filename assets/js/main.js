const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const inputWidth = $("input");
const iconWidth = $(".icon");

function myClick() {
  inputWidth.classList.toggle("active");
  iconWidth.classList.toggle("corner");
}
