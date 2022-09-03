
//module.exports
//exports
const Product=require('../models')
const {Sequelize}=require('sequelize')

exports.getPage=async function(req,res){
    res.send("Welcome to our page")
}

//post request
exports.createNewProducts=async function(req,res){
    console.log(req.body)
    await Product.create(req.body)

    res.send("Value addde to table")
}

