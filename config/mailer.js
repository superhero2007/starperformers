var nodemailer = require('nodemailer');
var config = require('./config.js');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'expert.developer.it@gmail.com',
        pass: 'koqwvbeznkdobrmj'
    }
});

module.exports = transporter;