const openFormBtn = document.querySelector('.open_form_btn')
const mainPage = document.getElementById('main_page')
const formPage = document.querySelector('.form_page_outer_cont')
const formSection = document.querySelector('.form_page')
const successPage = document.querySelector('.success_cont')
const formPageMain = document.querySelector('.form_page_main')
const textCarouselCont = document.querySelector('.text_carousel_cont')
const form = document.forms[0]
const inputList = Array.from(form.querySelectorAll('.input'));
const closePageBtn = document.querySelector('.close_btn')
const submit = document.querySelector('.submit')
const logos = Array.from(document.querySelectorAll('.logo'))
const tg = window.Telegram.WebApp
const tgUserId = tg?.initDataUnsafe?.user?.id
const tgUserFirstName = tg?.initDataUnsafe?.user?.first_name
const tgUserLastName = tg?.initDataUnsafe?.user?.last_name
const tgUsername = tg?.initDataUnsafe?.user?.username
const errorSendingMessage = 'Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.'

export {
  openFormBtn,
  mainPage,
  formPage,
  formSection,
  successPage,
  formPageMain,
  form,
  inputList,
  closePageBtn,
  submit,
  logos,
  tg,
  errorSendingMessage,
  textCarouselCont,
  tgUserId,
  tgUserFirstName,
  tgUserLastName,
  tgUsername,
}