import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

// State is an object literal that will hold info that functional components to properly render
const states = {
    'home': {
        'title': 'Abby Kaemmerer',
        'links': {
            'primary': [ 'Home','About','Contact' ],
            'dropdown': [ 'Class Project', 'Hack-A-Thon', 'Demo Day' ] }
    },
    'about': {
        'title': 'About Me',
        'links': {
            'primary': [ 'Home','About','Contact' ],
            'dropdown': [ 'Class Project', 'Hack-A-Thon', 'Demo Day' ] }
    },
    'contact': {
        'title': 'Contact Me',
        'links': {
            'primary': [ 'Home','About','Contact' ],
            'dropdown': [ 'Class Project', 'Hack-A-Thon', 'Demo Day' ] }
    },
    'portfolio': {
        'title': 'This is my Portfolio',
        'links': {
            'primary': [ 'Home','About','Contact' ],
            'dropdown': [ 'Class Project', 'Hack-A-Thon', 'Demo Day' ] }
    },
};

const root = document.querySelector('#root');

function render(state){
    console.log('named param state is', state);
    root.innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;
}

render(states.home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let x = event.target.textContent.toLowerCase();

        return (`states.${x}`);
    });
});
