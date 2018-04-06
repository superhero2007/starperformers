var passport = require('passport');
var config = require('./config.js');
var jwt = require('jsonwebtoken');

var User = require('../models/user.js');

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var ex = function(passport) {
    var opts = {

        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret
    };
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        console.log(jwt_payload, "jwtpayload");
        User.findOne({
            'email': jwt_payload.result.email
        }, function(err, user) {
            console.log(jwt_payload.result.email, "jwt_payloademail");
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);

            }
        });
    }));
}
module.exports = ex;