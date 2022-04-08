const url = "http://localhost:5500/api"

//GET
function getUser(){
    axios.get(url)
    .then(response => {
        // console.log(response.data)
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}


//POST
function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}


getUser()

const newUser = {
    name: "teste",
    avatar: "https://picsum.photos/200/300",
    city: "teste2"
}

addNewUser()