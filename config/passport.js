var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../models/models');
var User = models.User;

module.exports = function(passport) {


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({

        usernameField : 'loginID',
        passwordField : 'loginPW',
        passReqToCallback : true
    },

    function(req, loginID, loginPW, done) {

        process.nextTick(function() {

            User.findOne({ 'local.loginID' : loginID}, function(err, user) {
                if (err)
                    return done(err);

                if(user) {
                    return done(null, false, req.flash('signupMessage', 'That Username is already taken.'));
                }

                else {

                    var newUser = new User();

                    newUser.local.loginID = loginID;
                    newUser.local.loginPW = newUser.generateHash(loginPW);


                    newUser.save(function(err) {
                        if(err)
                            throw err;

                        return done(null, newUser);
                    });
                }
            });
        });
    }));



    passport.use(new LocalStrategy({

        usernameField : 'loginID',
        passwordField : 'loginPW',
        passReqToCallback : true
    },
    function(req, username, loginPW,done) {

        User.findOne({ 'local.loginID' : loginID}, function(err, user) {

            if(err)
                return done(err);

            if(!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            if(!user.validPassword(loginPW))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            return done(null, user);
        });
    }));

};