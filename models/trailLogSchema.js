var mongoose = require('mongoose');

var trailLogSchema = new mongoose.Schema({
	hikeName: {
		type: String, 
		required: true },
	date: {
		type: Date,
		required: true },
	miles: {
		type: Number, 
		required: true },
	comments: {
		ßtype: String}
});

module.exports = trailLogSchema;



  