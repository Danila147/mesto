const profileElem = document.querySelector('.popup_profile-edit');
const buttonOpenProfilePopup = document.querySelector('.profile__edit');
const buttonCloseProfilePopup = document.querySelector('.popup__close_profile-edit');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const nameInput = document.querySelector('.popup__info_data_name');
const aboutInfo = document.querySelector('.popup__info_data_about');
const editForm = document.querySelector('.popup__container_profile-edit');
const placesContainer = document.querySelector('.elements__places');
const buttonOpenCardPopup = document.querySelector('.profile__add');
const cardPopup = document.querySelector('.popup_card-add');
const buttonCloseCardPopup = document.querySelector('.popup__close_card-add');
const placeInfo = document.querySelector('.popup__info_data_place');
const imageLink = document.querySelector('.popup__info_data_image');
const cardForm = document.querySelector('.popup__container_card-add');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const openedPopupImage = document.querySelector('.popup_opened-image');
const openedImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');
const buttonCloseImagePopup = document.querySelector('.popup__close_image');

function openPopup(popup) {
  popup.classList.add('popup__opened');
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
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  aboutProfile.textContent = aboutInfo.value;

  closePopup(profileElem);
}

function handleDeleteCard() {
  const card = document.querySelector('.card');
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

  closePopup(cardPopup);
}

function generateCard(cardData) {
  const newCard = cardTemplate.cloneNode(true);

  const cardTitle = newCard.querySelector('.place__title');
  cardTitle.textContent = cardData.name;

  const cardImage = newCard.querySelector('.place__image');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const deleteButton = newCard.querySelector('.place__delete');
  deleteButton.addEventListener('click', handleDeleteCard);

  const likeButton = newCard.querySelector('.place__like');
  likeButton.addEventListener('click', () => handleLikeCard(likeButton));

  cardImage.addEventListener('click', () => openPopupImage(cardData));

  return newCard;
}

function renderCard(cardData) {
  placesContainer.prepend(generateCard(cardData));
}

cardList.forEach(function (cardData) {
  renderCard(cardData);
});

buttonOpenProfilePopup.addEventListener('click', openPopupEdit);
buttonCloseProfilePopup.addEventListener('click', () => closePopup(profileElem));
editForm.addEventListener('submit', handleProfileFormSubmit);
buttonOpenCardPopup.addEventListener('click', () => openPopup(cardPopup));
buttonCloseCardPopup.addEventListener('click', () => closePopup(cardPopup));
cardForm.addEventListener('submit', handleAddCard);
buttonCloseImagePopup.addEventListener('click', () => closePopup(openedPopupImage));

