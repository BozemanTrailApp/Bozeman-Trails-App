var mongoose = require('mongoose');


// function validator (v) {
//   return v.length > 1;
// };

var trailLogSchema = new mongoose.Schema({
	hikeName: {
		type: String,  validate: /[a-z]/, require: true },
	date: {
		type: Date, require: true  },
	miles: {
		type: Number, min: 1 , require: true },
	comments: {
		type: String } 


});

module.exports = trailLogSchema;



  