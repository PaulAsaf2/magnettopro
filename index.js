const dots = document.querySelectorAll('.dot')
const cards = document.querySelectorAll('.card')

showCards(0)

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showCards(index))
})

function showCards(index) {

  cards.forEach(card => card.style.display = 'none')
  dots.forEach(dot => dot.classList.remove('active'))

  cards[index].style.display = 'flex'
  dots[index].classList.add('active')
}