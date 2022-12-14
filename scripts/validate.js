const validationConfig  = {
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__info_type_error',
  errorClass: 'popup__info-error_active'
};

const showInputError = (formSelector, inputElement, errorMessage, validationConfig) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputErrorClass);

  errorElement.textContent = errorMessage;

  errorElement.classList.add(validationConfig.errorClass);
};

const hideInputError = (formSelector, inputElement, validationConfig) => {
  const errorElement = formSelector.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);

  errorElement.classList.remove(validationConfig.errorClass);

  errorElement.textContent = '';
};

const isValid = (formSelector, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formSelector, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formSelector, inputElement, validationConfig);
  }
};

const setEventListeners = (formSelector, validationConfig) => {
  const inputList = Array.from(formSelector.querySelectorAll(validationConfig.inputSelector));

  const buttonElement = formSelector.querySelector(validationConfig.submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formSelector, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig.inactiveButtonClass);
    });
  });
};

function enableValidation (validationConfig) {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));

  formList.forEach((formSelector) => {

    setEventListeners(formSelector, validationConfig);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, validationConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
}

enableValidation(validationConfig);

