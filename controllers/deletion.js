var mongoose = require('mongoose');


var userModel = require('../models/user.js');
var businessModel = require('../models/business.js');
var educationModel = require('../models/education.js');
var experienceModel = require('../models/experience.js');
var settingModel = require('../models/settings.js');
var certificationModel = require('../models/certification.js');
var summaryModel = require('../models/summary.js')


var multer = require('multer');
var DIR = '/storage/uploads/';

var config = require('../config/config.js');

var passport = require('passport');
var jwt = require('jsonwebtoken');

var path = require('path');
//deleting summary
exports.delete_summary = function(req, res) {
    summaryModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err);
        } else {
            summaryModel.remove({
                _id: req.params.id
            }, function() {
                res.status(200).json({
                    status: true,
                    message: "summary has been deleted successsfully!"
                });
            });
        }
    })
}
//deleting education
exports.delete_education = function(req, res) {
    educationModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err)
        } else {
            educationModel.remove({
                _id: req.params.id
            }, function() {
                res.status(200).json({
                    status: true,
                    message: "educational details deleted successsfully!"
                });
            });
        }
    })
}

//removing experience
exports.delete_experience = function(req, res) {
    experienceModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err)
        } else {
            experienceModel.remove({
                _id: req.params.id
            }, function() {
                res.status(200).json({
                    status: true,
                    message: "recored deleted"
                })
            });
        }
    })
}

//removing certificates
exports.delete_certificates = function(req, res) {
    certificationModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err)
        } else {
            certificationModel.remove({
                _id: req.params.id
            }, function() {
                res.status(200).json({
                    status: true,
                    message: "data deleted"
                })
            })
        }
    })
}