var UserModel = require('./../models/userModel');


module.exports = {
	create: function(req, res, next){
		var user = new UserModel(req.body);
		user.save(function(err, result){
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
		.populate('userProfile.user')
		.exec(function(err, result){
			if(err){
				res.send(err);
			}else{
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
	},
	login: function(req, res, next){//passport does most of this. We just have to send back the response
        res.send();
    },
    getMe: function(req,res) {//Find current user
      if(!req.user){
        return res.send();
      }
      userModel
      .findById(req.user._id)//req.user is a passport functionality
      .exec(function (err, result) {
        if (err) {
          return res.send(err);
        }
        res.send(result);
      });
    },
    logout: function(req,res) {//Logs out current user
      req.logout();//req.logout is a passport functionality
      console.log(req + " has been logged out");
      res.send();
    }
  



};

















