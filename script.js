const mainContainer = document.querySelector('.main-container')
const thanksContainer = document.querySelector('.thank-you')
const submitBtn = document.querySelector('#submit')
const rateAgain = document.getElementById('rate-again')
const ratingByUser = document.getElementById('rated')
const rateButtons = document.querySelectorAll('.btn')

submitBtn.addEventListener ('click', () => {
    thanksContainer.classList.remove('hidden')
    mainContainer.classList.add('hidden')
})

rateAgain.addEventListener ('click', () => {
    mainContainer.classList.remove('hidden')
    thanksContainer.classList.add('hidden')
})

rateButtons.forEach((rate) => {
    rate.addEventListener('click',()=>{
        ratingByUser.innerHTML = rate.innerHTML
    })
})