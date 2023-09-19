const mongoose = require('mongoose') 
const UserSchema = new mongoose.Schema({
    username: {
        type: String, required: true,
        min: 5,
        max: 50
    }, password: {
        type: String,
        required: true,
        min: 5
    },
    email: {
        type: String,
        required: true
    },
    RefreshToken: [String]
},{timestamps: true} )
module.exports = mongoose.model('users',UserSchema)