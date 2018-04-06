var mongoose = require('mongoose');

var settingSchema = mongoose.Schema({
    user_id: {
        'type': String
    },
    starperformer: {
        'type': String
    },
    zipcode: {
        'type': Number
    },
    phone_no: {
        'type': Number
    },
    education: {
        'type': String
    },
    job_count: {
        'type': Number
    },
    city: {
        'type': String
    },
    state: {
        'type': String
    }
});

module.exports = mongoose.model("settings", settingSchema);