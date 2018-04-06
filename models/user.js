var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//schema for new user registeration
var userSchema = mongoose.Schema({
    firstname: {
        'type': String,
        'required': true
    },
    lastname: {
        'type': String,
        'required': true
    },
    email: {
        'type': String,
        'unique': true,
        'required': true
    },
    category: {
        'type': String,
        'default': 'service provider'
    },
    password: String,
    profile: String,
    reset_password_token: String,
    reset_password_expires: Date
});
module.exports = mongoose.model('User', userSchema);