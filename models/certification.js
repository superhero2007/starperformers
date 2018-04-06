var mongoose = require('mongoose');



var certificationSchema = mongoose.Schema({
    user_id: {
        'type': String
    },
    certificate_num: {
        'type': String
    },
    certification_type: {
        'type': String
    }
});

module.exports = mongoose.model('certification', certificationSchema);