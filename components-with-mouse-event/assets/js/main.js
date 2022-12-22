
const container = document.querySelector('.container')
const circle = document.querySelector('.circle')

cards('./cards.json')

async function cards(file) {
    let obj1 = await fetch(file);
    let jsonCards = await obj1.text();

    let cards = JSON.parse(jsonCards);

    var newCards = ''
    cards.forEach(item => {
        let htmlCards = `<div class="card-component" >
                            <img src="${item.url}" alt="">
                            <h1>${item.heading}</h1>
                            <p>${item.paragragh}</p>
                        </div>`;
        newCards += htmlCards;

    });
    
    container.innerHTML = newCards
    window.addEventListener('load', ()=>{

        const cardComp = document.querySelectorAll('.card-component')
        // function grad(event) {
        //     let x = event.clientX;
        //     let y = event.clientY;
            
        //     cardComp.forEach(item =>{
        //         item.style.backgroundImage = `linear-gradient(
        //             to right,
        //             rgb(197, 203, 255, 0.05) ${x + 'px'},
        //             rgb(197, 203, 255, 0.1) ${y + 'px'}
        //         )`
        //     })
        // }

        cardComp.forEach(item =>{
            item.addEventListener('mouseleave', ()=>{
                circle.style.display = 'block'
            })
        })
        cardComp.forEach(item =>{
            item.addEventListener('mouseenter', ()=>{
                circle.style.display = 'none'
            })
        })
    })
}


document.addEventListener('mousemove', (event)=>{
    let x = event.pageX;
    let y = event.pageY;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    circle.style.display = 'block'
})

document.addEventListener('mouseleave', ()=>{
    circle.style.display = 'none'
})
