const express = require("express")
const { client } = require('./lib/db')
const dotenv = require('dotenv')

const app = express()
const port = 3500
dotenv.config();

client.on('error',(err)=>console.log('redis connection error ',err))

client.on('connect',()=>console.log('redis connection established'))

app.listen(port,()=>{
    console.log(`server is connected on port ${port}`)
})
