const url = "http://localhost:5500/api"

//GET
function getUsers(){
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

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.user.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

getUsers()
getUser(1)

const newUser = {
    name: "teste",
    avatar: "https://picsum.photos/200/300",
    city: "teste2"
}

// addNewUser()