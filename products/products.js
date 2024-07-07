// const contentDOM = document.getElementById('content');

// console.log(contentDOM);

//<button type="button">Click me</button>

const formDOM = document.getElementsByTagName('form')[0];

formDOM.innerHTML = '<button type="button">Click me</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');

ulDOM.innerHTML = '<button type="button">Click meow</button>';

let HTML = '';

for (let i = 0; i < i < 5; i++) {
    ulDOM.innerHTML += `
    <li>
        <p class="title">Grietine</p>
        <p class="count">2</p>
    </li>`;
}

ulDOM.innerHTML = HTML;
