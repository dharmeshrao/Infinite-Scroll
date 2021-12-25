const express = require('express')
const app = express()
const dataController = require('./controllers/data.controller')
app.use(express.json())
app.use('/data',dataController)
module.exports = app;