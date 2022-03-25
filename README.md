# Módulo1
Formação Fullstack - Introdução

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