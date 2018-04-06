var passport = require('passport');
var path = require('path');

var operations = require('../controllers/controller.js');
var profile = require('../controllers/profilecontroller.js');
var edits = require('../controllers/edit_details.js');
var deletes = require('../controllers/deletion.js');
var password = require('../controllers/forgotpassword.js');

const uuidv4 = require('uuid/v4');

// mime.extension(file.mimetype)

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './storage/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
var upload = multer({
    storage: storage
});


module.exports = function(app) {

    //route to home
    app.route('/').get(function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });

    //login-signuproutes
    app.route('/spsignup').post(operations.serviceprovider);
    app.route('/bpsignup').post(operations.businessowner);
    app.route('/splogin').post(operations.servicelogin);
    app.route('/bplogin').post(operations.businesslogin);
    app.route('/changepassword').post(operations.passwordchange);

    //routes for profile fields
    app.route('/settings').post(profile.user_settings);
    app.route('/summary').post(profile.summary);
    app.route('/education').post(profile.user_education);
    app.route('/certification').post(profile.certification);
    app.route('/experience').post(profile.user_experience);
    app.route('/upload').post(upload.array("uploads[]", 12), profile.imageupload);
    app.route('/profileinfo').get(profile.profile_data);

    //routes for editing existing details
    app.route('/edit_experience/:id').put(edits.experience_detail);
    app.route('/edit_certificates/:id').put(edits.certification_details);
    app.route('/edit_education/:id').put(edits.educational_details);
    app.route('/edit_summary/:id').put(edits.summary_update);

    //routes for deleting data
    app.route('/remove_summary/:id').delete(deletes.delete_summary);
    app.route('/remove_education/:id').delete(deletes.delete_education);
    app.route('/remove_experience/:id').delete(deletes.delete_experience);
    app.route('/remove_certifications/:id').delete(deletes.delete_certificates);

    //forgot password route
    app.route('/forgotpassword').post(password.forgot_password);
    app.route('/reset_password').post(password.reset_password);

    //any other route
    app.route('*').get(function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
}