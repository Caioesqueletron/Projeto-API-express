const porta = 3003
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bancodeDados = require('./bancodeDados')

app.use(bodyparser.urlencoded({extended:true}))
app.get('/produtos',(req,res,next)=>{
    res.send(bancodeDados.getProdutos()) // converter para JSON

})
app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancodeDados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})
app.listen(porta,()=>{
    console.log(`Servidor sendo execitado na porta:${porta}. `)
})