var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
	hikeName: {type: String},
	date: {type: Number},
	miles: {type: String},

});
module.exports = profileSchema;