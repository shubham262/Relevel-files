const express=require("express")
const app=express();

const { Sequelize } = require('sequelize');
const db=require("./models")

//promise based ORM
db.sequelize.sync().then((req)=>{
    app.listen(3000,function(req,res){
        console.log("server started at port 3000")
    })
})
