var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); //encrypts the password

var loginSchema = new mongoose.Schema({

	email: {
        type: String,
        required: true,
        unique: true
    },
    passWord: {
        type: String,
        required: true
  
    }

});

loginSchema.methods.generateHash = function(passWord) {
    return bcrypt.hashSync(passWord, bcrypt.genSaltSync(8), null); //encrypts password and does so 8 times. Default is 10. More encryptions means more time to process
};

loginSchema.methods.validPassWord = function(passWord) {
    return bcrypt.compareSync(passWord, this.passWord); //compares the given password with the encrypted stored password
};

module.exports = mongoose.model('login', loginSchema );
