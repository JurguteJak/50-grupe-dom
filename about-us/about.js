const h1DOM = document.getElementById('title');
console.log(h1DOM);

const pDOM = document.getElementsByTagName('p');
console.log(pDOM[0].innerText);
console.log(pDOM[0].textContent);

console.log(h1DOM.innerText.toUpperCase());

console.clear();

const ulDOM = document.getElementsByTagName('ul');
let index = 1;

for (const list of ulDOM) {
    const liDOM = list.getElementsByTagName('li');

    for (const item of liDOM) {
        // item.innerText = index++ + ')' + item.innerText;
        item.innerText = `${index++}) ${item.innerText}`;
    }
}

// const listItemsDOM = document.querySelector('li');
// const listItemsDOM = document.querySelectorAll('ul:nth-child(6) > li');
// const listItemsDOM = document.querySelectorAll('li:first-child');
const listItemsDOM = document.querySelectorAll('ul > li:first-child, li > li:first-child');

console.log(listItemsDOM);

const ulItemsDOM = document.querySelectorAll('ul > li:first-child');
console.log(ulItemsDOM);

const olItemsDOM = document.querySelectorAll('ol > li:first-child');
console.log(olItemsDOM);

// const x = [...ulItemsDOM];
// const y = [...olItemsDOM];

// console.log(x);
// console.log(y);

// const totalLiDomination = (x).concat(y);
// console.log(totalLiDomination);

// bendras sarasas vaiku su spread

const totalLiDomination = [...ulItemsDOM].concat(...olItemsDOM);
console.log(totalLiDomination);

const totalLiDomination2 = [...ulItemsDOM, ...olItemsDOM];
console.log(totalLiDomination);

// const pomidoroVaikaiDOM = document.querySelectorAll('.pomidoras > li');
// console.log(pomidoroVaikaiDOM);

const pomidoroVaikaiDOM = document
    .getElementById('darzas')
    .querySelectorAll('.pomidoras > li');
console.log(pomidoroVaikaiDOM);