var mongoose = require('mongoose');

var bcrypt = require('bcryptjs');

var userModel = require('../models/user.js');
var businessModel = require('../models/business.js');
var experienceModel = require('../models/experience.js');
var educationModel = require('../models/education.js');
var settingsModel = require('../models/settings.js');
var config = require("../config/config.js");

var passport = require('passport');
var jwt = require('jsonwebtoken');


//operations
exports.home = function(req, res) {
    console.log("Server starts running");
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};
// service provider signup
exports.serviceprovider = function(req, res) {
    var firstname = req.body.firstName;
    var lastname = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var category = req.body.category;
    //creating hashed password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.log(err);
            }
            password = hash;
            //user object to be saved in mongodb
            let newUser = new userModel();
            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.password = password;
            newUser.category = category;
            newUser.save(function(err, user) {
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                        res.status(200).json({
                            status: false,
                            message: 'User with this email already exists'
                        });
                    }
                    console.log(err);
                } else {
                    var secretKey = config.secret;
                    var payload = {
                        user
                    };
                    var token = jwt.sign(payload, secretKey);
                    res.status(200).json({
                        status: true,
                        message: 'Resgistered Successfully',
                        email: user.email,
                        lastname: user.lastname,
                        firstname: user.firstname,
                        category: user.category,
                        token:token
                    });
                }
            });

        });

    });

}
//business provider signup
exports.businessowner = function(req, res) {
    var firstname = req.body.firstName;
    var lastname = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var category = req.body.category;
    //creating hashed password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.log(err);
            }
            password = hash;
            //user object to be saved in mongodb
            let newUser = new businessModel();
            newUser.firstname = firstname;
            newUser.lastname = lastname;
            newUser.email = email;
            newUser.password = password;
            newUser.category = category;
            newUser.save(function(err, user) {
                if (err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                        res.status(200).json({
                            status: false,
                            message: 'User with this email already exists'
                        });
                    }
                    console.log(err);
                } else {
                    var secretKey = config.secret;
                    var payload = {
                        user
                    };
                    var token = jwt.sign(payload, secretKey);
                    res.status(200).json({
                        status: true,
                        message: 'Resgistered Successfully',
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        category: user.category,
                        token:token
                    });
                }
            });

        });

    });

}
//operation for service provider login
exports.servicelogin = function(req, res) {
    var userid = req.body.email;
    var key = req.body.password;
    //check if email exists
    userModel.findOne({
        email: userid
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (!result) {
            res.status(200).json({
                status: false,
                message: 'Please enter a valid email!'
            });
        }
        //check if password is correct
        else {
            bcrypt.compare(key, result.password, function(err, match) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                if (match) {
                    var secretKey = config.secret;
                    var payload = {
                        result
                    };
                    var token = jwt.sign(payload, secretKey);
                    res.status(200).json({
                        status: true,
                        message: "Creadentials Matched",
                        token: token,
                        lastname: result.lastname,
                        firstname: result.firstname,
                        category: result.category,
                        email: result.email
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        message: "incorrect password"
                    });
                }
            });
        }
    })


}
//operation for business provider login
exports.businesslogin = function(req, res) {
    var userid = req.body.email;
    var key = req.body.password;
    //check if email exists
    businessModel.findOne({
        email: userid
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (!result) {
            res.status(200).json({
                status: false,
                message: 'Please enter a valid email!'
            });
        }
        //check if password is correct
        else {
            bcrypt.compare(key, result.password, function(err, match) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                if (match) {
                    var secretKey = config.secret;
                    var payload = {
                        result
                    };
                    var token = jwt.sign(payload, secretKey);
                    res.status(200).json({
                        status: true,
                        message: "Creadentials Matched",
                        token: token,
                        email: result.email,
                        lastname: result.lastname,
                        firstname: result.firstname,
                        category: result.category
                    });
                } else {
                    res.status(200).json({
                        status: false,
                        message: "Incorrect password!"
                    });
                }
            });
        }
    })


}

//operation to change password
exports.passwordchange = function(req, res) {

    var oldpassword = req.body.oldpassword;
    var newpassword = req.body.newpassword;

    userModel.findOne({
        email: req.body.email
    }, function(err, data) {
        if (err) {
            console.log(err);
        }
        //check if entered old password matches the password saved in database
        if (data) {
            var existingpassword = data.password;
            bcrypt.compare(oldpassword, existingpassword, function(err, match) {
                if (err) {
                    console.log(err);
                }
                //if match is true,update password
                if (match) {
                    bcrypt.genSalt(10, function(err, salt) {
                        bcrypt.hash(newpassword, salt, function(err, hash) {
                            if (err) {
                                console.log(err);
                            }
                            newpassword = hash;
                            userModel.findOneAndUpdate({
                                email: req.body.email
                            }, {
                                password: newpassword
                            }, function(err, updated_data) {
                                console.log("in updated function");
                                if (err) {
                                    console.log(err);
                                }

                                res.status(200).json({
                                    message: "password changed successfully"
                                });

                            })
                        })
                    })
                }
                //if match results false
                else {
                    res.status(200).json({
                        message: "password doesnot match"
                    });
                }
            })
        } else {
            res.status(200), json({
                message: "No such email"
            });
        }
    })
}



exports.logout = function(req, res) {
    res.status(200).json({
        status: true,
        message: "logged Out!"
    });
};