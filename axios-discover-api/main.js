const url = "http://localhost:5500/api"

function getUser(){
    axios.get(url)
    .then(response => {
        // console.log(response.data)
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

getUser()