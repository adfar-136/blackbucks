const fs = require("fs")
// fs.writeFileSync("adfar.txt","We have started nOdeJS")
// fs.appendFileSync("adfar.txt"," by Adfar Sir")
var data = fs.readFileSync("adfar.txt")
var string_data = data.toString()
console.log(data)