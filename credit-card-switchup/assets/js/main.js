const cardOne = document.querySelector('.one')
const cardOneDetails = document.querySelector('.one-details')

cardOne.addEventListener('click', ()=>{
    cardOne.classList.add('flip')
    setTimeout(() => {
        cardOne.style.display = 'none'
        cardOneDetails.style.display = 'block'
        cardOneDetails.classList.remove('flip')
    }, 300);

})
document.querySelector('.see-card-btn').addEventListener('click', ()=>{
    cardOneDetails.classList.add('flip')
    setTimeout(() => {
        cardOneDetails.style.display = 'none'
        cardOne.style.display = 'block'
        cardOne.classList.remove('flip')
    }, 300);
})
