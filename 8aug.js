//promise
// get after 2s: student roll number
//get after 2s:  student name and roll number
// get after 2s: gender


//we can do using promise constructor and promise objects
//using promise objecct


//whenever we create new promise ,we have to make a function to execute
// that we call as executor

// var a=new Promise(function(resolve, reject){
    
//     setTimeout(() => {
//         let roll=[1,2,3]
//         resolve(roll)
//         // reject("sorry no roll number found")
//     }, 2000);
// })

// function  getbiodata(index){
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let biodata={
//             name:"Shubham",
//             age:"21"
//         }

//         resolve(`My Name is ${biodata.name} and my age is ${biodata.age} and the element is ${index}`)
//     // reject("you does not exist")
//     }, 2000,index);
// })
// }
// console.log(a)
// a.then((hi)=>{
// console.log(hi)
// return getbiodata(hi[1]);
// }).then((kuchbhi)=>{
//     console.log(kuchbhi)
// }).catch((hi)=>{
//     console.log(hi)
// })

// async function getinfo(){

//     try {

//         var roll=await a;
//         console.log(roll)
    
//         var name=await getbiodata(roll[2])
//         console.log(name)
        
//     } catch (error) {
//         console.log(error)
//     }

 

// }

// getinfo()

// var obj={
//     name:"Shubham",
//     pass:123,
//     verification:2022,
// }

// var a=new Promise((resolve, reject) => {
//     resolve();
// })


// function sigin(userid,password){
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(userid===obj.name && password===obj.pass){
//             resolve("User id and password is correct")
//         }
//         else{
//             reject("User Id or password is wrong")
//         }
//     }, 2000);
// })

// }

// function verify(code){

//     return new Promise((resolve, reject) => {




//         setTimeout(() => {
//             if(code===obj.verification){
//                 resolve("user entered verification code is correct")
//             }
//             else{
//                 reject("entered code is wrong")
//             }
//         }, 2000);
       
//     })

// }

// a.then(()=>{
//     return sigin("Shubham",123)
// }).then((res)=>{
//     console.log(res)
//     return verify(2022)
// }).then((res)=>{console.log(res)
// console.log("user authenticated")
// }).catch((res)=>{
// console.log(res)

// })

// async function getinfo(){
//     try {
//         var sigres=await sigin("Shubham",23)
//         console.log(sigres)
//         var data=await verify(2022)
//         console.log(data)
//         console.log("user authenticated")

//     } catch (error) {
//         console.log(error)
//         console.log("user not authenticated")
//     }
// }
// getinfo()


// function download(url,tocompress){
//     console.log("File started downloading from ",url)
//     setTimeout(()=>{
//         console.log("File downloaded successfully");
//         console.log(tocompress)
//         tocompress(".\image.jpg")}, 3000)
//  }
// function compress(filepath,toupload){
//     console.log("Compressing started",filepath)
//     setTimeout(()=>{
//         console.log("File compressed Sucessfully");
//         console.log(toupload)
//         toupload (".\image.jpg","http.\www.upload.com")}, 2000)
// }
// function upload(filepath,urlupl){
//     console.log("upload Started at : ",filepath)
//     setTimeout(()=>{
//         console.log("File uploaded sucessfully at ", urlupl)}, 1000)
// }

// download("http.\www.dowmloadPics\imagecat.jpg",function(file){
//     compress(file,function(file,url){
//         upload(file,url)
//     })
// })


// var obj={
//     name:"Shubham",
//     pass:123,
//     verification:2022,
//     otp:0000
// }

// function sigin(userid,password,func){


//     setTimeout(() => {
//         if(userid===obj.name && password===obj.pass){
//             console.log("Entered password and userid is correct")
//             func(2022)
//             }
//             else{
//                 console.log("Entered password and userid is incorrect")
//             }
//     }, 3000);

// }
// function verify(code,func2){


//     setTimeout(() => {
//         if(code===obj.verification){
//             console.log("Entered code  is correct")
//             func2()
//             }
//             else{
//                 console.log("Entered code  is incorrect")
//             }
//     }, 2000);

// }

// function authenticate(){


//     setTimeout(() => {
//       console.log("user is authenticated")
//     }, 1000);

// }
// sigin("Shubham",123,function(code){
//     verify(code,function(){
//         authenticate()
//     })
// })



// setTimeout(function(){
//     for(let i=0;i<10000;i++){
//         console.log("hello")
//     }
      
// }, 2000);




// console.log("hi")