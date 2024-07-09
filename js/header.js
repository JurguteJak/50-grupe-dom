const data = [
    { href: '', text: 'Home' },
    { href: 'about-us', text: 'About us' },
    { href: 'products', text: 'Products' },
    { href: 'contacts', text: 'Contacts' },
    { href: 'sportas', text: 'Sportas' },
    { href: 'chat', text: 'Chat' },
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';

    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <img src="#" alt="Logo">
            <nav>${navHTML}</nav>
        </header>`);
}
