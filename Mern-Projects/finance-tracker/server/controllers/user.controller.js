const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { request } = require("express");


class UserController {
    //admin controller features for getting all users
    getAllUsers = (req,res) => {
        User.find()
            .then(allUsers => {
                res.json({results: allUsers})
            })
            .catch(err => {
                res.json({error: err})
            })
    }

    register =   (req, res) => {
        console.log("secret key", process.env.SECRET_KEY)
        User.find({email: req.body.email})
            .then(usersWithEmail => {
                console.log("response when finding user", usersWithEmail)
                if(usersWithEmail.length === 0) {//this means that the email is not yet taken and we can create a user with this email
                    User.create(req.body)
                        .then(user => {
                            //when the .then() happens that means that the user from the form was successfully created and is stored in that variable "user" which has info about the user that was just put into the db, including the field_id
                            const userToken = jwt.sign({
                                id: user._id,
                                firstName: user.firstName
                            }, process.env.SECRET_KEY);
                            
                            //respond with a cookie called "usertoken" which contains the JWT from the above called userTokenJWT AND also responded with json with info about the user who just got created
                            
                                res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                                    httpOnly: true
                                })
                                .json({ msg: "success!", user: user });
                            req.session.user_id = user._id;
                        })
                        .catch(err => res.json(err));
                }
                else{
                    //else --> the email is already taken so we will send back an error message
                    res.json({ errors:{email:{message:"Email already taken!"}}})

                }
            })
            .catch(err =>console.log("error!",err))


        
    }

    login = async(req, res) => {
        const user = await User.findOne({ email: req.body.email }); //see if user exists in db

        if(user === null) {
            // email not found in users collection
            return res.json({ error: "User not found"});
        }
    
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
        if(!correctPassword) {
            // password wasn't a match!
            return res.json({ error: "Password is incorrect"});
        }
    
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id,
            firstName: user.firstName
        }, process.env.SECRET_KEY);
        // console.log(userToken)
        
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
        // req.session.user_id = user._id
        // console.log(req.session)
        // return res.json(user)
    }

    logout= (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
        // req.session = null
    }

    getLoggedInUser = (req, res) => {
        //use the info stored in the cookie to get the id of the logged in user and query thr db to find a user with that id, and return with info about the logged in user
        const decodedJWT = jwt.decode(req.cookies.usertoken,{complete:true})
        //decodedJWT.payload.id
        User.findOne({_id: decodedJWT.payload.id})
        // console.log(req.session)
        // User.findOne({_id: req.session.user_id})

        // .populate({
        //     path: "transactions",
        //     model: "Transaction"
        // })

        // .exec((e,user)=>{
        //     console.log(e,user)
        //     if(e){
        //         return res.json(e);
        //     }
        //     return res.json(user)
        // })
        .then(foundUser=>{
            res.json({results:foundUser})
        })
        .catch(err=>{
            res.json({err})
        })
    }
}

module.exports = new UserController();