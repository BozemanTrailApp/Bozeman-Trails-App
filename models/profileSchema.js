var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	bio: {type: String},
	age: {type: Number},
	gender: {type: String},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports = profileSchema;