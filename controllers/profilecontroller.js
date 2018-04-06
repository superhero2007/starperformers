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


//getting profile data
exports.profile_data = function(req, res) {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var final_data = {};

    // decode token  
    if (token) {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err);
            } else {
                if(decoded.result){
                    req.decoded = decoded.result;
                }
                else{
                    req.decoded = decoded.user;
                }
                userModel.findOne({
                    email: req.decoded.email
                }, function(err, record) {
                    if (err) {
                        console.log(err);
                    }
                    if (record) {
                        var keyid = record._id;
                        final_data['user_info'] = {
                            'profileUrl': record.profile,
                            'email': record.email
                        };
                        summaryModel.findOne({
                            user_id: keyid
                        }, function(err, summary_data) {
                            if (err) {
                                console.log(err);
                            }
                            final_data['summary'] = summary_data;

                        });
                        educationModel.find({
                            user_id: keyid
                        }, function(err, data) {
                            if (err) {
                                console.log(err);
                            }
                            final_data['education'] = data;

                        });
                        experienceModel.find({
                            user_id: keyid
                        }, function(err, details) {
                            if (err) {
                                console.log(err);
                            }
                            final_data['experience'] = details;

                        });
                        certificationModel.find({
                            user_id: keyid
                        }, function(err, data) {
                            if (err) {
                                console.log(err);
                            }
                            final_data['certification_details'] = data;

                        });
                        settingModel.findOne({
                            user_id: keyid
                        }, function(err, setting) {
                            if (err) {
                                console.log(err);
                            }
                            final_data['settings'] = setting;
                            res.status(200).json({
                                status: true,
                                data: final_data
                            })
                        })
                    } else {
                        res.status(200).json({
                            status: 'false',
                            message: 'no such user found!'
                        });
                    }
                })
            }
        });
    } else {
        return res.status(403).json({
            success: false,
            message: 'No token provided.'
        });
    }
}


//image uploading 
exports.imageupload = function(req, res) {

    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            } else if(decoded.result) {
                user = decoded.result;
            }
            else if(decoded.user){
                user=decoded.user;
            }
        });
    }

    userModel.findOne({
        email: user.email
    }, function(err, record) {
        if (err) {
            console.log(err)
        } else {
            var id = record._id;

            var image_path = DIR + req.files[0].filename;
            image_path.toString();
            userModel.update({
                _id: id
            }, {
                profile: image_path
            }, function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({
                        status: 'true',
                        image_url: image_path
                    });
                }
            })


        }
    })

}
//setting data
exports.user_settings = function(req, res) {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            } else {
                if(decoded.result){
                    user = decoded.result;
                }else if(decoded.user){
                    user = decoded.user;
                }
            }
        });
    }
    userModel.findOne({
        email: user.email
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            var id = result._id;
            settingModel.findOne({
                user_id: id
            }, function(err, record) {
                if (err) {
                    console.log(err);
                }
                if (record) {
                    settingModel.update({
                            user_id: id
                        }, {
                            starperformer: req.body.starperformer,
                            zipcode: req.body.zipcode,
                            city: req.body.city,
                            state: req.body.state,
                            phone_no: req.body.phone_no,
                            education: req.body.education,
                            job_count: req.body.job_count
                        },
                        function(err, updatedrecord) {
                            if (err) {
                                console.log(err);
                            } else {
                                settingModel.findOne({user_id: id},function(err,output){
                                    res.status(200).json({
                                        status: true,
                                        message: 'data updated successfully!',
                                        data: output
                                    });
                                    
                                })
                            }
                        }
                    )
                } else {
                    var setting_data = new settingModel();
                    setting_data.user_id = id;
                    setting_data.starperformer = req.body.starperformer;
                    setting_data.zipcode = req.body.zipcode;
                    setting_data.city = req.body.city;
                    setting_data.state = req.body.state;
                    setting_data.phone_no = req.body.phone_no;
                    setting_data.education = req.body.education;
                    setting_data.job_count = req.body.job_count;
                    setting_data.save(function(err, newsetting) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.status(200).json({
                                status: true,
                                message: 'settings saved',
                                setting: newsetting
                            });
                        }
                    })
                }
            })
        }
    })
};

