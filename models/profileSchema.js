var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	hikeName: {type: String},
	date: {type: Number},
	miles: {type: String},
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
module.exports = profileSchema;