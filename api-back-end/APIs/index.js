const express = require('express')

const app = express()

app.listen('3000')

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
// app.use(express.json())
// let author = "Cleston"
// app.route('/').get((req,res) => res.send(author))
// app.route('/').put((req,res) => {
//     author = req.body.author
//     res.send(author)
// })

//Para acesso DELETE
app.route('/:identificador').delete((req,res) => {
    res.send(req.params.identificador)
})