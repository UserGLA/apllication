const form = document.getElementById('form');
const planner = document.getElementById('planner');
const fieldsetOne = document.querySelector('.form-auto');
const fieldsetTwo = document.querySelector('.form-option');
const fieldsetThree = document.querySelector('.fieldset-coment');

const btnPrevModalOne = document.getElementById('btnPrevModalOne');
const btnNextModalOne = document.getElementById('btnNextModalOne');

const btnPrevModalTwo = document.getElementById('btnPrevModalTwo');
const btnNextModalTwo = document.getElementById('btnNextModalTwo');

const btnPrevModalThree = document.getElementById('btnPrevModalThree');
const send = document.getElementById('send');

const openModal = function () {
  form.classList.toggle('disable')
  fieldsetOne.classList.toggle('disable')
  planner.classList.toggle('planer-modal')
}

btnPrevModalOne.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.classList.toggle('disable')
  fieldsetOne.classList.toggle('disable')
  planner.classList.toggle('planer-modal')
})
btnNextModalOne.addEventListener('click', (evt) => {
  evt.preventDefault()
  fieldsetOne.classList.toggle('disable');
  fieldsetTwo.classList.toggle('disable');
})

btnPrevModalTwo.addEventListener('click', (evt) => {
  evt.preventDefault()
  fieldsetOne.classList.toggle('disable');
  fieldsetTwo.classList.toggle('disable');
})
btnNextModalTwo.addEventListener('click', (evt) => {
  evt.preventDefault()
  fieldsetTwo.classList.add('disable')
  fieldsetThree.classList.toggle('disable')
})

btnPrevModalThree.addEventListener('click', (evt) => {
  evt.preventDefault();
  fieldsetThree.classList.toggle('disable');
  fieldsetTwo.classList.toggle('disable');
})