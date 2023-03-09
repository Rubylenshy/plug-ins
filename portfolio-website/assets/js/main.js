
const hamburger_menu = document.querySelector('.hamburger')
const navigation_menu = document.querySelector('.navigation-menu')

hamburger_menu.addEventListener('click', ()=>{
    hamburger_menu.classList.toggle('active')
    navigation_menu.classList.toggle('active')
})