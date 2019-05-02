import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

let initialHTML = document.body.innerHTML;

document.body.innerHTML = `
${Navigation}
${Header}
${Main}
${Footer}
${initialHTML}
`;
