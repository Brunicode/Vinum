// cache main menu elem
const menu = document.getElementById('menu');
// grab wines from json exported from gsheet
fetch('../src/wines.json').then(response => response.json()).then(wines => {
    // clear loading message
    menu.innerHTML = null;
    let flights = [];
    // loop over each wine
    for (let wine of wines) {
        // destructor wine from json
        const { name, description, category, flight, grape, region, year, glass, bottle, togo } = wine;
        console.log(wine);
        // attach flight header
        if (flights.indexOf(category) === -1) {
            const flightElem = document.createElement('h2');
            let string = (flight) ? `${category} Flight - ${flight}` : category;
            flightElem.innerText = string;
            menu.appendChild(flightElem);
            flights.push(category);
        }
        // create item wrapper
        const itemElem = document.createElement('div');
        itemElem.classList.add('item');
        // create elem for price
        const priceElem = document.createElement('span');
        priceElem.innerHTML = `
            ${(glass) ? `${glass} <img src="assets/glass.png" />` : ``}
            ${(bottle) ? `${bottle} <img src="assets/bottle.png" />` : ``}
            ${(togo) ? `${togo} <img src="assets/togo.png" />` : ``}
        `;
        itemElem.appendChild(priceElem);
        // create elem for name
        const nameElem = document.createElement('h4');
        nameElem.innerHTML = name;
        itemElem.appendChild(nameElem);
        // create elem for facts
        const factsElem = document.createElement('p');
        factsElem.innerText = `${grape} - ${region} ${(year) ? ` - ${year}` : ``}`;
        itemElem.appendChild(factsElem);
        // create elem for description
        const descriptionElem = document.createElement('p');
        descriptionElem.innerText = description;
        descriptionElem.classList.add('description')
        itemElem.appendChild(descriptionElem);
        // append new item to menu
        menu.appendChild(itemElem);
    }
})