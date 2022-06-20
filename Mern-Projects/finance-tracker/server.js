const express = require("express");//import express so we can use express features
var session = require('express-session')


const cors = require("cors");//import CORS- cross orign resource sharing

require("dotenv").config();//so that we can read information about our secret key which is stored in the .env file
const cookieParser = require('cookie-parser'); //so that we can understand the cookie information coming in from client (browser)

console.log("SECRET_KEY IS THIS----->", process.env.SECRET_KEY);


const app = express(); // create our app variable which is an instance of express instance
const port = 8000; //declaring a port for the backend api to run in(localhost:8000)
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json());//lets our app convert form info into json
app.use(express.urlencoded({extended:true}));//lets our app parse form information
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));//enable cors so that we can share resources back and forth between the backend and the frontend
app.use(cookieParser());


require('./server/config/mongoose.config')


//routes here-MAKE SURE ROUTES IMPORT IS BELOW ALL APP.USE COMMANDS ABOVE
//require('./server/routes/expense.routes')(app);
require('./server/routes/user.routes')(app);
require('./server/routes/transaction.routes')(app);




//THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port,()=>console.log(`Listening on port ${port}`));
