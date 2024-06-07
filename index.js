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
} from './constants.js'
import { sendData } from './api.js'

tg.expand()

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

  sendData()
    .then(() => showSuccessPage())
    .catch((err) => {
      console.error(err)
      alert(errorSendingMessage)
    })
}

logos.forEach(img => {
  img.addEventListener('click', closePage)
})
openFormBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)
closePageBtn.addEventListener('click', closePage)

