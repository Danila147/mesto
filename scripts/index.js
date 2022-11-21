const cardList = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileElem = document.querySelector('.popup_profile-edit');
const editElem = document.querySelector('.profile__edit');
const closeElem = document.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const nameInfo = document.querySelector('.popup__info_data_name');
const aboutInfo = document.querySelector('.popup__info_data_about');
const saveElem = document.querySelector('.popup__save');
const formElem = document.querySelector('.popup__container');
const placesContainer = document.querySelector('.elements__places');
const addElem = document.querySelector('.profile__add');
const cardElem = document.querySelector('.popup_card-add');
const closeAddElem = document.querySelector('.popup__close_card-add');
const placeInfo = document.querySelector('.popup__info_data_place');
const imageLink = document.querySelector('.popup__info_data_image');
const addForm = document.querySelector('.popup__container_card-add');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const openedPopupImage = document.querySelector('.popup_opened-image');
const openedImage = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');
const closeImageElem = document.querySelector('.popup__close_image');

function openPopupEdit() {
  profileElem.classList.add('popup__opened');

  nameInfo.value = nameProfile.textContent;

  aboutInfo.value = aboutProfile.textContent;
}

function openPopupAdd() {
  cardElem.classList.add('popup__opened');
}

function closePopupEdit() {
  profileElem.classList.remove('popup__opened');
}

function closePopupAdd() {
  cardElem.classList.remove('popup__opened');
}

function closePopupImage() {
  openedPopupImage.classList.remove('popup__opened');
}

function handleSaveInfo(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInfo.value;

  aboutProfile.textContent = aboutInfo.value;

  closePopupEdit();
}

function handleDeleteCard(evt) {
  evt.target.closest('.card').remove();
}

function handleLikeCard(evt) {
  evt.target.closest('.place__like').classList.toggle('place__like_active');
}

function addCard(evt) {
  evt.preventDefault();

  renderCard(
    { link: imageLink.value, name: placeInfo.value }
  );

  imageLink.value = '';
  placeInfo.value = '';

  closePopupAdd();
}

function openPopupImage(placeCard) {

  openedImage.src = placeCard.link;

  imageCaption.textContent = placeCard.name;

  openedImage.alt = placeCard.name;

  openedPopupImage.classList.add('popup__opened');
}

function generateCard(placeCard) {
  const newCard = cardTemplate.cloneNode(true);

  const cardTitle = newCard.querySelector('.place__title');
  cardTitle.textContent = placeCard.name;

  const cardImage = newCard.querySelector('.place__image');
  cardImage.setAttribute('src', `${placeCard.link}`);

  cardImage.setAttribute('alt', `${placeCard.name}`);

  const deleteBtn = newCard.querySelector('.place__delete');
  deleteBtn.addEventListener('click', handleDeleteCard);

  const likeBtn = newCard.querySelector('.place__like');
  likeBtn.addEventListener('click', handleLikeCard);

  cardImage.addEventListener('click', () => openPopupImage(placeCard));

  closeImageElem.addEventListener('click', closePopupImage);

  return newCard;
}

function renderCard(placeCard) {
  placesContainer.prepend(generateCard(placeCard));
}

cardList.forEach(function (placeCard) {
  renderCard(placeCard);
});

editElem.addEventListener('click', openPopupEdit);
closeElem.addEventListener('click', closePopupEdit);
formElem.addEventListener('submit', handleSaveInfo);
addElem.addEventListener('click', openPopupAdd);
closeAddElem.addEventListener('click', closePopupAdd);
addForm.addEventListener('submit', addCard);


