const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    firstname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    // profile:String
    // profile:[]
    // profile1: String,
    // profile2: [],
    password: String
}, { timestamps: true })

module.exports = model('User', userSchema)