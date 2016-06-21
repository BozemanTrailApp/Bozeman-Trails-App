var mongoose = require('mongoose');
var commentsSchema = require('./commentsSchema.js')

var TrailSchema = new mongoose.Schema({
	trailName: {type: String, required: false},
	difficulty: {type: String, required: false},
	length: {type: String, required: false},
	location: {type: String, required: false},
	description: {type: String, required: false},
	comments: [commentsSchema], 
	mapUrl: {type: String, required: false},
	trailHeadUrl: {type: String, required: false},
	userImage: [{
		imageUrl: {type: String},
			user: {
			 type: mongoose.Schema.Types.ObjectId,
			 ref: 'User'
		}
	}]
});
module.exports = mongoose.model('Trails', TrailSchema);