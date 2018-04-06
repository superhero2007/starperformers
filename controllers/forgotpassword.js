var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var mailer = require('../config/mailer.js');
var userModel = require('../models/user.js');
var config = require('../config/config.js');
var crypto = require('crypto-browserify');

exports.forgot_password = function(req, res) {
    userModel.findOne({
        email: req.body.email
    }, function(err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            //creates random token
            crypto.randomBytes(20, function(err, buffer) {
                if (err) {
                    console.log(err, 'error in generating token');
                } else {
                    var token = buffer.toString('hex');
                    userModel.findByIdAndUpdate({
                            _id: user._id
                        }, {
                            reset_password_token: token,
                            reset_password_expires: Date.now() + 1800000
                        }, {
                            upsert: true,
                            new: true
                        },
                        function(err, result) {
                            if (err) {
                                console.log(err, "error while updating data");
                            } else {
                                var data = {
                                    to: user.email,
                                    from: 'expert.developer.it@gmail.com',
                                    subject: 'Password help has arrived!',
                                    html: "<p>You have recently requested to reset your password for Starperformers account</p><a href='http://localhost:3000/login/forgotPassword?token=" + token + "'>Click here to reset your password</a><p>If you did not request a password reset,please ignoore this email.This password reset is valid for next 30minutes</p><br><p>Thanks,</p><p>Starperformers Team</p>"
                                }
                                mailer.sendMail(data, function(err) {
                                    if (!err) {
                                        return res.json({
                                            message: 'Kindly check your email for further instructions'
                                        });
                                    }
                                    if (err) {
                                        console.log(err);
                                        res.status(200).json({
                                            status: true,
                                            message: 'something went wrong.Try again Later!'
                                        });
                                    }
                                });
                            }
                        })
                }

            })
        } else {
            res.status(200).json({
                status: false,
                message: "No user found"
            });
        }
    })
}

exports.reset_password = function(req, res) {
    userModel.findOne({
        reset_password_token: req.body.token,
        reset_password_expires: {
            $gt: Date.now()
        },
    }, function(err, match) {
        if (err) {
            console.log(err);
        }
        if (!match) {
            res.status(200).json({
                status: false,
                message: "Password reset token is invalid or has expired."
            })
        } else {
            var new_password = req.body.Confirmpassword;
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(new_password, salt, function(err, hash) {
                    if (err) {
                        console.log(err);
                    }
                    new_password = hash;
                    //saving new password
                    userModel.update({
                            reset_password_token: req.body.token
                        }, {
                            password: new_password,
                            reset_password_token: undefined,
                            reset_password_expires: undefined
                        },
                        function(err, output) {
                            if (err) {
                                console.log(err)
                            } else {
                                res.status(200).send({
                                    status: true,
                                    message: "Password updated successfully!"
                                })
                            }
                        })

                });

            });


        }
    })
}