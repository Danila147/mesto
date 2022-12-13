const profileElem = document.querySelector('.popup_profile-edit');
const buttonOpenProfilePopup = document.querySelector('.profile__edit');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const nameInput = document.querySelector('.popup__info_data_name');
const aboutInfo = document.querySelector('.popup__info_data_about');
const profileForm = document.querySelector('.form_profile-edit');
const placesContainer = document.querySelector('.elements__places');
const buttonOpenCardPopup = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup_card-add');
const placeInfo = document.querySelector('.popup__info_data_place');
const imageLink = document.querySelector('.popup__info_data_image');
const cardForm = document.querySelector('.form_card-add');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const openedPopupImage = document.querySelector('.popup_opened-image');
const openedImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');

function openPopup(popup) {
  popup.classList.add('popup__opened');

  document.addEventListener('keydown', handleEscClose);
}

function openPopupEdit() {
  nameInput.value = nameProfile.textContent;
  aboutInfo.value = aboutProfile.textContent;

  openPopup(profileElem);
}

function openPopupImage(cardData) {
  openedImage.src = cardData.link;
  imageCaption.textContent = cardData.name;
  openedImage.alt = cardData.name;

  openPopup(openedPopupImage);
}

function closePopup(popup) {
  popup.classList.remove('popup__opened');

  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const popupEscClose = document.querySelector('.popup__opened');

    closePopup(popupEscClose);
  }
}

document.querySelectorAll('.popup').forEach( popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInfo.value;

  disableButton(evt.submitter, validationConfig.inactiveButtonClass);

  closePopup(profileElem);
}

function handleDeleteCard(card) {
  card.remove();
}

function handleLikeCard(likeButton) {
  likeButton.classList.toggle('place__like_active');
}

function handleAddCard(evt) {
  evt.preventDefault();

  renderCard(
    { link: imageLink.value, name: placeInfo.value }
  );

  cardForm.reset();

  disableButton(evt.submitter, validationConfig.inactiveButtonClass);

  closePopup(cardPopup);
}

function generateCard(cardData) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.place__title');

  cardTitle.textContent = cardData.name;

  const cardImage = card.querySelector('.place__image');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const deleteButton = card.querySelector('.place__delete');

  deleteButton.addEventListener("click", () => handleDeleteCard(card));

  const likeButton = card.querySelector('.place__like');

  likeButton.addEventListener('click', () => handleLikeCard(likeButton));
  cardImage.addEventListener('click', () => openPopupImage(cardData));

  return card;

}

function renderCard(cardData) {
  placesContainer.prepend(generateCard(cardData));
}

cardList.forEach(function (cardData) {
  renderCard(cardData);
});

buttonOpenProfilePopup.addEventListener('click', openPopupEdit);
profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonOpenCardPopup.addEventListener('click', () => openPopup(cardPopup));
cardForm.addEventListener('submit', handleAddCard);
