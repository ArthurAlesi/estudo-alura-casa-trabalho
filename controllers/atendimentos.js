const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => { // res.send('<h1>titulo</h1> voce esta na rota de get')
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {// console.log(req.params)
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id,res)
    })

    app.post('/atendimentos',
        (req, res) => {
            const atendimento = req.body

            Atendimento.adiciona(atendimento, res)
    })


    app.patch('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id,valores,res)
    })
    
    app.delete('/atendimentos/:id', (req,res)=> {
        const id = parseInt(req.params.buscaPorId)
    })

}