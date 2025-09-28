const infoButton = document.querySelector(".button__info");
const popup = document.querySelector("#popup-info");
const popupOverlay = popup.querySelector(".popup__overlay");
const popupBody = popup.querySelector(".popup__body");
const popupText = popup.querySelector(".popup__text");
const closeButton = popup.querySelector(".popup__close");

infoButton.addEventListener("click", () => {
  popup.classList.add("active");
  popupOverlay.style.animation = "fadeIn 0.2s forwards";
  popupBody.style.animation = "popupShow 0.5s forwards";
  popupText.style.animation = "fadeIn 0.6s forwards 0.5s";
  infoButton.style.opacity = "0.6";
  infoButton.disabled = true;
});

closeButton.addEventListener("click", () => {
  popupOverlay.style.animation = "fadeOut 0.3s forwards";
  popupBody.style.animation = "popupHide 0.5s forwards";
  popupText.style.animation = "fadeOut 0.3s forwards";
  infoButton.style.opacity = "1";
  infoButton.disabled = false;
});

popupBody.addEventListener("animationend", (e) => {
  if (e.animationName === "popupHide") {
    popup.classList.remove("active");
    popupOverlay.style.animation = "";
    popupBody.style.animation = "";
    popupText.style.animation = "";
  }
});