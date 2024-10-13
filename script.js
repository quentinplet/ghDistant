import constantes from "./constantes.js";

const dialogTitle = document.querySelector(".dialog__title");
const dialogText = document.querySelector(".dialog__text");

const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector(".dialog__close");

window.addEventListener("load", () => {
  dialogTitle.textContent = constantes.HELLO_WORLD_TITLE;
  dialogText.textContent = constantes.HELLO_WORLD_TEXT;
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
