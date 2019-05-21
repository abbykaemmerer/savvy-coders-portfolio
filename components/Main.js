import * as pages from './pages';
export default (state) => `
<main>
${pages[state.pageContent]}
</main>`;
