var express = require("express")
var app = express()
app.set("view engine","ejs")
// app.set("view engine","hbs")
app.get("/",(req,res)=>{
    // res.write("<h1>Home Page</h1>")
    // res.write("<h1>Home Page</h1>")
    // res.write("<h1>Home Page</h1>")
    // res.send("<h1>Home Page</h1><h1>Home Page</h1><h1>Home Page</h1>")
    res.render("index")
})
var projects = {
    name:"Adfar",
    skill : "react",
    age:25
}
app.get("/demo",(req,res)=>{
    res.render("demo",{projects:projects})
})
app.get("/about",(req,res)=>{
    res.send("Welcome to About Page")
})
app.get("/obj",(req,res)=>{
    res.json({
        id:1,
        name:"Adfar"
    })
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact Page")
})
app.get("/adfar",(req,res)=>{
    res.send("Welcome to adfar Page")
})
app.listen(5000,()=>{
    console.log("Listening to port 5000")
})