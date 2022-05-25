const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"First name is required"]
    },
    lastName: {
        type: String,
        required: [true,"Last name is required"]
    },
    email: {
        type: String,
        required: [true,"Email address is required"],
        validate : {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test (val), //tests the value from form with this regular expression pattern to validate if the pattern is in an email format
            message: 'Please enter a valid email',
        }
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        minLength: [8,"Password must be at least 8 characters"],
    },
},{timestamps:true});

// create a virtual field called "confirm" that is used just to validate the password matches confirm--> the getter and settr above are just creating temporary fields for _confirm
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );  

//before (pre) running the other validations on the model the user to the db the user to the db, validate the user objects password mathces. If they don't match, this.invalidate() will create a validation error message'
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();//after the above process is done, go to the usual next step
});

//before  (pre) saving the user to the db (this means we passed the  validations), hsh the user password(encrypt it)
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
  });

module.exports = mongoose.model('User', UserSchema);