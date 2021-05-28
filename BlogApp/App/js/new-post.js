/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    const title = document.getElementById("form-post-title").value;
const content = document.getElementById("form-post-content").value;
const file = document.querySelector('[type="file"]');

    let data = new FormData();
    data.append('post-image', file.files[0]);
    data.append('title',title)
    data.append('content', content);

    fetch(API_URL, { method: 'POST', body: data })
        .then(() => {
            setTimeout(() => {
                window.location.href = 'index.html';

            }, 1000);
        })
    
   
  
}