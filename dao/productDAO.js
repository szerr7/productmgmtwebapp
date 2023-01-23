/**
 * productDAO.JS
 */

"use strict"

//const dbConnectionMgr = require("../db/dbConnectionMgr") ; 

const product = require("../model/product") ; 


const productDAO = (function(){

        const products = [
                new product(1 ,1001 ,"Apple Iphone 14" , 1850.65),
                new product(2 ,1002 ,"Sumsung s20" , 1250.00),
                new product(3 ,1003 ,"Google pixle 7" , 100.05)
        ]; 


        const getProducts = function(){

                return products ;
        } ;

        const saveProduct = function(newProduct){

                products.push(newProduct) ;
          } ;

        return{
                getProducts:getProducts,
                saveProduct:saveProduct
        } ;





})() ;


module.exports = productDAO ; 