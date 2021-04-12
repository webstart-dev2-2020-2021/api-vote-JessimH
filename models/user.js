const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*CREATION DU MODEL USER*/

const userSchema = new Schema({
    username: String,
    password: String,
    email: String
})

const User = mongoose.model('User', userSchema)
module.exports = User