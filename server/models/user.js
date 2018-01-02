const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator(value){
                return validator.isEmail(value);
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    // myRecipes : [{

    // }]
},{
    timestamps: true,
});

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.'});

// validatePassword
// compares encrypted password vs. user input (encrypts) and returns boolean
userSchema.statics.validatePassword = function(candidatePassword, hashedPassword){
    return bcrypt.compare(candidatePassword, hashedPassword);
};

// hash before save
// checks if password is modified from current before saving, no modification move on. new or modified, hash and save
userSchema.pre('save',function(next){
    if(!this.isModified('password')){ return next(); }

    const self = this;

    bcrypt.hash(this.password, 10)
        .then(hashed => {
            self.password = hashed;

            next();
        })
        .catch(next);
});

module.exports = mongoose.model('User',userSchema);