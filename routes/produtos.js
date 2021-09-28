const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: "Usando o GET dentro da rota de produtos"
    });
});

router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    res.status(201).send({
        msg: "Inseri um produto",
        produtocriado: req.body.nome
    });
});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto; // recebo os parâmetros
    res.status(200).send({
        msg: `Usando o GET de um produto exclusivo, código ${id}`,
        id: `${id}`
    });
});

module.exports = router;