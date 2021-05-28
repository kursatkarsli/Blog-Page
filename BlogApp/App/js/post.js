

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}
const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const getPost = () => {
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`
    fetch(url, { method: 'GET' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            buildPost(data);
        })
}

const buildPost = (data) => {
   
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${data.post_image}`;
    const individualContent = `

    <div id="individual-post-title">${data.title}</div>
    <div id="individual-post-date">Published on ${postDate}</div>
    <div id="individual-post-content">${data.content}</div>
`;
    document.querySelector('.individual-post').innerHTML = individualContent;
    document.querySelector('header').style.backgroundImage=`url(${postImage})`

}

