import {
  openFormBtn,
  mainPage,
  formPage,
  successPage,
  formPageMain,
  form,
  closePageBtn,
  logos,
  tg,
} from './constants.js'
import { sendData } from './api.js'

tg.expand()

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
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.')
    })
}

logos.forEach(img => {
  img.addEventListener('click', closePage)
})
openFormBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)
closePageBtn.addEventListener('click', closePage)

