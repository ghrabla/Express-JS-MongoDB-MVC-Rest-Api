const config = require("./DB/config") 
const express = require("express")
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
 
app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});

//register the enpoints
//app.use("/api/v1/articles", articles);