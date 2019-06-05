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
        // If user is routing to 'blog', then render to the Blog page here.
        // If there was a requested route (e.g. /blog, /contact), then the 'params' property will exist.
        // We will then check if the path inside of that was '.blog'
        if(router.lastRouteResolved() && router.lastRouteResolved().params.path === 'blog'){
            console.log(router.lastRouteResolved().params);
            render(states.Blog);
        }
    });


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


