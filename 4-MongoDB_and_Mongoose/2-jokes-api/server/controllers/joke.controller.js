const Joke = require("../models/joke.model")


module.exports.apiTest = (req, res) => {
    res.json({msg:"Working"})
}

module.exports.findAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.createJoke = (req, res) => {
    //req.body represents form information
    Joke.create(req.body)
        .then(newlyCreatedJoke=>{
            res.json({results:newlyCreatedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })      
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id:req.params.id})
        .then(foundJoke=>{
            res.json({results:foundJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id:req.params.id},//specify which joke to update
        req.body,//specify the form information to update the joke with
        {new:true,runValidators:true}
    )
        .then(updatedJoke => {
            res.json({result:updatedJoke});
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.id})
        .then(deletedJoke => {
            res.json({reults:deletedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}

module.exports.findRandomJoke = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            //get a random index number from index 0 up to but not including the allJokes.length
            let randomIdx = Math.floor(Math.random()*allJokes.length)

            res.json({results: allJokes[randomIdx]})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error:err})
        })
}