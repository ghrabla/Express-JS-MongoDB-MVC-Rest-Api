require('dotenv').config();
const mongoose =  require("mongoose");

const connect = () => {
    mongoose.connect(process.env.mongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));
}

module.exports = connect();