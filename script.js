const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector(".dialog__close");

window.onload = () => {
  dialog.showModal();
};

closeBtn.addEventListener("click", () => {
  dialog.close();
});
