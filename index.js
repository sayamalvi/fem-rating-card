const btn = document.querySelector('.btn');
const cardTwo = document.querySelector('.card_state-two');
const cardOne = document.querySelector('.card_state-one');
const numbers = document.querySelectorAll('.number');
const rate = document.querySelector('.rate');

btn.addEventListener('click', () => {
  cardOne.classList.add('hidden');
  cardTwo.classList.remove('hidden')
})

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    rate.textContent = number.textContent;
  })
})

