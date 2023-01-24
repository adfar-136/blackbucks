// var a =10;
// if(a > 10){
//     console.log("A is greater than 10")
// }
// else if(a<10){
//     console.log("Adfar")
// }
// else if(a < 10 && a>=10){
//     console.log("&&")
// }else if(a<10 || a>10){
//     console.log("||")
// }
// else {
//     console.log("else")
// }

// var grade = "C"
// switch(grade){
//     case "A":
//         console.log("A grade");
//         break;
//     case "B":
//         console.log("B Grade");
//         break;
//     case "C":
//         console.log("C Grade");
//         break;
//     case "D":
//         console.log("d Grade");
//         break;
//     default:
//         console.log("Default")
// }
// var a = [1,2,3,4,5,6,7,8,9,10]
// for(let i =1;i < a.length;i++){
//     console.log(a[i-1])
// }
// var a = [1,2,3,4,5,6,7,8,9,10]
// let n = 0;
// while(n<a.length){
//     console.log(a[n])
//     n++
// }
// let i = 100
// do{
//     console.log("Adfar")
//     i++
// } while(i<=10)

// var a = [1,6,7,'a','b']
// console.log(a)
// a.push(34,'c','g','t')
// console.log(a)
// a.pop()
// console.log(a)
//array.slice(start,end) to extract 
//some part of your array and create a new array out of it
// var a = [1,2,3,4,5,6,7,8,9]
// var b = a.slice(3)
// console.log(b)
// array.splice(start,delete,elm1,elm,elm3)

// var a = [3,4,5,1,56,45,26]
// console.log(a)
// a.splice(2,3,23,49,99,100)
// console.log(a)

// console.log(arr.length)
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(let i of arr){
//     var adf = [i*2]
//     console.log(adf)
// }
// var arr= [-3,-5,-32,1,2,3,4,5,6]
// var arr1 = arr.map(function(x){
//    if(x>0){
//     return x
//    }
  
// })
// console.log(arr1)
// var arr= [-3,-4,-5,-32,0,1,2,3,4,5,6]

// var arr1=[]
// for(let x =0;x<arr.length;x++){
//     if(arr[x]>0){
//         arr1.push(arr[x])  
//     }
// }
// console.log(arr1)
// var arr2 = arr.filter(function(x){
//     return x>0
// })
// console.log(arr2)
// var a = [-120,-3,-32,-311,4,8,0,1,5.2,8.1]
// console.log(a.sort(
//     function(a,b){
//         return a-b
//     }
// ))
// function add(a,b,c){
//     console.log(`${a} + ${b} is ${a+b}`)
//     c()
// }
// add(4,5,function adfar(){
//     console.log("adfar")
// })
// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// })
// // setInterval(()=>{
// //     console.log("3")
// // },(1000))
// console.log("4")

// var num = 2;
// function double(x){
//     var sum = x*x
//  return sum
// }
// var newnum = double(4)
// console.log(newnum)

//objects in js

// let adfar = {
//     name : "Adfar Rssheed",
//     age : 25,
//     skills : ["HTML","CSS","JS","React"]
// }
// console.log(adfar)

// adfar.skills.map((x)=>{
//     console.log(x)
// })

// var adfar = new Object()
// adfar.name = "Adfar Rasheed"
// adfar.age = 25;
// adfar.skills = ["HTML","CSS","JS","React"]
// console.log(adfar)

// let adfar = {
//     name : "Adfar Rssheed",
//     age : 25,
//     skills : ["HTML","CSS","JS","React"]
// }
// // Objects are mutable

// adfar.age = 26;
// adfar.skills = ["HTML","CSS","JS","React","Nodejs"]
// console.log(adfar)

// for in loop => loop through the properties of an object
// let adfar = {
//     name : "Adfar Rssheed",
//     age : 25,
//     skills : ["HTML","CSS","JS","React"]
// }
// for (let x in adfar){
//     console.log(adfar[x])
// }


// delete a property from an object => delete keyword

// let adfar = {
//     name : "Adfar Rssheed",
//     age : 25,
//     skills : ["HTML","CSS","JS","React"]
// }

// delete adfar.age 
// console.log(adfar)

// let myobj = {
//     name : "Adfar Rasheed",
//     age : 25,
//     Skills : {
//         coding:"React",
//         Art : "Paint",
//         Driving : "Cars"
//     }
// }

// console.log(myobj.Skills.Art)


//this keyword => refers to different objects how it is used
//the this keyword refer to the object it belongs to

//methods

// let name = "Adfar Rasheed";
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// const adfar = {
//     name : "Adfar",
//     age : 25,
//     skill:"HTML"
// }
// var keys = Object.keys(adfar)
// console.log(keys)

// var values = Object.values(adfar)
// console.log(values)

const adfar = {
    name : "Adfar",
    age : 25,
    skill:"HTML"
}
var stringy= JSON.stringify(adfar)
console.log(stringy)
// adfar.age  = 34;
// console.log(adfar)


// HTML or JS DOM