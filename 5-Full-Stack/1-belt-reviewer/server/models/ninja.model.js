const mongoose = require('mongoose');

const NinjaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
        minLength:[2,"Name must be at least 2 characters"]
    },
    numProjects:{
        type: Number,
        required: [true,"Number of projects is required"],
        min: [0,"You can't have less than 0 projects"]
    },
    gradDate:{
        type: Date,
        required: [true,"Date is required"],
        min:['2012-01-01', "Date cant be before 2012"]
    },
    //if you want an optional field, you dont need the required part.Just the type.
    isVeteran:{
        type:Boolean
    }
},{timestamps:true});

const Ninja = mongoose.model("Ninja",NinjaSchema)
module.exports = Ninja;