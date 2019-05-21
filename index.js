import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

import * as states from './store';

import Navigo from 'navigo';

const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;
    const links = document.querySelectorAll('nav a');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            render(states[`${event.target.closest('nav a').textContent}`]);
        });
    });
}


router
    .on(':path', (params) => console.log(params.path))
    .on('/', () => render(states.Home))
    .resolve();
