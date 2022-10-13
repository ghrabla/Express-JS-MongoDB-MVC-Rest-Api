const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const articleSchema = Schema({

    title:{
        type: String,
        required: true,
    },

    body:{
        type: String,
        required: true,
    },

    article_image: {
        type: String,
        required: false,
    },

    date:{
        type: Date,
        default: Date.now(),
    }

});


module.exports = Article = mongoose.model("Article", articleSchema);