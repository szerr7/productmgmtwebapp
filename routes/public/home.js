/**
 * home.js
 */

"use strict" ;

const express =  require("express") ; 
const path = require("path") ; 


const homePageRouter = express.Router() ; 

//define homepage routes


homePageRouter.get('/' , (req ,res)=>{

        res.sendFile(path.join(__dirname , "../../views" , "index.html")) ;

});



homePageRouter.get('/home' , (req ,res)=>{

        res.sendFile(path.join(__dirname , "../../views" , "index.html")) ;

});

homePageRouter.get('/prodmgt/home' , (req ,res)=>{

        res.sendFile(path.join(__dirname , "../../views" , "index.html")) ;

});



module.exports = homePageRouter ; 

