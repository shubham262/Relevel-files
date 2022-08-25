const express=require("express")
const app=express();

const { Sequelize } = require('sequelize');
const db=require("./models")
const {People}=require("./models");

//promise based ORM
app.get("/",function(req,res){

    res.send("Welcome to our page. If you want to create account use this url:/create?Name=desiredname&pass=123")

})
app.get('/create',function(req,res){

    async function hi(){
    var namequery=req.query.Name
    var passquery=req.query.pass
        await People.create({/// people . creta if it does not eist
            name:namequery,
            password:passquery,
        }).then(()=>{
            console.log("Account is added")
        }).catch((error)=>{
            console.log(error);
        })

        const user=await People.findAll();
        res.send(user);
    
    }
    hi()
   

})

app.get("/login",function(req,res){

    async function hi(){
    var extrname=req.query.Name

    var extrpass=req.query.pass
    const user=await People.findAll({
        where:{
            name:extrname,
            password:extrpass
        }
    })
    console.log(user.name)
    if(user.length>0){
        res.send(`You are authenticated`)
    }else{
        res.send("Invalid username or password")
    }

}
hi()
})

db.sequelize.sync().then((req)=>{
    app.listen(3000,function(req,res){
        console.log("server started at port 3000")
    })
})


//drop
//delete
//create
//select