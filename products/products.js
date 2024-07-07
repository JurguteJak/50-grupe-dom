//<button type="button">Click me</button>

const formDOM = document.getElementsByTagName('form')[0];
formDOM.innerHTML = '<button type="button">Click me</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');

const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Sviestas',
        count: 1,
    },
    {
        title: 'Pomidorai',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietinė',
        count: 2,
    },
    {
        title: 'Kava',
        count: 1,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
        <li>
            <p class="title">${products[i].title} </p>
            <p class="count">${products[i].count} </p>
        </li>`;
}

ulDOM.innerHTML = HTML;
