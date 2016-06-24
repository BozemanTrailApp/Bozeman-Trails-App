var LocalStrategy = require('passport-local').Strategy; //Call in passport-local using the Strategy method, which is where all of the reserved methods for local auth are held
var User = require('./../models/userModel.js');//Set up user model
var passport = require('passport');

module.exports = function(passport) { //call in passport as a parameter

    passport.serializeUser(function(user, done) {//serialize user and passport stores information about the login and session of the user
        console.log("USER", user);
        done(null, user.id);//sets info to id
    });
    passport.deserializeUser(function(id, done) {//deserializes to return user information after it has been serialized in a language that makes sense to us.
        console.log("ID", id);
        User.findById(id, function(err, user) {//searches for info by id
            done(err, user);
        });
    });
    passport.use('local-signup', new LocalStrategy({//use local-signup
        usernameField : 'userName',//this can be username, email, anything as long as you update all other instances of email on this file.
        passwordField : 'password',
        passReqToCallback : true//this makes its so we only need one callback function below
    },
    function(req, userName, password, done) {
        process.nextTick(function() { //waits until all previous code has completed then runs callback function. This is a node function.
          User.findOne({'userName': userName}, function(err, user) { //find by email mongoose function
              if (err) return done(err); 
              if (user) { 
                if (user.validPassword(password)) {
                  console.log('Lance is God!');
                    return done(null, user);
                } else {
                  console.log('Invalid userName or password');
                    return done(null, false);
                }
              } else { //otherwise, make a new user
                  var newUser = new User(req.body);
                  newUser.userName = userName;
                  newUser.password = newUser.generateHash(password); //hash password
                  newUser.username = req.body.username;
                  newUser.role = 'guest';

                  newUser.save(function(err) { //save to mongo
                      if (err) throw err;
                      return done(null, newUser ,{ message: 'You successfully signed up.' });
                  });
              }
          });
        });
    }));
};

