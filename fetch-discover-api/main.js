const url="http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => console.log(response.json))
    .catch(error => console.error(error))
}