const express=require('express')
const app = require('../app')
const {getPage,createNewProducts}=require("../controllers/productControllers")
const router=express.Router()// creating a new module that will hold all the product routess.



//get //post //put //dry
//landing page
router.route("/products").get(getPage)
//create products
router.route("/products/new").post(createNewProducts)



//create products
//get all products
//get specific product
//update a product
//delete a product
module.exports=router;