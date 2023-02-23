const express = require("express")
const app = express()
const userModel = require("./database")
const {hashSync,compareSync} = require("bcrypt")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/register",(req,res)=>{
    const user = new userModel({
        username:req.body.username,
        password : hashSync(req.body.password,10)
        
    })
    user.save().then(user =>{
        res.send({
            success : true,
            message : "User Created Successfully"
        })
    }).catch(err=>{
        res.send({
            success : false,
            message : "something went wrong"
        })
    })
})
app.post("/login",(req,res)=>{
   userModel.findOne({username:req.body.username}).then(user=>{
    if(!user){
        return res.status(401).send({
            success : false,
            message : "could not found the user"
        })
    }
    if(!compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success : false,
            message:"Incorrect Password"
        })
    }
    res.send("okay")
   })
})
app.listen(5000,()=>{
    console.log("listen to 5000 port")
})