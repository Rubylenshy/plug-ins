const cardOne = document.querySelector('.one')
const cardOneDetails = document.querySelector('.one-details')

cardOne.addEventListener('click', ()=>{
    cardOne.style.transform = 'rotateY(180deg)'
    // cardOne.style.display = 'none'
    // cardOneDetails.style.display = 'block'
    // cardOne.style.animation = 'bounce 1s'
})
cardOneDetails.addEventListener('click', ()=>{
    cardOneDetails.style.transform = 'rotateY(-180deg)'
    // cardOneDetails.style.display = 'none'
    // cardOne.style.display = 'block'
})
