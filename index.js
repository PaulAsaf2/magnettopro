const dots = document.querySelectorAll('.dot')
const cards = document.querySelectorAll('.card')
const discussProjectBtn = document.querySelector('.greeting_btn')
const mainPage = document.getElementById('main_page')
const formPage = document.querySelector('.form_page_outer_cont')
const successPage = document.querySelector('.success_cont')
const formPageMain = document.querySelector('.form_page_main')
const form = document.forms[0]
const inputList = Array.from(form.querySelectorAll('.input'));
const closePageBtn = document.querySelector('.close_btn')

showCards(0)

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

function sendData() {
  const name = inputList[0].value
  const email = inputList[1].value
  const phone = inputList[2].value
  const url = 'https://bitrix.magnetto.pro/rest/381/80gybht7e43gzxpr/crm.lead.add'
  const data = {
    fields: {
      NAME: name,
      EMAIL: [{ VALUE: email }],
      PHONE: [{ VALUE: phone }],
    }
  }
  const params = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  return fetch(url, params)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`)
      }
    })
    .catch(err => { throw err })
}

function submitForm(event) {
  event.preventDefault()

  sendData()
    .then(() => {
      formPageMain.style.display = 'none'
      successPage.classList.add('success_cont_show')
    })
    .catch((err) => {
      console.error(err)
      alert('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.')
    })
}

function closePage() {
  location.reload()
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showCards(index))
})

discussProjectBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)
closePageBtn.addEventListener('click', closePage)
