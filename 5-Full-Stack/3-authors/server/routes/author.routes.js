const AuthorController = require("../controllers/author.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/authors/test",AuthorController.AuthorTest);
    app.get("/api/authors",AuthorController.findAllAuthors);
    app.post("/api/authors/new",AuthorController.createAuthor);
    //find a random Author
    app.get("/api/authors/random", AuthorController.findRandomAuthor);
    app.get("/api/authors/:id",AuthorController.findOneAuthor);
    app.put("/api/authors/update/:id",AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id",AuthorController.deleteAuthor);
}