const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/blackbucks").then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})
const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student",student)
const adder = ()=>{
 const adfar = new Student({
    name:"ADfar",
    workout:true,
    height:6
 })
 adfar.save()
}
adder()