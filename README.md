# Módulo1
Formação Fullstack - Introdução 🚀

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

Menu Geral
<!--ts-->
   * [API](#api)
   * [Promisse](#promisse)   
<!--te-->
<br /><br />

## API
```shell
const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(API, res => {
    console.log(res.statusCode)
})
console.log('conectando API')
```

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