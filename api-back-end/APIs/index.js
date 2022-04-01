// const express = require('express')

// const app = express()

// app.listen('3000')

//Para acessos GET
// app.route('/').get((req, res) => res.send("index"))
// app.route('/pagina').get((req, res) => res.send("página"))
//-------------------------------------------------------


//Para acesso POST
//middleware
// app.use(express.json())
// app.route('/').post((req, res) => res.send(req.body))
//-------------------------------------------------------


//Para acesso PUT
//middleware
// app.use(express.json())
// let author = "Cleston"
// app.route('/').get((req,res) => res.send(author))
// app.route('/').put((req,res) => {
//     author = req.body.author
//     res.send(author)
// })

//Para acesso DELETE
// app.route('/:identificador').delete((req,res) => {
//     res.send(req.params.identificador)
// })


//---------------------------------------------------------
// Utilizando parâmetros nas requisições
//BODY PARAMS
//middleware
// app.use(express.json())
// app.route('/').post((req, res) => {
//     const { campo1, campo2 } = req.body
//     res.send(`espaço1: ${campo1} e espaço2: ${campo2}`)
// })

//ROUTE PARAMS
// app.route('/').get((req, res) => res.send("página"))
// app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
// app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))
// 
//Testar no insomnia
// localhost:3000/identidade/teste

//Query Params
// app.route('/').get((req, res) => res.send(req.query.nome))
// app.route('/about/user').get((req, res) => res.send(req.query))
// app.route('/about/user').get((req, res) => res.send(req.query.id))
//Testar no insomnia
// localhost:3000/
// localhost:3000/about/user?nome=teste
// localhost:3000/about/user?nome=teste&id=123

//API do github
//https://api.github.com/users/jcleston


const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

//Consumindo com axios
app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/jcleston')
    .then(result => res.send(`<img src="${result.data.avatar_url}">`))
    .catch(error => console.error(error))
})