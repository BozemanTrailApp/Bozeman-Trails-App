var TrailsModel = require('./../models/trailsModel.js');




module.exports = {
	create: function(req, res, next){
		var trail = new TrailsModel(req.body);
		trail.save(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	read: function(req, res, next){
		TrailsModel
		.find()
		.populate('comments.user') 
		.exec(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	update: function(req, res, next){
		TrailsModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	delete: function(req, res, next){
		TrailsModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	readById: function(req, res,next){
		TrailsModel
		.findById(req.params.id, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	}
};






