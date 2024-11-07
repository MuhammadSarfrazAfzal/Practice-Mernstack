const express = require('express')
const app = express()
let port = 8080
app.listen(port,()=>{
    console.log("app is listening on port" + port)
})
app.get('/:username/:id',(req,res)=>{
    console.log(req.params)
    let { username,id} = req.params
    res.send(`<h1>You are on @${username} acount</h1>`)
})
app.get('/contact',(req,res)=>{
    console.log(req.query)
    res.send("<h1>contact will bi provided soon</h1>")
})

app.get('*',(req,res)=>{
    res.send("<h1>sorry content not found</h1>")
})
// app.use((req,res)=>{
//     console.log('request recieved')
//     res.send({name:'sarfraz',address:})
// })