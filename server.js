const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello There")
})

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("started listening on port " + process.env.PORT)
})