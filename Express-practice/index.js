const express = require('express')
const app = express()
let port = 8080
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"/views"))

app.listen(port,()=>{
    console.log("app is listening on port" + port)
})
app.get('/',(req,res)=>{
    res.render('home.ejs')
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