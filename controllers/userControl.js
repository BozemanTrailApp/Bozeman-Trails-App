var UserModel = require('./../models/userModel.js');
// var passport = require('passport');

module.exports = {
	// login: function(req, res, next){
	// 		//console.log(req.body);
	// 	passport.authenticate('local-login', function(err, user, info){
	// 		//console.log('You logged in.', info);
	// 		if(err) { return next(err); }
	// 		if(!user) { return res.status(404).json(info.message) }
	// 		req.login(user, function(err){
	// 			if(err) { return next(err); }
	// 			return res.json({ message: 'You logged in like a champ!', user: user });
	// 		});	
	// 	})(req, res, next);
	// },

	// signup: function(req, res, next){
	// 	passport.authenticate('local-signup', function(err, user, info){
	// 		console.log('You signed up.', info);
	// 		if(err) { return next(err); }
	// 		if(!user) { return res.status(404).json(info.message); }
	// 		req.login(user, function(err){
	// 			if(err) { return next(err); }
	// 			return res.json({ message: 'You signed up like a champ!', user: user });
	// 		})
	// 	})(req, res, next);
	// },

	// logout: function(req, res){
	// 	req.logout();
	// 	res.json({ message: 'You logged out like a champ!' });
	// },

	// getUser: function(req, res){
	// 		UserModel.findById(req.params.id, function(err, user){
	// 			if(err){
	// 				console.log(err);
	// 				res.send(err);
	// 			} else {
	// 				res.json(user);
	// 			}
	// 		})	
	// },

	// getAllUsers: function(req, res){
	// 	UserModel.find().exec(function(err, result){
	// 		if(err){
	// 			res.send(err);
	// 		} else {
	// 			res.send(result);
	// 		}
	// 	})
	// },
	create: function(req,res,next){
		var user = new UserModel(req.body);
		user.save(function(err,result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	read: function(req, res, next){
		UserModel
		.find()
		.exec(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}
		});
	},
	update: function(req, res, next){
		UserModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},
	delete: function(req, res, next){
	UserModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
		}
		});
	},
	readById: function(req, res, next){
		UserModel
		.findById(req.params.id, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	}
};

















