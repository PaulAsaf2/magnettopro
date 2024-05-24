import {
  inputList,
  submit,
} from './constants.js'

toggleButtonState()

function isValid(input) {
  if (!input.validity.valid) {
    input.classList.add('input_error');
  } else {
    input.classList.remove('input_error');
  }
};

function hasInvalidInput() {
  return inputList.some(input => !input.validity.valid)
}

function toggleButtonState() {
  if (hasInvalidInput()) {
    submit.classList.add('submit_disabled')
    submit.disabled = true
  } else {
    submit.classList.remove('submit_disabled')
    submit.disabled = false
  }
}

inputList.forEach((input) => {
  input.addEventListener('input', () => {
    isValid(input)
    toggleButtonState()
  });
});