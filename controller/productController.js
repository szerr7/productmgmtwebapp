/**
 * productController.js
 */

"use strict" ; 

const productDAO = require("../dao/productDAO") ; 
const product = require("../model/product");
const products = require("../model/product");

const  productController = (function(){

const getProducts = function(req ,res){
                return productDAO.getProducts() ;
        }


    const addNewProduct = function(req ,res){
       
        const productId = productDAO.getProducts().length +1 ;

        const productNo = req.body.productNo ; // body...    names in form

        const name =req.body.productName ;

        const unitPrice = req.body.unitPrice ;

        const newProduct = new product(productId ,productNo ,name ,unitPrice) ;

        productDAO.saveProduct(newProduct) ;
} ;       

        
        return {
                getProducts:getProducts,
                addNewProduct:addNewProduct
               
        }




})() ; 

module.exports = productController ; 