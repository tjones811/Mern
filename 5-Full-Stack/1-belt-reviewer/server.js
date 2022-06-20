const express = require("express");//import express so we can use express features

const cors = require("cors");//import CORS- cross orign resource sharing

const app = express(); // create our app variable which is an instance of express instance
const port = 8000; //declaring a port for the backend api to run in(localhost:8000)

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json());//lets our app convert form info into json
app.use(express.urlencoded({extended:true}));//lets our app parse form information
app.use(cors());//enable cors so that we can share resources back and forth between the backend and the frontend


require('./server/config/mongoose.config')


//routes here-MAKE SURE ROUTES IMPORT IS BELOW ALL APP.USE COMMANDS ABOVE
require('./server/routes/ninja.routes')(app);




//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port,()=>console.log(`Listening on port ${port}`));
