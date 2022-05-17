let header = document.getElementById('header');
let footer = document.getElementById('footer');
let title = document.getElementById('title');
let posts = document.getElementById('posts')
let verifForm = true;
let myArray = []
let articlesStr = localStorage.getItem("mesArticles");
let articles = articlesStr.split(',')
let countPosts = 0;
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

function show() {
    articles.forEach(article => {
        let randomColor = Math.floor(Math.random() * 5);
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
}

function getForm() {
    let titleError = document.getElementById('titleError');

    if (title.value == '') {
        titleError.innerHTML = '* Veuillez saisir un titre';
        titleError.style.color = 'red';
        verifForm = false;
    } else {
        verifForm = true;
    }
    if (verifForm == true) {
        myArray.push(title.value)
        localStorage.setItem("mesArticles", myArray)
        title.value = '';
        console.log(myArray);
    }

}

function clearError(id) {
    let error = document.getElementById(id + 'Error');
    error.innerHTML = '';
}

function resetPost(id) {
    let post = document.getElementById(id)
    post.remove()
    localStorage.setItem("mesArticles", articles)

}