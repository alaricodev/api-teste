const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        msg: 'Usando o GET dentro da rota de pedidos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        msg: 'Usando o POST dentro da rota de pedidos'
    });
});

module.exports = router