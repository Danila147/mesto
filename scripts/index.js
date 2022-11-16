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

const popupElem = document.querySelector('.popup');
const editElem = document.querySelector('.profile__edit');
const closeElem = document.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');
const nameInfo = document.querySelector('.popup__info_data_name');
const aboutInfo = document.querySelector('.popup__info_data_about');
const saveElem = document.querySelector('.popup__save');
const formElem = document.querySelector('.popup__container');
const placesContainer = document.querySelector('.elements__places');

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

function renderCard(placeCard) {
  placesContainer.insertAdjacentHTML("afterbegin",
    `
  <li>
    <article class="place">
      <img src="${placeCard.link}" alt="${placeCard.name}" class="place__image">
      <div class="place__container">
        <h2 class="place__title">
          ${placeCard.name}
        </h2>
        <button type="button" class="place__like">
        </button>
      </div>
    </article>
  </li>
  `)
}

cardList.forEach(function (placeCard) {
  renderCard(placeCard);
});

editElem.addEventListener('click', openPopup);
closeElem.addEventListener('click', closePopup);
formElem.addEventListener('submit', saveInfo);

