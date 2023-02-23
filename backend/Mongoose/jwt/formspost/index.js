const express = require("express")
const bodyParser = require("body-parser")
const { ConnectMongoose, User } = require("./database")
const app = express()
const ejs =require("ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
ConnectMongoose()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/register",async (req,res)=>{
    const user =await User.findOne({email:req.body.email})
    if(user) return res.status(400).send("User already exists")
    const newUser =await User.create(req.body)
    res.status(201).send(newUser)
})
app.listen(3000,()=>{
    console.log("listening to port 3000")
})