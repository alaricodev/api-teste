const express = require('express'); // importando o express
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express(); // instância do express


// TRAZENDO AS ROTAS PARA AS VARIÁVEIS PARA DEFINIR O CAMINHO
const rotaProdutos = require('./routes/produtos.js');
const rotaPedidos = require('./routes/pedidos.js');

app.use(morgan('dev')); // Faz o log de todos os pedidos no terminal
app.use(bodyParser.urlencoded({extended: false})); // apenas dados simples
app.use(bodyParser.json()); // somente formato json vai ser aceito

app.use('/produtos', rotaProdutos)
app.use('/pedidos', rotaPedidos)


app.use((req, res, next) => {
    const erro = new Error('Não encontradado')
    erro.status(404);
    next(erro)

}); // ROTA de quando não se acha outras, tratamento de erro, usa-se porque não é definido rota nenhuma no escopo, logo entra aqui.

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro : {
            msg: error.message
        }
    })
})

module.exports = app