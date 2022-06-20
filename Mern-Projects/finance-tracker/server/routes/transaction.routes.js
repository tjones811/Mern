const TransactionController = require("../controllers/transaction.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/transactions/test",TransactionController.TransactionTest);
    app.get("/api/transactions",TransactionController.findAllTransactions);
    app.post("/api/transactions/new",TransactionController.createTransaction);
    app.get("/api/transactions/:id",TransactionController.findOneTransaction);
    app.put("/api/transactions/update/:id",TransactionController.updateTransaction);
    app.delete("/api/transactions/delete/:id",TransactionController.deleteTransaction);
}