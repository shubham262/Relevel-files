//Asynchronous
//non blocking programming priciple


//synchronus nature--> javascript

// for(let i=0;i<10000;i++){
//     console.log("hi")
// }
// // blocking codde
// console.log("done printing")


///asynchronous
//callbacks
//promises
//async/await


//
//asynchormus
// setTimeout(function() {
//     for(let i=0;i<10000;i++){
//         console.log("hi")
//     }
// }, 2000);
// console.log("done printing")


//calll back
// it is passde as an argue ment or as accepted as parameter
//a function that exexcutes when another fucntion execution is finished

//higher order functions
//  call back function alone cannot achieve asynchronus 


// var obj={
//     name:"Shubham",
//     pass:123,
//     verification:1234,
// }


//login application
//enter datails
//then check whther the entered details is corect       
//verification
//user is authenticatede



// function sigin(userId,password,func1){
// setTimeout(() => {
//     if(userId===obj.name && password===obj.pass){    
//         console.log("Entered user id and password is correct")
//         func1(1234,authenticated)
//     }
//     else{
//         console.log("Entered user id and password is incorrect")
//     }
// }, 4000);
// }

// function verify(code,func2){
//    setTimeout(() => {
//     if(code===obj.verification){
//         console.log("Entered code  is correct")      
//         func2()
//     }
//     else{
//         console.log("Entered code  is incorrect")    
//     }
//    }, 5000);
// }

// function authenticated(){

//     setTimeout(() => {
//         console.log("User is authenticated")
//     }, 1000);
// }

// sigin("Shubham",123,verify)



var obj={
    name:"Shubham",
    pass:123,
    verification:1234,
}


// function sigin(userId,password,func1){
// setTimeout(() => {
//     if(userId===obj.name && password===obj.pass){    
//         console.log("Entered user id and password is correct")
//         console.log(func1)
//         func1(1234)
//     }
//     else{
//         console.log("Entered user id and password is incorrect")
//     }
// }, 4000);
// }

// function verify(code,func2){
//    setTimeout(() => {
//     if(code===obj.verification){
//         console.log("Entered code  is correct")      
//         console.log(func2)
//         func2()
//     }
//     else{
//         console.log("Entered code  is incorrect")    
//     }
//    }, 5000);
// }

// function authenticated(){

//     setTimeout(() => {
//         console.log("User is authenticated")
//     }, 1000);
// }

// sigin("Shubham",123,function(code){
//     verify(code,function(){
//         authenticated()
//     })
// })


// callback hell== make code difficult to understand    


//promises
//a simple object  used for  multiple asynchronous operations

//there 2 ways to create promises
//constructor function
//by creating objects

//syntax
//successfull
//unsuccessfull
//promise is pending

// website
//loads=true
//loads=false
// var obj={
//     name:"Shubham",
//     pass:123,
//     verification:1234,
// }

// var loading=true


// var a=new Promise(function(resolve, reject){// using objects to create promise
//     if(loading){
//         resolve("Website is loaded");
//     }
//     else{
//         reject("Website is not loaded")
//     }

// })


// function sigin(userId,password){

//     return new Promise(function(resolve, reject){    
//         setTimeout(() => {
//             if(userId===obj.name && password===obj.pass){
//                resolve("Entered user id and password is correct")
//                 // console.log(func1)
//                 // func1(1234)
//             }
//             else{
//                 reject("Entered user id and password is incorrect")
//             }
//         }, 4000);
//     })

// }

// function verify(code){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(code===obj.verification){
//             resolve("Entered code  is correct")      
//             // console.log(func2)
//             // func2()
//         }
//         else{
//            reject("Entered code  is incorrect")      
//         }
//        }, 5000);
//   })


// }

// function authenticated(){
//    return  new Promise((resolve, reject) => {        
//         setTimeout(() => {
//            resolve("User is authenticated")
//         }, 1000);
//     })

// }

// a.then((res)=>{
// console.log(res)
//  return sigin("Shubham",13)
// }).then((siginresponse)=>{
//     console.log(siginresponse)
//     return verify(1234);
// }).then((verresponse)=>{
// console.log(verresponse)
// return authenticated()
// }).then((kuchbi)=>{
// console.log(kuchbi)
// }).catch((error)=>{
//     console.log(error)
// })

//promises hell

