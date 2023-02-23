const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/black")
const userSchema = mongoose.Schema({
    username:String,
    password:String
})
const userModel = mongoose.model("Users",userSchema)
module.exports = userModel