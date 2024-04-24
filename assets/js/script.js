let baseUrl = "https://modul5api.bennielsen.dk/wp-json/wp/v2";
let recipeCategoryId = 3;

let containerEl = document.querySelector('.container');


//få token fra backend
function getToken(){
    let loginInfo = {
        username: 'benj4627',
        password: 'Rummand4627'
    }

    return fetch('https://modul5api.bennielsen.dk/wp-json/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            "Content-type:" : 'application/json'
        }, 
        body: JSON.stringify(loginInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        sessionStorage.setItem('myToken', data.data.token)
    })
    .catch((err) => console.log('fejl:', err));
}

getToken().then(() => getPrivateRecipes());

function getPrivateRecipes(){
    fetch(baseUrl + `posts?visibility=private${recipeCategoryId}` {
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('myToken')
        }
    })
    .then(res => res.json())
    .then((recipes) => {
        console.log(recipes);
    })
    .catch((err) => console.log(err));
}   

