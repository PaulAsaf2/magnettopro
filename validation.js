import {
  inputList,
  submit,
} from './constants.js'

export function isValid(input) {
  if (!input.validity.valid) {
    input.classList.add('input_error');
  } else {
    input.classList.remove('input_error');
  }
};

function hasInvalidInput() {
  return inputList.some(input => !input.validity.valid)
}

export function toggleButtonState() {
  if (hasInvalidInput()) {
    submit.classList.add('submit_disabled')
    submit.disabled = true
  } else {
    submit.classList.remove('submit_disabled')
    submit.disabled = false
  }
}
