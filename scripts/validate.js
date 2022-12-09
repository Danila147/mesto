const validationConfig  = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error_active'
};

const showInputError = (formSelector, inputElement, errorMessage) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig .inputErrorClass);

  errorElement.textContent = errorMessage;

  errorElement.classList.add(validationConfig .errorClass);
};

const hideInputError = (formSelector, inputElement) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig .inputErrorClass);

  errorElement.classList.remove(validationConfig .errorClass);

  errorElement.textContent = '';
};

const isValid = (formSelector, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formSelector, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formSelector, inputElement);
  }
};

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig .inputSelector));

  const buttonElement = formSelector.querySelector(validationConfig .submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formSelector, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(validationConfig .formSelector));

  formList.forEach((formSelector) => {

    setEventListeners(formSelector);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig .inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationConfig .inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const resetError = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig .inputSelector));

  inputList.forEach((inputElement) => {
    hideInputError(formSelector, inputElement);
  });
};

enableValidation();

