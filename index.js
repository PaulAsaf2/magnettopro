import {
  openFormBtn,
  mainPage,
  formPage,
  formSection,
  successPage,
  formPageMain,
  form,
  closePageBtn,
  logos,
  tg,
  errorSendingMessage,
  textCarouselCont,
  inputList,
  tgUserFirstName,
  tgUserLastName,
  tgUsername,
} from './constants.js'
import { sendData } from './api.js'
import { isValid, toggleButtonState } from './validation.js'

tg.expand()
toggleButtonState()

if (tg.platform == 'ios') {
  formSection.style.height = '140vh'
  textCarouselCont.style.padding = '0 0 30px 0'
}

function openFormPage() {
  mainPage.style.display = 'none'
  formPage.style.display = 'block'
}

function showSuccessPage() {
  formPageMain.style.display = 'none'
  successPage.classList.add('success_cont_show')
}

function closePage() {
  location.reload()
}

function submitForm(event) {
  event.preventDefault()

  ym(97540611, 'reachGoal', 'form-submit', {}, function () {
    sendData()
      .then(() => showSuccessPage())
      .catch((err) => {
        console.error(err)
        alert(errorSendingMessage)
      })
  })
}

inputList[0].value = tgUserFirstName + ' ' + tgUserLastName
inputList[3].value = tgUsername

logos.forEach(img => img.addEventListener('click', closePage))
openFormBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)
closePageBtn.addEventListener('click', closePage)
inputList.forEach((input) => {
  input.addEventListener('input', () => {
    isValid(input)
    toggleButtonState()
  });
});
