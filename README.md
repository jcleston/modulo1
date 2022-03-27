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


Menu Geral
<!--ts-->
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

      

    
  * [Autor](#autor)
  * [Minhas Skills](#minhas-skills)
  * [Estou Aprendendo](#estou-aprendendo)
  * [Contatos](#contatos)
<!--te-->
<br /><br />


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

## Na prática
```shell
fetch("https://api.github.com/users/jcleston")
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))
```

## Utilizando Axios
```shell
import axios from "axios";
axios.get('https://api.github.com/users/jcleston')
  .then(res => {
    console.log(res.data);
  });
```

## Utilizando Axios de forma mais legível
```shell
import axios from "axios";
axios
.get("https://api.github.com/users/jcleston")
.then(response => axios.get(response.data.repos_url))
.then(repos => console.log(repos.data))
.catch( error => console.log(error))
```

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

## Trabalhando com APIs

Arquitetura de exemplo

![Arquitetura API](https://raw.githubusercontent.com/jcleston/modulo1/master/imagens/arquitetura-api.png)


## API exemplo simples
```shell
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')
```

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

## Métodos HTTP

<b>GET</b> - A API fornece informações

<b>POST</b> - A API recebe informações que devem ou não ser registradas

<b>DELETE</b> - A API recebe identificadores de registros que devem ser deletados

<b>PUT</b> - A API recebe informações para update de um ou mais registros

<b>PATCH</b> - A API recebe informações para update de um registro


## Insomnia
```shell
#instalação
$ sudo dnf install snapd
$ sudo ln -s /var/lib/snapd/snap /snap
$ sudo snap install insomnia
```
Documentação oficial no link: <a href="https://insomnia.rest/download">https://insomnia.rest</a>


## API Back-End

## Iniciando projeto em NodeJS
```shell
#instalação
$ mkdir APIs
$ cd APIs
$ npm init -y
$ code .
```

















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