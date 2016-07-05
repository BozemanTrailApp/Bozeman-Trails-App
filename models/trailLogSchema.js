var mongoose = require('mongoose');

var trailLogSchema = new mongoose.Schema({
	hikeName: {type: String},
	date: {type: Date},
	miles: {type: Number},
	comments: {type: String}
});
module.exports = trailLogSchema;
