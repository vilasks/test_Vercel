const express = require("express")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(cors())
let port = process.env.PORT || 3000
app.get("/",(req,res)=>{
    res.send("Hello There")
})

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("started listening on port " + port)
})
