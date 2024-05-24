const dots = document.querySelectorAll('.dot')
const cards = document.querySelectorAll('.card')
const discussProjectBtn = document.querySelector('.greeting_btn')
const mainPage = document.getElementById('main_page')
const formPage = document.querySelector('.form_page_outer_cont')
const form = document.forms[0]

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

function submitForm(event) {
  event.preventDefault()
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showCards(index))
})

discussProjectBtn.addEventListener('click', openFormPage)
form.addEventListener('submit', submitForm)