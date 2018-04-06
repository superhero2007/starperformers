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

//edit experience details
exports.experience_detail = function(req, res) {
    experienceModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err);
        } else {
            if(req.body.present){
                experienceModel.update({
                    _id: req.params.id
                }, {
                    company: req.body.company,
                    position: req.body.position,
                    zipcode: req.body.zipcode,
                    responsibility1: req.body.responsibility1,
                    responsibility2: req.body.responsibility2,
                    from_year: req.body.from_year.date['year'],
                    from_month: req.body.from_year.date['month'],
                    present:req.body.present,
                    country: req.body.country,
                    city: req.body.city
                }, function(err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        experienceModel.findOne({_id: req.params.id},function(err,output){
                            res.status(200).json({
                                status: true,
                                updated_data: output
                            })
                            
                        })
                    }
                })
            }
            else{
               experienceModel.update({
                _id: req.params.id
                }, {
                    company: req.body.company,
                    position: req.body.position,
                    zipcode: req.body.zipcode,
                    responsibility1: req.body.responsibility1,
                    responsibility2: req.body.responsibility2,
                    from_year: req.body.from_year.date['year'],
                    from_month: req.body.from_year.date['month'],
                    present:false,
                    to_month: req.body.to_year.date['month'],
                    to_year: req.body.to_year.date['year'],
                    country: req.body.country,
                    city: req.body.city
                }, function(err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        experienceModel.findOne({_id: req.params.id},function(err,output){
                            res.status(200).json({
                                status: true,
                                updated_data: output
                            })
                            
                        })
                    }
                }) 
            }
            
        }
    })
};

//editing educational details
exports.educational_details = function(req, res) {
    educationModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err)
        } else {
            if(req.body.present){
                educationModel.update({
                    _id: req.params.id
                }, {
                    education_level: req.body.education_level,
                    school: req.body.school,
                    specialization: req.body.specialization,
                    begin_year: req.body.begin_year.date['year'],
                    begin_month: req.body.begin_year.date['month'],
                    present:req.body.present
                }, function(err, updation) {
                    if (err) {
                        console.log(err);
                    } else {
                        educationModel.findOne({_id: req.params.id},function(err,output){
                            res.status(200).json({
                                status: true,
                                message: "Eduaction details updated successfully!",
                                updated_data: output
                            })
                            
                        })
                    }
                })
            }
            else{
                educationModel.update({
                    _id: req.params.id
                }, {
                    education_level: req.body.education_level,
                    school: req.body.school,
                    specialization: req.body.specialization,
                    begin_year: req.body.begin_year.date['year'],
                    begin_month: req.body.begin_year.date['month'],
                    present:false,
                    end_year: req.body.end_year.date['year'],
                    end_month: req.body.end_year.date['month']
                }, function(err, updation) {
                    if (err) {
                        console.log(err);
                    } else {
                        educationModel.findOne({_id: req.params.id},function(err,output){
                            res.status(200).json({
                                status: true,
                                message: "Eduaction details updated successfully!",
                                updated_data: output
                            })
                            
                        })
                    }
                })
            }
            
        }
    })
}

//editing certificational details
exports.certification_details = function(req, res) {
    certificationModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err);
        } else {
            if(req.body.present){
                certificationModel.update({
                    _id: req.params.id
                    }, {
                        certificate_num: req.body.certificate_num,
                        certification_type: req.body.certification_type
                    },
                    function(err, updated_data) {
                        if (err) {
                            console.log(err)
                        } 
                        else {
                            certificationModel.findOne({_id: req.params.id},function(err,output){
                                res.status(200).json({
                                    status: true,
                                    message: "data updated successfully",
                                    updated_data: output
                                });
                                
                            })
                        }
                    }
                )
            }
            else{
                certificationModel.update({
                    _id: req.params.id
                    }, {
                        education_level: req.body.education_level,
                        school: req.body.school,
                        specialization: req.body.specialization,
                        begin_year: req.body.eductionYear.date['year'],
                        begin_month: req.body.eductionYear.date['month'],
                        present:false,
                        end_month: req.body.toEduction.date['month'],
                        end_year: req.body.toEduction.date['year'],
                        certificate_num: req.body.certificate_num,
                        certification_type: req.body.certification_type
                    },
                    function(err, updated_data) {
                        if (err) {
                            console.log(err)
                        } 
                        else {
                            certificationModel.findOne({_id: req.params.id},function(err,output){
                                res.status(200).json({
                                    status: true,
                                    message: "data updated successfully",
                                    updated_data: output
                                });
                                
                            })
                        }
                    }
                )
            }

        }
    })
}

//updating summary
exports.summary_update = function(req, res) {
    summaryModel.findOne({
        _id: req.params.id
    }, function(err, match) {
        if (err) {
            console.log(err)
        } else {
            summaryModel.update({
                _id: req.params.id
            }, {
                content: req.body.content
            }, function(err, updation) {
                if (err) {
                    console.log(err)
                } else {
                    summaryModel.findOne({_id: req.params.id},function(err,output){
                        res.status(200).json({
                            status: true,
                            message: "summary has been updated successfully",
                            updated_data: output
                        })
                        
                    })
                }
            })
        }
    })
}