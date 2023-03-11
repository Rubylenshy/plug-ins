
const hamburger_menu = document.querySelector('.hamburger')
const navigation_menu = document.querySelector('.navigation-menu')

hamburger_menu.addEventListener('click', ()=>{
    hamburger_menu.classList.toggle('active')
    navigation_menu.classList.toggle('active')
})

const projects = document.querySelector('.grid-projects')

cards('assets/js/cards.json')

async function cards(file) {
    let obj1 = await fetch(file);
    let jsonCards = await obj1.text();

    let cards = JSON.parse(jsonCards);

    var newCards = ''
    cards.forEach(item => {
        let htmlCards = `<div class="card-component" >
                            <div>
                            <h1>${item.heading}</h1>
                            <p>${item.paragragh}</p>
                            </div>
                            <button class='card-btn' type='button'>View ${item.heading}</button>
                        </div>`;
        newCards += htmlCards;

    });
    
    projects.innerHTML = newCards
    window.addEventListener('load', ()=>{

        const cardComp = document.querySelectorAll('.card-component')
        
        
        
    })
}