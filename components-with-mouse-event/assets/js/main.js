
const container = document.querySelector('.container')
cards('./cards.json')

async function cards(file) {
    let obj1 = await fetch(file);
    let jsonCards = await obj1.text();

    let cards = JSON.parse(jsonCards);

    var newCards = ''
    cards.forEach(item => {
        let htmlCards = `<div class="card-component">
                            <img src="${item.url}" alt="">
                            <h1>${item.heading}</h1>
                            <p>${item.paragragh}</p>
                        </div>`;
        newCards += htmlCards;

    });

    container.innerHTML = newCards
}

function mouse(e) {
    
}