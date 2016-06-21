var LocalStrategy = require('passport-local').Strategy; //Call in passport-local using the Strategy method, which is where all of the reserved methods for local auth are held
var User = require('./../models/loginModel.js');//Set up user model

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
        usernameField : 'email',//this can be username, email, anything as long as you update all other instances of email on this file.
        passwordField : 'passWord',
        passReqToCallback : true//this makes its so we only need one callback function below
    },
    function(req, email, passWord, done) {
        process.nextTick(function() { //waits until all previous code has completed then runs callback function. This is a node function.
          User.findOne({'email': email}, function(err, user) { //find by email mongoose function
              if (err) return done(err); //if there is an error return the error
              if (user) { //if there is a valid user, verify password is correct
                if (user.validPassWord(passWord)) {
                  console.log('worksgood');
                    return done(null, user);
                } else {
                  console.log('Invalid email or passWord');
                    return done(null, false);
                }
              } else { //otherwise, make a new user
                  var newUser = new User(req.body);
                  newUser.email    = email;
                  newUser.passWord = newUser.generateHash(passWord); //hash password
                  newUser.save(function(err) { //save to mongo
                      if (err) throw err;
                      return done(null, newUser);
                  });
              }
          });
        });
    }));
};