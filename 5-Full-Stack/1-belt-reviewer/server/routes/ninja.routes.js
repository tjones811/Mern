const NinjaController = require("../controllers/ninja.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/ninjas/test",NinjaController.NinjaTest);
    app.get("/api/ninjas",NinjaController.findAllNinjas);
    app.post("/api/ninjas/new",NinjaController.createNinja);
    //find a random Ninja
    app.get("/api/ninjas/random", NinjaController.findRandomNinja);
    app.get("/api/ninjas/:id",NinjaController.findOneNinja);
    app.put("/api/ninjas/update/:id",NinjaController.updateNinja);
    app.delete("/api/ninjas/delete/:id",NinjaController.deleteNinja);
}