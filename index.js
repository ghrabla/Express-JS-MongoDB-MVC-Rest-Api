// requiring features
require("./DB/config")
require('dotenv').config();
const express = require("express")
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const cors = require("cors");
const articles = require("./routes/article.routes");
const bodyParser =  require("body-parser");
const app = express();
const port = process.env.port;

 
//body-parser config;
app.use(articles)
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
 
// for testing index page 
// app.get("/", (req, res) => {
//     res.send(`<h1>Hello!</h1>`)
// });

// node js apperror class extanding
app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });

// using errors handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});
 
//register the enpoints
//app.use("/api/v1/articles", articles);