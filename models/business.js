var mongoose = require('mongoose');


var businessSchema = mongoose.Schema({
    firstname: {
        'type': String
    },
    lastname: {
        'type': String
    },
    category: {
        'type': String
    },
    email: {
        'type': String,
        'unique': true
    },
    password: {
        'type': String
    }
});

module.exports = mongoose.model('business', businessSchema);