import {
  dots,
  cards,
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
showCards(0)

fetch('https://bitrix.magnetto.pro/rest/381/80gybht7e43gzxpr/crm.lead.fields')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))

function showCards(index) {
  cards.forEach(card => card.style.display = 'none')
  dots.forEach(dot => dot.classList.remove('active'))

  cards[index].style.display = 'flex'
  dots[index].classList.add('active')
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
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.')
    })
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showCards(index))
})
logos.forEach(img => {
  img.addEventListener('click', closePage)
})
openFormBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)
closePageBtn.addEventListener('click', closePage)

