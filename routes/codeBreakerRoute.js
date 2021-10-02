const express = require('express')
const router = express.Router()

const { CodeBreaker } = require('../codeBreaker/codebreaker');
const codeBreaker = new CodeBreaker("1234")

router.get('/guess/:number', (req, res) => {
    const { number } = req.params;
    console.log(number, codeBreaker.secret)
    const response = codeBreaker.guessNumber(number)
    res.send(`🧩 Número ingresado: ${ number } | Respuesta: ${ response } 🧩`)
})

router.get('/setSecret/:secret', (req, res) => {
    const { secret } = req.params;
    codeBreaker.setSecret(secret)
    res.send(`🔑 Nuevo secreto: ${ codeBreaker.secret } 🔑`)
})

module.exports = router