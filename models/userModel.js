var mongoose = require('mongoose');
var profileSchema = require('./profileSchema.js');
var trailLogSchema = require('./trailLogSchema.js');

var UserSchema = new mongoose.Schema({
	userName: {type: String, required: true, unique: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	role: {type: String, required: true, default: 'User'},
	loggedin: {type: Boolean},
	userProfile: profileSchema,
	trailLog: [trailLogSchema]
}); 

module.exports = mongoose.model('User', UserSchema);