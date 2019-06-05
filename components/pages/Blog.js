function buildPostsHTML(posts){
    return posts.map((post) => `<article class='blog-main'>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    </article>`
    ).join(' ');
}

export default function(state){
    return `<h1></h1>
    ${buildPostsHTML(state.posts)};
    `;
}
