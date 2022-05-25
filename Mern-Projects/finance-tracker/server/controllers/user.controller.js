const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


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
        User.create(req.body)
        .then(user => {
            //when the .then() happens that means that the user from thr form was successfully created and is stored in that variable "user" which has info about the user that was just put into the db, including the field_id
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            
            //respond with a cookie called "usertoken" which contains the JWT from the above called userTokenJWT AND also responded with json with info about the user who just got created
            res
                .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    }

    login = async(req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if(user === null) {
            // email not found in users collection
            return res.json({ msg: "User not found"});
        }
    
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
        if(!correctPassword) {
            // password wasn't a match!
            return res.json({ msg: "Password is incorrect"});
        }
    
        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
    
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    }

    logout= (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}

module.exports = new UserController();