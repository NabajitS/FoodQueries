const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';

const APP_ID = 'ad58f08f';
const APP_KEY = '79b0c23e20781fe83a1dc07cb61acf07';


// fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apikey=3cf6dfecc3f5428f80e68eeae72289fd&maxFat=25&number=2`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // generateHTML(data.hits)
//         // console.log(data);
//         // console.log(data.hits)
//     })



searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);

    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`)
        .then(response => response.json())
        .then(data => {
            generateHTML(data.hits)
            console.log(data)
            console.log(data.hits)
            console.log(data.hits[0].recipe.image)
        })
})


function generateHTML(results) {

    results.forEach(function (result, i) {
        itemHTML = `            
        <div class="search-result">
        <div class="item">
            <img src="${results[i].recipe.image}" alt="">
            <div class="flex-container">
                <h1 class = 'title'>${results[i].recipe.label}</h1>
                <a class = "view-button" href="${results[i].recipe.url}" target = "_blank">View Recipe</a>
            </div>
        </div>
        `
        searchResultDiv.insertAdjacentHTML('afterbegin', itemHTML)
    })

    console.log(results);
}

