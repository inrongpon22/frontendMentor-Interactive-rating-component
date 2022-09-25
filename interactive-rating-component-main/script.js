const mainbox = document.querySelector('.main-box');
const thanksbox = document.querySelector('.thanks-box');
const submitbtn = document.getElementById('submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.number');

submitbtn.addEventListener('click' , () => {
    thanksbox.classList.remove('hidden');
    mainbox.style.display = "none";
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
}) 