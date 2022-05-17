let header = document.getElementById('header');
let footer = document.getElementById('footer');
let title = document.getElementById('title');
let posts = document.getElementById('posts')
let verifForm = true;
let countPosts = 0;
let randomColor
let articles = []
if (localStorage.getItem('mesArticles')) {
    articles = localStorage.getItem("mesArticles");
    articles = articles.split(',')


}
articles.forEach(article => {
    randomColor = Math.floor(Math.random() * 5);
    console.log(article);
    posts.innerHTML += `
        <div id="post${countPosts}" class="shadow width pastel${randomColor} raduis d-flex flex-column align-items-center m-2 p-3">
            <div class="text">
                <p>${article}</p>
            </div>
            <button class="btn btn-danger" onclick="resetPost('post${countPosts}')">Supprimer</button>
        </div>
    `;
    countPosts++
});
console.log(articles);
let colors = [
    'rgb(124, 252, 252)',
    'rgb(251, 154, 220)',
    'rgb(154, 251, 161)',
    'rgb(243, 251, 154)',
    'rgb(193, 154, 251)'
];
let randomHeader = Math.floor(Math.random() * 5);
let randomFooter = Math.floor(Math.random() * 5);
header.style.backgroundColor = colors[randomHeader];
footer.style.backgroundColor = colors[randomFooter];

// function show() {

// }

function getForm() {
    let titleError = document.getElementById('titleError');
    randomColor = Math.floor(Math.random() * 5);

    if (title.value == '') {
        titleError.innerHTML = '* Veuillez saisir un titre';
        titleError.style.color = 'red';
        verifForm = false;
    } else {
        verifForm = true;
    }
    if (verifForm == true) {
        articles.push(title.value)
        console.log(articles);
        posts.innerHTML += `
            <div id="post${countPosts}" class="shadow width pastel${randomColor} raduis d-flex flex-column align-items-center m-2 p-3">
                <div class="text">
                    <p>${title.value }</p>
                </div>
                <button class="btn btn-danger" onclick="resetPost('post${countPosts}')">Supprimer</button>
            </div>
        `;
        countPosts++
        localStorage.setItem("mesArticles", articles)
        title.value = '';

    }

}

function clearError(id) {
    let error = document.getElementById(id + 'Error');
    error.innerHTML = '';
}

function resetPost(id) {
    let post = document.getElementById(id)
    articles.splice(post, 1)
    post.remove()
    localStorage.setItem("mesArticles", articles)

}