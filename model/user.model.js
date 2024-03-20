

const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre('save', async function () {
    try {
         var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);
        user.password = hashpass;

    } catch (error) {
        console.error("Error hashing password:", error);
        // Handle the error appropriately (e.g., throw it, log it, etc.)
    }
    
});

const UserModel = db.model('user', userSchema);

module.exports = UserModel;
