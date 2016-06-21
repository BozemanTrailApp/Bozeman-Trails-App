var LoginModel = require('./../models/loginModel.js');//Create user model

  module.exports = {
      login: function(require, response, next){//passport does most of this. We just have to send back the response
          response.send();
      },
      getMe: function(require,response) {//Find current user
        if(!require.user){
          return response.send();
      }
      LoginModel
      .findById(require.user._id)//req.user is a passport functionality
      .exec(function (error, result) {
        if (error) {
          return response.send(error);
        }
        response.send(result);
      });
    },
    logout: function(require,response) {//Logs out current user
      require.logout();//req.logout is a passport functionality
      console.log(require + " has been logged out");
      response.send();
    }
    
  };
