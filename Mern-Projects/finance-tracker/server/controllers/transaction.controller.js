const Transaction = require("../models/transaction.model")
const jwt = require("jsonwebtoken");

module.exports.TransactionTest = (req, res) => {
    res.json({msg:"Working"})
}

module.exports.findAllTransactions = (req, res)=>{
    Transaction.find()
        .then(allTransactions=>{
            res.json({results: allTransactions})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.createTransaction = (req, res) => {
    
    // req.body represents form information
    Transaction.create(req.body)
        .then(newlyCreatedTransaction=>{
            res.json({results:newlyCreatedTransaction})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })      
}

module.exports.findOneTransaction = (req, res) => {
    Transaction.findOne({_id:req.params.id})
        .then(foundTransaction=>{
            res.json({results:foundTransaction})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.updateTransaction = (req, res) => {
    Transaction.findOneAndUpdate(
        {_id:req.params.id},//specify which Transaction to update
        req.body,//specify the form information to update the Transaction with
        {new:true,runValidators:true}
    )
        .then(updatedTransaction => {
            res.json({result:updatedTransaction});
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.deleteTransaction = (req, res) => {
    Transaction.deleteOne({_id:req.params.id})
        .then(deletedTransaction => {
            res.json({reults:deletedTransaction})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

