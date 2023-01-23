const express = require("express") ;

const path = require("path") ;
const app = express() ;

const homePageRoutes = require("./routes/public/home") ;
const productRoutes = require("./routes/product/productRoutes") ;


//define middlewares

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//setup express httprequest data parser middleware


//parsa application/x-www-form-urlencoded e.g( web form data)

app.use(express.urlencoded({extended:false})) ;



//set folder named public  as the source folder for all static content
app.use("/static", express.static(path.join(__dirname ,"public"))) ;


//setup routes for homepage
app.use("/" ,homePageRoutes) ; 


//setUp routes for Product pages 

app.use("/prodmgt/product" , productRoutes ) ;  //prodmgt/product/new



app.get((req, res) => {
        console.log(`Responding with the 404 Error page`);
        res.status(404);
        res.sendFile(path.join(__dirname, "views", "404.html"));
    });
    





const PORT_NUMBER = 3030 ;


app.listen(PORT_NUMBER , ()=>console.log(`Listening on port ${PORT_NUMBER}......`)); 




