document.addEventListener('DOMContentLoaded', () => {
  const infoButton = document.querySelector('.button__info');
  const popup = document.querySelector('#popup-info');
  const popupOverlay = popup.querySelector('.popup__overlay');
  const popupBody = popup.querySelector('.popup__body');
  const closeButton = popup.querySelector('.popup__close');

  infoButton.addEventListener('click', () => {
    popup.classList.add('active');
    infoButton.style.opacity = "0.6";
    infoButton.disabled = true;
  });

  const closePopup = () => {
    popup.classList.remove('active');

    const onTransitionEnd = (e) => {
      if (e.propertyName === 'transform' && e.target === popupBody) {
        infoButton.style.opacity = "1";
        infoButton.disabled = false;
        popupBody.removeEventListener('transitionend', onTransitionEnd);
      }
    };

    popupBody.addEventListener('transitionend', onTransitionEnd);

    setTimeout(() => {
      if (infoButton.disabled) {
        infoButton.style.opacity = "1";
        infoButton.disabled = false;
        popupBody.removeEventListener('transitionend', onTransitionEnd);
      }
    }, 700);
  };

  closeButton.addEventListener('click', closePopup);
});
