let popupElem = document.querySelector('.popup');
let editElem = document.querySelector('.profile__edit');
let closeElem = document.querySelector('.popup__close');

function openPopup() {
  popupElem.classList.add('popup__opened');
}

editElem.addEventListener('click', openPopup);

function closePopup(evt) {
  evt.preventDefault();

  popupElem.classList.remove('popup__opened');
}

closeElem.addEventListener('click', closePopup);

let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function saveInfo(evt) {
  evt.preventDefault();

  let nameInfo = document.querySelector('.popup__info_data_name');

  let aboutInfo = document.querySelector('.popup__info_data_about');

  nameProfile.textContent = nameInfo.value;

  aboutProfile.textContent = aboutInfo.value;

  popupElem.classList.remove('popup__opened');
}

let saveElem = document.querySelector('.popup__save');

saveElem.addEventListener('click', saveInfo);

saveElem.addEventListener('submit', saveInfo);

