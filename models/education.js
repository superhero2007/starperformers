var mongoose = require('mongoose');
var config = require("../config/config.js");
//connection to database
mongoose.connect(config.database);

var educationSchema = mongoose.Schema({
    user_id: {
        'type': String
    },
    education_level: {
        'type': String
    },
    school: {
        'type': String
    },
    specialization: {
        'type': String
    },
    begin_year: {
        'type': String
    },
    begin_month: {
        'type': String
    },
    present:{
        'type':Boolean
    },
    end_month: {
        'type': String
    },
    end_year: {
        'type': String
    }
});
//making schema exportable
module.exports = mongoose.model("education", educationSchema);