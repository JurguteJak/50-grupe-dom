const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
<header>
    <img src="#" alt="Logo">
    <nav>NAV</nav>
</header>
<main>MAIN</main>
<footer>FOOTER</footer>`;

const navDOM = document.querySelector('nav');

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'Contacts',
        link: '../contact/',
    },
];

let navHTML = '';

for (const linkData of mainLinksData) {
    if (linkData.text === 'Contacts') {
        navHTML += `<a class="link active" href="${linkData.link}">${linkData.text}</a>`
    } else {
        navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`
    }
}

navDOM.innerHTML = navHTML;