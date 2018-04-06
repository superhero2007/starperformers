var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    status: String
});

var User = mongoose.model('user', userSchema);

exports.registeruser = function(firstname, lastname, email, status, cb) {

    var user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        status: status
    }
    User.create(user, cb);
};


// test connection begin
var testSchema = new Schema({
    testname: String,
    testage: Number
});

var Test = mongoose.model('test', testSchema);

exports.testsave = function(testname, testage, cb) {
    console.log("test db insert : " + testname);

    var testUser = {
        testname: testname,
        testage: testage,
    }
    Test.create(testUser, cb);
};


exports.testget = function(cb) {
    console.log("test db get");
    Test.find({}, "testname  testage", function(err, records) {
        if (err) {
            return cb(err);
        }
        cb(null, records);
    });
};
//test connection end