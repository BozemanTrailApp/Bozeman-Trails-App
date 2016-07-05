var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	hikeName: {type: String},
	date: {type: Date},
	miles: {type: Number}
	
});
module.exports = profileSchema;

//user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}