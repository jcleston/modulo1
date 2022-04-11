const url = "http://localhost:5500/api"
const newUser = {
    name: "teste",
    avatar: "https://picsum.photos/200/300",
    city: "teste2"
}
const userUpdated = {
    name: "teste3",
    avatar: "https://picsum.photos/200/300",
    city: "Teste 3"
}
//GET
function getUsers() {
    axios.get(url)
        .then(response => {
            // console.log(response.data)
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

//POST
function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

//GET com parâmetro
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userID.textContent = response.data.id
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))
}

//PUT
function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, updateUser)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

//DELETE
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

deleteUser(4)
// updateUser(2, userUpdated)
getUsers()
getUser(5)
// addNewUser(newUser)