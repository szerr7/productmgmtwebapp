"use strict" ;


const mysql = require("mysql2") ;

const dbConfig = require("./dbConfig") ; 

const dbConnectionMgr = (function(dbConfig){



//MAKES and returns connection pool using the 
const getConnection = function(){
                
        return mysql.createPool(dbConfig) ;


        }

        return{

                getConnection :getConnection    
        }




})(dbConfig) ;


module.exports = dbConnectionMgr ; 