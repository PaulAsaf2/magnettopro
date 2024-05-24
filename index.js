const dots = document.querySelectorAll('.dot')
const cards = document.querySelectorAll('.card')
const discussProjectBtn = document.querySelector('.greeting_btn')
const mainPage = document.getElementById('main_page')
const formPage = document.querySelector('.form_page_outer_cont')
const successPage = document.querySelector('.success_cont')
const formPageMain = document.querySelector('.form_page_main')
const form = document.forms[0]
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

function submitForm(event) {
  event.preventDefault()
  
  formPageMain.style.display = 'none'
  successPage.classList.add('success_cont_show')
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
