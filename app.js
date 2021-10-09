const codeBreakerRoute = require('./routes/codeBreakerRoute')
const express = require("express")
const cors = require("cors");

const app = express()

app.use(cors())
app.use('/api/codebreaker', codeBreakerRoute)

module.exports = app