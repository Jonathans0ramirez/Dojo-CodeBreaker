const codeBreakerRoute = require('./routes/codeBreakerRoute')
const express = require("express")

const app = express()

app.use('/api/codebreaker', codeBreakerRoute)

module.exports = app