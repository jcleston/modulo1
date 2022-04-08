<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jcleston/modulo1">  
  <a href="https://github.com/jcleston/modulo1/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jcleston/modulo1">
  </a>
   <a href="https://github.com/jcleston/modulo1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jcleston/modulo1?style=social">
  </a>
  <a href="https://www.linkedin.com/in/janescleston/">
    <img alt="Feito por Janes Cleston" src="https://img.shields.io/badge/feito%20por-Janes%20Cleston-%237519C1">
  </a>
</p>

# Módulo1
Formação Fullstack - Introdução 🚀


## Menu Geral
<!--ts-->
  * [Instalação](#instalação)
    * [Bash](#bash)
    * [NPM](#npm)
    * [NodeJs](#nodejs)
    * [React](#react)
  * [Javascript Assíncrono e Promises](#javascript-assincrono-promises)
    * [Promisse](#promisse)
    * [Na prática](#na-prática)
    * [Utilizando Axios](#utilizando-axios)
    * [Utilizando Axios de forma mais legível](#utilizando-axios-de-forma-mais-legível)
    * [Executando uma promisse em concorrência](#executando-uma-promisse-em-concorrência)
    * [Assync e Await](#assync-e-await)
    * [Assync e Await com fetch](#assync-e-await-com-fetch)
    * [Assync e Await com fetch reduzido](#assync-e-await-com-fetch-reduzido)
    * [Assync e Await com axios](#assync-e-await-com-axios)
    * [Assync e Await com axios reduzido](#assync-e-await-com-axios-reduzido)
    * [API exemplo](#api-exemplo)
  * [Trabalhando com APIs](#trabalhando-com-apis)
    * [API exemplo simples](#api-exemplo-simples)
    * [Json](#json)
    * [Métodos HTTP](#métodos-http)
    * [Insomnia](#insomnia)
    * [API Back-End](#api-back-end)
      * [Iniciando projeto em NodeJS](#iniciando-projeto-em-nodejs)
      * [Express](#express)
      * [Criando server](#criando-server)
      * [Criando rotas](#criando-rotas)
      * [POST](#post)
      * [PUT](#put)
      * [DELETE](#delete)
    * [Parâmetros nas requisições](#parâmetros-nas-requisições)
      * [Body Params](#body-params)
      * [Route Params](#route-params)
      * [Query Params](#query-params)
    * [Consumindo API com NodeJS](#consumindo-api-com-nodejs)
      * [API do github](#api-do-github)
      * [Consumindo com axios](#consumindo-com-axios)      
    * [API no Front-End com Fetch](#api-no-front-end-com-fetch)
      * [Fetch-GET](#fetch-get)
      * [Fetch-GET com parâmentros](#fetch-get-com-parâmentros)
      * [Fetch-POST](#fetch-post)
      * [Fetch-PUT](#fetch-put)
      * [Fetch-DELETE](#fetch-delete)
    * [API no Front-End com Axios](#api-no-front-end-com-axios)
      * [Axios-GET](#axios-get)
      * [Axios-GET com parâmentros](#axios-get-com-parâmentros)
      * [Axios-POST](#axios-post)
      * [Axios-PUT](#axios-put)
      * [Axios-DELETE](#axios-delete)

      
  * [Autor](#autor)
  * [Minhas Skills](#minhas-skills)
  * [Estou Aprendendo](#estou-aprendendo)
  * [Contatos](#contatos)
<!--te-->
<br /><br />

## Instalação
Para iniciar o desenvolvimento, é necessário efetuar as seguintes instalações:

## Bash
```shell
$ sudo apt-get update
$ sudo apt-get install bash
```
## NPM
```shell
$ sudo apt install npm
```
## NodeJs
```shell
$ sudo apt update
$ sudo apt install nodejs
$ node -v
```

## React
```shell
$ npx create-react-app my-app
$ npm start
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Javascript Assíncrono e Promises


## Promisse
```shell
let aceitar = true

console.log('iniciado')
const promessa = new Promise((resolve,
    reject) => {
    if (aceitar) {
        return resolve('aceito')
    }

    return reject('negado')
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizado'))

console.log('aguardando')
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Na prática
```shell
fetch("https://api.github.com/users/jcleston")
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Utilizando Axios
```shell
import axios from "axios";
axios.get('https://api.github.com/users/jcleston')
  .then(res => {
    console.log(res.data);
  });
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Utilizando Axios de forma mais legível
```shell
import axios from "axios";
axios
.get("https://api.github.com/users/jcleston")
.then(response => axios.get(response.data.repos_url))
.then(repos => console.log(repos.data))
.catch( error => console.log(error))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Executando uma promisse em concorrência
```shell
import axios from "axios";

Promise.all([
  axios.get('https://api.github.com/users/jcleston'),
  axios.get('https://api.github.com/users/jcleston/repos')
])
.then( response => {
  console.log(response[0].data.login)
  console.log(response[1].data.length)
})
.catch( err => console.log(err.message))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Assync e Await
```shell
const promessa = new Promise( function( resolve, reject){
  return resolve('ok')
  // return reject('error')
})

async function start(){
  try{
    const result = await promessa
    console.log(result)
  } catch( e){
    console.log(e)
  } finally{
    console.log('rodou')
  }
}

start()
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Assync e Await com fetch
```shell
async function start(){
  const response = await fetch('https://api.github.com/users/jcleston')
  const user = await response.json()
  const reposResponse = await fetch(user.repos_url)
  const repos = await reposResponse.json()
  console.log(repos)
}

start().catch(e => console.log(e))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Assync e Await com fetch reduzido
```shell
async function start(){
  const url = "https://api.github.com/users/jcleston"
  const user = await fetch(url).then(r => r.json())
  const userRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(userRepos)
}
start().catch(e => console.log(e))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Assync e Await com axios
```shell
import axios from 'axios'
async function fetchRepos(){
  try{
    const user = await axios.get('https://api.github.com/users/jcleston')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch(e) {
    console.log(e)
  }
}
fetchRepos()
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Assync e Await com axios reduzido
```shell
import axios from 'axios'
async function fetchRepos() {
  const user = await axios.get('https://api.github.com/users/jcleston')
  const repos = await axios.get(user.data.repos_url)
  console.log(repos.data)
}
fetchRepos().catch((e) => console.log(e))
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Trabalhando com APIs

Arquitetura de exemplo

![Arquitetura API](https://raw.githubusercontent.com/jcleston/modulo1/master/imagens/arquitetura-api.png)


<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## API exemplo simples
```shell
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Json
```shell
#Estrutura padrão
{
  "id": "1",
  "nome": "Nome aqui",
  "descricao": "Descricao aqui",
  "array": [
    "dado1",
    "dado2",
    "dado3"
  ],
  "objeto": {
    "coluna1": "valor1",
    "coluna2": "valor2"
  }
}
```
Documentação oficial no link: <a href="https://www.json.org/json-en.html">www.json.org</a>

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Métodos HTTP

<b>GET</b> - A API fornece informações

<b>POST</b> - A API recebe informações que devem ou não ser registradas

<b>DELETE</b> - A API recebe identificadores de registros que devem ser deletados

<b>PUT</b> - A API recebe informações para update de um ou mais registros

<b>PATCH</b> - A API recebe informações para update de um registro

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Insomnia
```shell
#instalação
$ sudo dnf install snapd
$ sudo ln -s /var/lib/snapd/snap /snap
$ sudo snap install insomnia
```
Documentação oficial no link: <a href="https://insomnia.rest/download">https://insomnia.rest</a>

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## API Back-End

## Iniciando projeto em NodeJS
```shell
#instalação
$ mkdir APIs
$ cd APIs
$ npm init -y
$ code .
```
Preparar o arquivo package.json da seguinte forma:
```shell
{
  "name": "APIs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {},
  "keywords": [],
  "author": "Janes Cleston",
  "license": "ISC"
}
```

## Express
```shell
#instalação
$ npm i express
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>


## Criando server
Criar arquivo index.js na raiz do projeto
```shell
const express = require('express')
const app = express()
app.listen('3000')
```

Para dar start na aplicação:
```shell
#iniciar o server
$ node .

#acessar a página
localhost:3000
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Criando rotas
Edite o arquivo index.js conforme exemplo abaixo
```shell
#adicione as rotas
const express = require('express')
const app = express()
app.listen('3000')
app.route('/').get( (req,res) => res.send("index"))
app.route('/pagina').get( (req,res) => res.send("página"))

#acessar as páginas
localhost:3000
localhost:3000/pagina
```
Obs: dessa forma já temos o GET

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## POST
Edite o arquivo index.js conforme exemplo abaixo
```shell
#adicione as rotas
const express = require('express')
const app = express()
app.listen('3000')
//middleware
app.use(express.json())
app.route('/').post((req, res) => res.send(req.body))

#acessar o insomnia e criar um POST rodando na porta localhost:3000
#configurar o POST para o formato JSON adicionando o conteúdo:
{
	"content": "conteúdo do body"
}

#efetuar o SEND
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## PUT
Edite o arquivo index.js conforme exemplo abaixo
```shell
const express = require('express')
const app = express()
app.listen('3000')
//middleware
app.use(express.json())
let author = "Cleston"
app.route('/').get((req,res) => res.send(author))
app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author)
})

#acessar o insomnia e criar um PUT rodando na porta localhost:3000/
#configurar o PUT para o formato JSON adicionando o conteúdo:
{
	"author": "Janes Cleston"
}

#efetuar o SEND
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## DELETE
Edite o arquivo index.js conforme exemplo abaixo
```shell
const express = require('express')
const app = express()
app.listen('3000')
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})

#acessar o insomnia e criar um DELETE rodando na porta localhost:3000/1234
#efetuar o SEND
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Parâmetros nas requisições
São formas de passarmos informações para o código
exemplos: 
localhost:3000/?parametro=valor
localhost:3000/valor
ou através do body no formato json

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Body Params
Edite o arquivo index.js conforme exemplo abaixo
```shell
//middleware
app.use(express.json())
app.route('/').post((req,res) => {
    const {campo1, campo2} = req.body
    res.send(`espaço1: ${campo1} e espaço2: ${campo2}`)
})
#acessar o insomnia e criar um POST, rodando na porta localhost:3000/
#configurar o POST no BODY para o formato JSON adicionando o conteúdo:
{
	"campo1" : "valor1",
	"campo2" : "valor2",
	"array" : [
		"valor1",
		"valor2"
	]
}
#efetuar o SEND
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Route Params
Edite o arquivo index.js conforme exemplo abaixo
```shell
app.route('/').get((req, res) => res.send("página"))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))

#acessar o insomnia e criar um GET, rodando na porta localhost:3000/
#testar no insomnia
localhost:3000/
localhost:3000/identidade
localhost:3000/identidade/teste
#efetuar o SEND
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Query Params
Edite o arquivo index.js conforme exemplo abaixo
```shell
app.route('/').get((req, res) => res.send(req.query.nome))
app.route('/about/user').get((req, res) => res.send(req.query))
app.route('/about/user').get((req, res) => res.send(req.query.id))

#acessar o insomnia e criar um GET, rodando na porta localhost:3000/
#Testar no insomnia
localhost:3000/
localhost:3000/about/user?nome=teste
localhost:3000/about/user?nome=teste&id=123
#efetuar o SEND
```
<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Consumindo API com NodeJS

## API do github
```shell
#url para acessar a API pública do GitHub
https://api.github.com/users/jcleston
```
<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Consumindo com axios
Edite o arquivo index.js conforme exemplo abaixo
```shell
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

#acessar o insomnia e criar um GET, rodando na porta localhost:3000/
#Testar no insomnia
localhost:3000/
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## API no Front-End com Fetch
Para acessar pipelines HTTP
## Fetch-GET
Edite o arquivo index.js conforme exemplo abaixo
```shell
const express = require('express')
const app = express()
app.listen(5500, () => console.log('Rodando na porta 5500'))
app.use(express.json())
let users = [{
  id: 1,
  name: "Janes Cleston",
  avatar: "https://avatars.githubusercontent.com/u/13952621?s=400&u=a07b6d0bd69af3798bf9cb1d75024851901bfafb&v=4",
  city: "Brasília"
}]

app.route('/api').get((req, res) => res.json({
  users
}))
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
<!DOCTYPE html>
<html>
<head>
    <title>Consumindo API com Fetch</title>
    <script src="./main.js"></script>
</head>
<body>
    <div id="renderApiResult"></div>
</body>
</html>
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
const url="http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

getUsers()
```
<p>Execute o npm start no diretório node-api-discover-main</p>
<p>Execute o index.html com o Live Server</p>

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Fetch-GET com parâmentros

Edite o arquivo index.js conforme exemplo abaixo
```shell
const express = require('express')
const app = express()
app.listen(5500, () => console.log('Rodando na porta 5500'))
app.use(express.json())
let users = [{
  id: 1,
  name: "Janes Cleston",
  avatar: "https://avatars.githubusercontent.com/u/13952621?s=400&u=a07b6d0bd69af3798bf9cb1d75024851901bfafb&v=4",
  city: "Brasília"
}]

app.route('/api').get((req, res) => res.json({
  users
}))

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id
  const user = users.find(user => Number(user.id) === Number(userId))
  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})
```

Edite o arquivo main.js conforme exemplo abaixo
```shell
const url = "http://localhost:5500/api"
let id = 1
function getUser() {
    fetch(`${url}/` + id)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

getUser()
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
<!DOCTYPE html>
<html>
<head>
    <title>Consumindo API com Fetch</title>
    <script src="./main.js"></script>
</head>
<body>
    <p id="userName"></p>
    <p id="userCity"></p>
    <img src="" id="userAvatar">
</body>
</html>
```

<p>Execute o npm start no diretório node-api-discover-main</p>
<p>Execute o index.html com o Live Server</p>

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Fetch-POST

Edite o arquivo index.js conforme exemplo abaixo
```shell
const express = require('express')
const app = express()
app.listen(5500, () => console.log('Rodando na porta 5500'))
app.use(express.json())
let users = [{
  id: 1,
  name: "Janes Cleston",
  avatar: "https://avatars.githubusercontent.com/u/13952621?s=400&u=a07b6d0bd69af3798bf9cb1d75024851901bfafb&v=4",
  city: "Brasília"
}]

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  })
  res.json('Saved user')
})
```

Edite o arquivo main.js conforme exemplo abaixo
```shell
const url = "http://localhost:5500/api"
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

const newUser = {
    name: "Teste",
    avatar: "https://picsum.photos/200/300",
    city: "asd"
}
addUser(newUser)
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
<!DOCTYPE html>
<html>
<head>
    <title>Consumindo API com Fetch</title>
    <script src="./main.js"></script>
</head>
<body>
    <div id="alertApi">ok</div>
    <hr>
    <div id="renderApiResult"></div>
    <hr>
    <p id="userName"></p>
    <p id="userCity"></p>
    <img src="" id="userAvatar">
</body>
</html>
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Fetch-PUT

Edite o arquivo index.js conforme exemplo abaixo
```shell
app.route('/api/:id').put((req, res) => {
  const userId = req.params.id
  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})
```

Edite o arquivo main.js conforme exemplo abaixo
```shell
const url = "http://localhost:5500/api"
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

const updatedUser = {
    name: "Nome 2",
    avatar: "https://picsum.photos/200/300",
    city: "Cidade 2"
}
updateUser(updatedUser, 9)
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
<!DOCTYPE html>
<html>
<head>
    <title>Consumindo API com Fetch</title>
    <script src="./main.js"></script>
</head>
<body>
    <div id="alertApi">ok</div>
    <hr>
    <div id="renderApiResult"></div>
    <hr>
    <p id="userName"></p>
    <p id="userCity"></p>
    <img src="" id="userAvatar">
</body>
</html>
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Fetch-DELETE

Edite o arquivo index.js conforme exemplo abaixo
```shell
app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})
```

Edite o arquivo main.js conforme exemplo abaixo
```shell
const url = "http://localhost:5500/api"
//DELETE
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console(error))
}
deleteUser(11)
```

Edite o arquivo index.html conforme exemplo abaixo
```shell
<!DOCTYPE html>
<html>
<head>
    <title>Consumindo API com Fetch</title>
    <script src="./main.js"></script>
</head>
<body>
    <div id="alertApi">ok</div>
    <hr>
    <div id="renderApiResult"></div>
    <hr>
    <p id="userName"></p>
    <p id="userCity"></p>
    <img src="" id="userAvatar">
</body>
</html>
```

<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## API no Front-End com Axios






<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Axios-GET







<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Axios-GET com parâmentros





<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>


## Axios-POST







<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Axios-PUT






<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Axios-DELETE





<h4 align="right">

[Voltar para o Menu Geral](#menu-geral)
</h4>

## Autor
<img src="https://avatars.githubusercontent.com/u/13952621?v=4" width="100px;" alt=""/>
<br />
<sub><b><a href="https://www.linkedin.com/in/janescleston/" title="LinkedIn">Janes Cleston</a></b></sub> 🚀

Feito com ❤️ por Janes Cleston 👋🏽
<br /><br />

## Minhas Skills
<a href="https://pt.wikipedia.org/wiki/Linux"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/HTML5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://pt.wikipedia.org/wiki/CSS3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.php.net/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.mysql.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://www.postgresql.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://github.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" width="50"/></a>
<br /><br />

## Estou aprendendo
<a href="https://pt-br.reactjs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50"/></a>&nbsp;&nbsp;&nbsp;
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="50"/></a>
<br /><br />

## Contatos
<div>
<a href="https://www.linkedin.com/in/janescleston/" target="blank"><img src="https://img.shields.io/badge/-Janes Cleston-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://www.instagram.com/jcleston/" target="blank"><img src="https://img.shields.io/badge/-Jcleston-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
<a href = "mailto:janes.cleston.silva@gmail.com"><img src="https://img.shields.io/badge/janes.cleston.silva@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://jcleston.github.io/github-page/" target="_blank"><img alt="Website" src="https://img.shields.io/website?style=for-the-badge&url=https%3A%2F%2Fjcleston.github.io%2Fgithub-page%2F"></a>
</div>
<br /><br />