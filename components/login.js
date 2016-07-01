// login
	//userAuth
	//	UserLoginData
	//		UserLoginForm
	//	UserSignupData
	//		UserSignupForm
	//  UserLogout



var React = require('react');
var Link = require('react-router').Link;

var UserAuth = require('./login/userAuth.js');
var LogoutUser = require('./login/logoutUser.js');

var Login = React.createClass({
	render: function(){
			return(
			<div>	
				<UserAuth />	
			</div>
					)
	}
});

module.exports = Login;
