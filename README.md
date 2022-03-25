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
   * [API](#api)
   * [Promisse](#promisse)
   * [Autor](#autor)
   * [Minhas Skills](#minhas-skills)
   * [Estou Aprendendo](#estou-aprendendo)
   * [Contatos](#contatos)
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