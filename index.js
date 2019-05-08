import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

// State is an object literal that will hold info that functional components to properly render
const state = {};

state.title = 'Some Title';

document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;

// querySelectorAll returns a NodeList which is an Array Like Object
const links = document.querySelectorAll('nav a');

// We need to iterate or loop over the elements inside the NodeList
// while keyword executes a block of code while some condition is true
// A while loop does require a 'global' iterator variable
let i = 0;

while(i < links.length){
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.textContent);
    });

    i++;
}

links.forEach((link) => {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        console.log('this is from click handler', event.target.textContent);
    });
});

// Imperative that we make sure to increment our iterator variable - else we will end up in an infinite loop
// We need to add the addEventListener to each

// Create click event handlers that will respond when we click one of our navigation elements
document.querySelector('nav a').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('I was clicked.');
    console.log(event.target.textContent);
});
