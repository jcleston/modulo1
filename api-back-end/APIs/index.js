const express = require('express')

const app = express()

app.listen('3000')

//Para acessos GET
// app.route('/').get((req, res) => res.send("index"))
// app.route('/pagina').get((req, res) => res.send("página"))
//-------------------------------------------------------


//Para acesso POST
//middleware
app.use(express.json())

// app.route('/').post((req, res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))
//-------------------------------------------------------