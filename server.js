const express=require('express');
const app=require('./app')
const dotenv=require('dotenv')
const db=require('./models')
const {Sequelize}=require('sequelize')
dotenv.config({path:"./config/config.env"})
// this is our main page for the server



db.sequelize.sync().then((req)=>{
    app.listen(process.env.PORT,function(req,res){
        console.log(`Server started at port ${process.env.PORT}`)
    })
})
