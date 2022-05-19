const JokeController = require("../controllers/joke.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/jokes/test",JokeController.apiTest);
    app.get("/api/jokes",JokeController.findAllJokes);
    app.post("/api/jokes/new",JokeController.createJoke);
    //find a random joke
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/:id",JokeController.findOneJoke);
    app.put("/api/jokes/update/:id",JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id",JokeController.deleteJoke);
}