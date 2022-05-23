const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,"Title is required!"],
        minLength:[2,"Title must be at least 2 characters!"]
    },
    price:{
        type: Number,
        required: [true,"Price of the product is required!"],
        min: [0,"Price must be above 0"]
    },
    description:{
        type: String,
        required: [true,"Description of the product is required!"],
        minLength:[5,"Description must be at least 5 characters!"]
    },
},{timestamps:true});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;