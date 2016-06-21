var mongoose = require('mongoose');

var trailLogSchema = new mongoose.Schema({
	hikeName: {type: String, required: true},
	date: {type: String},
	miles: {type: Number},
	comments: {type: String}
});
module.exports = trailLogSchema;
