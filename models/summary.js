var mongoose = require('mongoose');



var summarySchema = mongoose.Schema({
    user_id: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('summary', summarySchema);