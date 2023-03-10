
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
        
        for (let i = 0; i < cardComp.length; i++) {
            cardComp[i].addEventListener('mousemove', ()=>{
                let x = event.pageX;
                let y = event.pageY; 

                circle.style.left = x + 'px';
                circle.style.top = y + 'px';
                circle.style.display = 'block'
            });
            cardComp[i].addEventListener('mouseleave', ()=>{
                circle.style.opacity = '1'
            });
        }
        
    })
}


// document.addEventListener('mousemove', (event)=>{
//     let x = event.pageX;
//     let y = event.pageY; 

//     circle.style.left = x + 'px';
//     circle.style.top = y + 'px';
//     circle.style.display = 'block'
// })

// document.addEventListener('mousemove', ()=>{
//     circle.style.opacity = '0'
// })
