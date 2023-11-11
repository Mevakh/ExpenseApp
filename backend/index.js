const express = require("express")
const cors = require("cors")
const {db} = require("./db/db")
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()


const port = 8000

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

db()
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})


