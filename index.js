// requiring features
require("./mongoDB/config");
require('dotenv').config();
const express = require("express");
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const headers = require("./helpers/headers");
const cors = require("cors"); 
const router = require("./routes");
const bodyParser =  require("body-parser");
const app = express();  
const port = process.env.port;   
  
  

//body-parser config;  
//register the enpoints  
app.use(cors())
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded()); 
app.use(bodyParser.urlencoded({extended: false }));  
app.use(router) 
 
// for testing index page 
// app.get("/", (req, res) => {
  //     res.send(`<h1>Hello!</h1>`)
  // });
  
  // node js apperror class (error) extanding  
app.all("*", (req, res, next) => { 
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
  
app.use(headers);
// using errors handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`); 
});
 

module.exports = app;