import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

// State is an object literal that will hold info that functional components to properly render
const states = {
    'home': {
        'title': 'Welcome',
        'links': [ 'Home','About','Contact' ]
    },
    'contact': {
        'title': 'Contact Me',
        'links': [ 'Home','About','Contact' ]
    },
    'portfolio': {
        'title': 'This is my Portfolio',
        'links': [ 'About','Contact' ]
    },
    'about': {
        'title': 'About Me',
        'links': [ 'Home','About','Contact' ]
    }
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
