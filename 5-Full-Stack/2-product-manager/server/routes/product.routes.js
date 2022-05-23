const ProductController = require("../controllers/product.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/products/test",ProductController.ProductTest);
    app.get("/api/products",ProductController.findAllProducts);
    app.post("/api/products/new",ProductController.createProduct);
    //find a random Product
    app.get("/api/products/random", ProductController.findRandomProduct);
    app.get("/api/products/:id",ProductController.findOneProduct);
    app.put("/api/products/update/:id",ProductController.updateProduct);
    app.delete("/api/products/delete/:id",ProductController.deleteProduct);
}