// requiring features
require("./DB/config")
require('dotenv').config();
const express = require("express")
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const cors = require("cors"); 
const router = require("./routes/admin");
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
 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
if (req.method == "OPTIONS") {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  return res.status(200).json({});
}

next();
});
// for testing index page 
// app.get("/", (req, res) => {
//     res.send(`<h1>Hello!</h1>`)
// });

// node js apperror class (error) extanding  
app.all("*", (req, res, next) => { 
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
 
// using errors handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`); 
});
 

module.exports = app;