const express = require('express')
const app = express()
let port = 8080
const path = require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"/views"))
app.use(express.urlencoded({extended : true}))
app.set(express.static(path.join(__dirname,"public")))

let posts = [
    {
        username:'sarfraz',
        content:'I happy in my career'
    },
    {
        username:'sarfraz',
        content:'I happy in my career'
    },
    {
        username:'sarfraz',
        content:'I happy in my career'
    }
]

app.listen(port,()=>{
    console.log("app is listening on port" + port)
})

app.get('/posts',(req,res)=>{
    res.render('home.ejs')
})

app.get('*',(req,res)=>{
    res.send("<h1>sorry content not found</h1>")
})
