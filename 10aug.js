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

// //executing your promise
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
//            resolve("User is authenticated")//return statement
          
//         }, 1000);
//     })
    
// }
//.. promise consuming 
// a.then((res)=>{
// console.log(res)//website is loaded
//  return sigin("Shubham",123)

// }).then((siginresponse)=>{
//     console.log(siginresponse)//userid and password is correct.
//     return verify(1234);
// }).then((verresponse)=>{
// console.log(verresponse)//user code is corect
// return authenticated()
// }).then((kuchbi)=>{
// console.log(kuchbi)//user is authenticated
// }).catch((error)=>{
//     console.log(error)
// })

//promises hell



//async and await


// async function hi(){//asynchronous function

//     try {
//         var res=await a;
//         console.log(res)
       
//         var resp2=await sigin("Shubham",123)
//         console.log(resp2)
       
//         var resp3=await verify(123)
//         console.log(resp3)
       
//         var resp4=await authenticated()
//         console.log(resp4)
       

        
//     } catch (rgerger) {
//         console.log(rgerger)
//     }

// return new Promise((resolve, reject) => {
//     reject("rejected code")
// })
// }
// var ans=hi().then((data)=>{
//     console.log(data)



// var a=["a","aaa","b","bb","abab","bbasad"]

///sort according to length
//sorting in lexicographic



// a.sort((b,c)=>b.localeCompare(c))
// console.log(a)
// a.sort((b,c)=>b.length-c.length)
// console.log(a)


// function isRotated(str1, str2)
// {
//     // code here
    
//     var st1=""
//     var st2=""
//     //anticlockwise
//     st1+=str1[0]+str1[1]
    
//     for(let i=2;i<str1.length;i++){
//         st2+=str1[i]
//     }
//     st2+=st1
//     if(st2===str2){
//         return 1
//     }
//     st1=""
//     st2=""
//     st1+=str1[str1.length-2]+str1[str1.length-1]
//     for(let i=0;i<str1.length-2;i++){
//         st2+=str1[i]
//     }
//     st2=st1+st2
//     if(st2===str2){
//         return 1
//     }

//     return 0
    
// }
// console.log(isRotated("geeksforgeeks","geeksforgeeks"))



// function subsets(num,a=String(num).split(""),index=0,temp=[],ans=[]){


//     if(index>=a.length){
//         ans.push(temp.slice())
//         return
//     }

//     temp.push(a[index])
//     subsets(num,a,index+1,temp,ans)
//     temp.pop()
//     subsets(num,a,index+1,temp,ans)

//     return ans
// }
// console.log(subsets(123))



const http=require('http')

const server=http.createServer(function(req,res){

res.write("hello world this is my first nodejs servere")
res.end()
})

server.listen(3000,function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log(`server started on port ${3000}`)
    }
})