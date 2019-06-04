import Navigation from './components/Navigation';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

import * as states from './store';

// Object Destructuring
import { capitalize } from 'lodash';

import Navigo from 'navigo';

import axios from 'axios';

const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}
`;

    router.updatePageLinks();
}

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        // TODO: Grab the posts from the dara, and iterate other them
        // We need to 'push' each and every post into states.Blog.posts

        // 'response.data' is an Array of 'Post' Objects
        // We need to get this into states.Blog.posts
        response.data.forEach((post) => states.Blog.posts.push(post));
        console.log(states);
        render(states.Homes);
    });

// function handleRoutes(params){
//     render(states[capitalize(params.path)]);
// }

// Check the URL bar
// Grab anything that is beyond window.location.origin (e.g. /about)
// Assign that to an Object called params with key of path
// Use that 'capitalize' method from lodash that we imported to transform, for example 'about' to 'About'
router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();


