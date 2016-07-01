var mongoose = require('mongoose');
var profileSchema = require('./profileSchema.js');
var trailLogSchema = require('./trailLogSchema.js');

var bcrypt = require('bcrypt-nodejs'); //encrypts the password



var UserSchema = new mongoose.Schema({

	userName: {type: String, required: true, unique: true},
	firstName: {type: String, required: false},
	lastName: {type: String, required: false},
	email: {type: String, required: false, unique: true},
	password: {type: String, required: true},
	role: {type: String, required: false, default: 'User'},
	loggedin: {type: Boolean},
	age: {type: String, required: false},
	gender: {type: String, required: false},
	userProfile: profileSchema,
	trailLog: [trailLogSchema]
	
}); 

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); //encrypts password and does so 8 times. Default is 10. More encryptions means more time to process
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password); //compares the given password with the encrypted stored password
};


module.exports = mongoose.model('User', UserSchema);