//saving users educational details
exports.user_education = function(req, res) {
    console.log(req.body, "request body");
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            } else if(decoded.result) {
                user = decoded.result;
            }
            else if(decoded.user){
                user = decoded.user;
            }
        });
    }
    userModel.findOne({
        email: user.email
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            var id = result._id;
            var educational_details = new educationModel();
            educational_details.user_id = id;
            educational_details.education_level = req.body.education_level;
            educational_details.school = req.body.school;
            educational_details.specialization = req.body.specialization;
            educational_details.begin_year = req.body.begin_year.date['year'];
            educational_details.begin_month = req.body.begin_year.date['month'];
            if(req.body.present){
                educational_details.present = req.body.present;
            }
            else{
                educational_details.end_year = req.body.end_year.date['year'];
                educational_details.end_month = req.body.end_year.date['month'];
                educational_details.present = false;
            }
            educational_details.save(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({
                        status: true,
                        message: 'educational details saved successfully',
                        data: data
                    });
                }
            })
        } else {
            res.status(200).json({
                status: false,
                message: 'no such user found'
            });
        }
    })
};

//add user experience
exports.user_experience = function(req, res) {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            } 
            else if(decoded.result){
                user = decoded.result;
            }
            else if(decoded.user){
                user=decoded.user;
            }
        });
    }
    userModel.findOne({
        email: user.email
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            var id = result._id;
            var experience_details = new experienceModel();
            experience_details.user_id = id;
            experience_details.company = req.body.company;
            experience_details.position = req.body.position;
            experience_details.zipcode = req.body.zipcode;
            experience_details.responsibility1 = req.body.responsibility1;
            experience_details.responsibility2 = req.body.responsibility2;
            experience_details.from_year = req.body.from_year.date['year'];
            experience_details.from_month = req.body.from_year.date['month'];
            if(req.body.present){
                experience_details.present = req.body.present;
            }
            else{
                experience_details.to_year = req.body.to_year.date['year'];
                experience_details.to_month = req.body.to_year.date['month'];
                experience_details.present = false;
                
            }
            experience_details.country = req.body.country;
            experience_details.city = req.body.city;

            experience_details.save(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({
                        status: true,
                        message: 'experience details saved',
                        data: data
                    });
                }
            })
        } else {
            res.status(200).json({
                status: true,
                message: 'No such user found'
            });
        }
    })
};

//certification data
exports.certification = function(req, res) {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            }
            else if(decoded.result){
                user = decoded.result;
            }
            else if(decoded.user){
                user=decoded.user;
            }
        });
    }
    userModel.findOne({
        email: user.email
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(req.body,"certibody");
            var id = result._id;
            var newdata = new certificationModel();
            newdata.user_id = id;
            newdata.certificate_num = req.body.certifications_nums;
            newdata.certification_type = req.body.certifications_type;
            newdata.save(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json({
                        status: true,
                        message: "certification data saved",
                        data: data
                    });
                }
            })
        } else {
            res.status(200).json({
                status: false,
                message: "no such user found"
            });
        }
    })

};

//saving summary
exports.summary = function(req, res) {
    var token = req.body.token || req.query.token || req.headers['authorization'];
    var secret = config.secret;

    var user;
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret, function(err, decoded) {
            if (err) {
                console.log(err, 'decoding error');
            }                
            else if(decoded.result){
                user = decoded.result;
            }
            else if(decoded.user){
                user=decoded.user;
            }
            
        });
    }
    userModel.findOne({
        email: user.email
    }, function(err, match) {
        if (err) {
            console.log(err);
        }
        if (match) {
            var id = match._id;
            summaryModel.findOne({
                user_id: id
            }, function(err, output) {
                if (err) {
                    console.log(err);
                }
                if (output) {
                    summaryModel.update({
                        user_id: id
                    }, {
                        content: req.body.summary_Info
                    }, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            summaryModel.findOne({user_id: id},function(err,output){
                                res.status(200).json({
                                    status: true,
                                    message: "summary updatd successfully",
                                    updated_data: output
                                });
                            })
                        }
                    })
                } else {
                    var temp = new summaryModel();
                    temp.user_id = id;
                    temp.content = req.body.summary_Info;
                    temp.save(function(err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.status(200).json({
                                status: true,
                                message: "data saved",
                                summary: data
                            });
                        }
                    })
                }
            })
        } else {
            res.status(200).json({
                status: false,
                message: "No such user found"
            });
        }
    })
}