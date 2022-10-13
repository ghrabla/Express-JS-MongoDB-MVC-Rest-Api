require('dotenv').config();
const mongoose =  require("mongoose");

const connect = (uri) => {
    mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));
}

module.exports = connect(process.env.mongoURI);