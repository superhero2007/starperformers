var mongoose = require("mongoose");


//schema for user experience
var experienceSchema = mongoose.Schema({
    user_id: {
        'type': String
    },
    company: {
        'type': String,
    },
    position: {
        'type': String
    },
    zipcode: {
        'type': String
    },
    responsibility1: {
        'type': String
    },
    responsibility2: {
        'type': String
    },
    from_year: {
        'type': String
    },
    from_month: {
        'type': String
    },
    present:{
        type:Boolean
    },
    to_month: {
        'type': String
    },
    to_year: {
        'type': String
    },
    country: {
        'type': String
    },
    city: {
        'type': String
    }

});
module.exports = mongoose.model('experience', experienceSchema);