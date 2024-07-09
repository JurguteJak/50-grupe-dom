import { header } from "../js/header";

header();

const data = [
    {
        person: 'other',
        message: 'Labas!'
    }, {
        person: 'me',
        message: 'Labas ir tau!'
    },
    {
        person: 'other',
        message: 'Ka tu?'
    },
    {
        person: 'me',
        message: 'Nieko, o tu?'
    },
    {
        person: 'other',
        message: 'Irgi nieko...'
    },
];

const chatDOM = document.querySelector('.chat');

let HTML = '';

for (const msg of data) {
    const text = msg.message
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;')
        .replaceAll('=', '?')
    HTML += `<div class="msg ${msg.person}">${text}</div>`;
}

chatDOM.innerHTML = HTML;