// const http = require("http")
// http.createServer((request,response)=>{
//     response.write("Adfar Rashid")
//     response.end()

// }).listen(3000)
const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    var data = fs.readFileSync("adfar.txt")
 if(req.url === "/"){
    res.end("Welcome to your Home Page")
 } else if (req.url === "/about"){
    res.end("Welcome to your About Page")
 }else if(req.url === "/contact"){
    res.end("Welcome to Your Contact Page")
 } else if(req.url === "/adfar"){
     res.end(data)
 } else {
    res.end("<h1>404 Error Page</h1><p>Welcome to error page</p><small>Adfar Rashid Error page</small>")
    
 }
}) 
server.listen(8000,()=>{
    console.log("listening to 8000 port")
})