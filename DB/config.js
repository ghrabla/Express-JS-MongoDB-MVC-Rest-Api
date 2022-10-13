require('dotenv').config();
const mongoose =  require("mongoose");
mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));