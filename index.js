const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.HOST_PORT

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT)