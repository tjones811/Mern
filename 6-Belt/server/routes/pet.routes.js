const PetController = require("../controllers/pet.controller")

//Remember "/" before "api"
module.exports = (app) => {
    app.get("/api/pets/test",PetController.PetTest);
    app.get("/api/pets",PetController.findAllPets);
    app.post("/api/pets/new",PetController.createPet);
    //find a random Pet
    app.get("/api/pets/random", PetController.findRandomPet);
    app.get("/api/pets/:id",PetController.findOnePet);
    app.put("/api/pets/update/:id",PetController.updatePet);
    app.delete("/api/pets/delete/:id",PetController.deletePet);
}