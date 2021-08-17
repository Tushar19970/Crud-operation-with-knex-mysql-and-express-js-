const express = require('express')
const app = express()
app.use(express.json())

const home = require('./routes/route')
app.use('/', home)
app.listen(2000,() => {
    console.log("connected")
})
