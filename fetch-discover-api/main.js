const url = "http://localhost:5500/api"

// GET
function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

// GET com paramêtro
function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

//POST
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console(error))

}

//PUT
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console(error))
}

const newUser = {
    name: "Teste",
    avatar: "https://picsum.photos/200/300",
    city: "asd"
}
addUser(newUser)

const updatedUser = {
    name: "Nome 2",
    avatar: "https://picsum.photos/200/300",
    city: "Cidade 2"
}
updateUser(updatedUser, 9)

getUsers()
getUser(9)