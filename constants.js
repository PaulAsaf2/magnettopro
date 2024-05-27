const dots = document.querySelectorAll('.dot')
const cards = document.querySelectorAll('.card')
const openFormBtn = document.querySelector('.open_form_btn')
const mainPage = document.getElementById('main_page')
const formPage = document.querySelector('.form_page_outer_cont')
const successPage = document.querySelector('.success_cont')
const formPageMain = document.querySelector('.form_page_main')
const form = document.forms[0]
const inputList = Array.from(form.querySelectorAll('.input'));
const closePageBtn = document.querySelector('.close_btn')
const submit = document.querySelector('.submit')
const logos = Array.from(document.querySelectorAll('.logo'))
const tg = window.Telegram.WebApp

export {
  dots,
  cards,
  openFormBtn,
  mainPage,
  formPage,
  successPage,
  formPageMain,
  form,
  inputList,
  closePageBtn,
  submit,
  logos,
  tg,
}