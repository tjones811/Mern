const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
        minLength:[2,"Name must be at least 2 characters"]
    },
    amount:{
        type: Number,
        required: [true,"Amount is required"]
    },
    date:{
        type: Date,
        required: [true,"Date is required"],
    },
    category:{
        type: String,
        required: [true,"Category is required"],
        
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
},{timestamps:true});

const Transaction = mongoose.model("Transaction",TransactionSchema)
module.exports = Transaction;