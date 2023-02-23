const mongoose = require("mongoose")
exports.ConnectMongoose =()=>{
    mongoose.connect("mongodb://localhost:27017/db").then(()=>{
        console.log("connected to mongodb")
    }).catch((e)=>{
        console.log(e)
    }) 
}
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
exports.User  = new  mongoose.model("User",UserSchema)