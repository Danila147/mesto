let popupElem = document.querySelector('.popup');
let editElem = document.querySelector('.profile__edit');
let closeElem = document.querySelector('.popup__close');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');
let nameInfo = document.querySelector('.popup__info_data_name');
let aboutInfo = document.querySelector('.popup__info_data_about');
let saveElem = document.querySelector('.popup__save');
let formElem = document.querySelector('.popup__container')

function openPopup() {
  popupElem.classList.add('popup__opened');

  nameInfo.value = nameProfile.textContent;

  aboutInfo.value = aboutProfile.textContent;
}

function closePopup() {
  popupElem.classList.remove('popup__opened');
}

function saveInfo(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInfo.value;

  aboutProfile.textContent = aboutInfo.value;

  closePopup();
}

editElem.addEventListener('click', openPopup);
closeElem.addEventListener('click', closePopup);
formElem.addEventListener('submit', saveInfo);

