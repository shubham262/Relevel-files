//data hiding
//abstraction+encapsultiona
//inheritence
//polymorphism



//creation of objects
// const a={}

//constructor function


// function Objectcreation(names,profession){// start with capital
// //this key word

// this.name=names
// this.occupation=profession


// }

// var a=new Objectcreation("rakesh","doctor");
// var b=new Objectcreation("rakddwcesh","doccwecercor");
// console.log(typeof a,b)

//this key word

//  method:-- this --> references to the executing object
//function:--- this--> refer to window/global object


// let obj={
//     name:"aman",
//     class:10,
// //methods
//     getname(){
//         console.log(this)
//     }
// }

// obj.getname()

// function hi(){
//     console.log(this)
// }
// hi()


// function Objectcreation(names,profession){// start with capital
// //this key word

// this.name=names
// this.occupation=profession


// }
// var a=new Objectcreation("rakesh","doctor");//{}



//  method:-- this --> references to the executing object
//function:--- this--> refer to window/global object

// let obj={
//     name:"aman",
//     class:10,
//     marks:[1,2,3,4],
// //methods
//     getname(){
//         this.marks.forEach(function(item){
//             console.log(this.name+" marks is "+item)
//         },this)
//     }
// }

// obj.getname()

//banking application


// function Banking(name,balance,pin){

//     this.name=name
//     this.accountNO=10000+Math.random()*99999
//     this.balance=balance
//     this.pin=pin

//   this.withdrwaing=function(amount){
//     this.balance-=amount
//   }
//   this.deposit=function(amount){
//     this.balance+=amount
//   }
// }

// Banking.prototype.deposit=function(amount){
//     this.balance+=amount
//   }

// var a=new Banking("Aman",10000,123)
// a.withdrwaing(5000)
// a.deposit(10000)
// // console.log(a)
// function hi(){//function declaration

// }

// var a=function(){//function expression

// }

// class Banking{//class declaration
//         name;
//         accountNO=Math.floor(10000+Math.random()*99999)
//         balance;
//         pin;

//         constructor(name,balance,pin)//  
//         {   this.name=name
//             this.balance=balance
//              this.pin=pin
//         }
       
//         withdrwaing(amount){
//                 this.balance-=amount
//               }
//         deposit(amount){
//                 this.balance+=amount
//               }
            
   
// }



// class Banking{//class declaration
//     name;
//     accountNO=Math.floor(10000+Math.random()*99999)
//     #balance;//private
//     pin;

//     constructor(name,balance,pin)//  
//     {   this.name=name
//         this.#balance=balance
//          this.pin=pin
//     }
   
//     withdrwaing(amount){
//             this.#balance-=amount
//           }
//     deposit(amount){
//             this.#balance+=amount
//           } 
//     setbalnce(amount){this.#balance=amount}
//     getbalnce(){return this.#balance}
        

// }



// function download(url,func){
//     console.log("File started downloading from ",url)
//     setTimeout(()=>{
//         console.log("File downloaded successfully");
//         compress(".\image.jpg")}, 3000)
//  }
// function compress(filepath){
//     console.log("Compressing started",filepath)
//     setTimeout(()=>{
//         console.log("File compressed Sucessfully");
//         upload (".\image.jpg","http.\www.upload.com")}, 2000)
// }
// function upload(filepath,urlupl){
//     console.log("upload Started at : ",filepath)
//     setTimeout(()=>{
//         console.log("File uploaded sucessfully at ", urlupl)}, 1000)
// }
// download("http.\www.dowmloadPics\imagecat.jpg",function(file){
//     compress(file),function(file,url){
//         upload(file,url)}})












// var obj={}
// var a=4/333
// var b=(String(a-Math.floor(a))).split("")
// b.shift()
// b.shift()
// console.log(b)
// for(let i=0;i<b.length;i++){
//     if(obj[b[i]]){
//         obj[b[i]]++
//     }
//     else{
//         obj[b[i]]=1
//     }
// }
// var temp=obj[Object.keys(obj)[0]]
//  var ans=Object.keys(obj).map(function(item){
//     return obj[item]===temp
//  })

// var bool=true
// for(let i=0;i<ans.length;i++){
// bool=bool && ans[i]
// }

//  var recurring=""
//  for(let i=0;i<Object.keys(obj).length;i++){
// recurring+=b[i]
//  }
//  console.log(recurring)
// if(ans){
//     return Math.floor(a)+".("+recurring+")"
// }
// else{
//     return a
// }



