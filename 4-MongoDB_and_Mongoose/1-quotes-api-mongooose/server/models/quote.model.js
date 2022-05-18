const mongoose = require('mongoose');

//purpose of this file is to describe how our quotes table(collection) should look like

//instructions for what the table should look like below
const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required"],
        minLength:[5, "Content must be at least 5 characters"]
    },

    author: {
        type: String,
        required: [true, "Author is required"],
        minLength:[2, "Author must be at least 2 characters"]
    },

    rating: {
        type: Number,
        min: [1, "Rating cant be less than 1"],
        max: [10, "Rating cant be greater than 10"],
    }
    
},{timestamps:true});

const Quote = mongoose.model("Quote",QuoteSchema)
module.exports = Quote;