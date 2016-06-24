//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm
//  UserLogout

var React = require('react');
var ReactDOM = require('react-dom');
var UserLoginData = require('./login/userLoginData.js');
var UserSignupData = require('./login/userSignupData.js');
var LogoutUser = require('./login/logoutUser.js');


var UserAuth = React.createClass({
	getInitialState: function(){
		return {
			user: null
		}
	},

	loginUserFromServer: function(user){
		$.ajax({
			method: 'POST',
			url: '/login',
			data: user,
			success: function(data){
				console.log("Login successful.", data.user._id);
			},
			error: function(xhr, status, err){
				console.error('/login', status, err.toString())
			}
		})
	},

	signupUserFromServer: function(user){
		$.ajax({
			method: 'POST',
			url: '/signup',
			data: user, 
			success: function(data){
				console.log("Signup successful.", data);
			},
			error: function(xhr, status, err){
				console.error('/signup', status, err.toString())
			}
		})

	},

	logoutUser: function(user){
		var self = this;
		var user = self.state.user;
		$.ajax({
			url: '/logout',
			method: 'GET',
			data: user, 
			success: function(data){
				self.setState({ data: null });
				console.log("Logout successful.", data);
			}.bind(self),
			error: function(xhr, status, err){
				console.error('/logout', status, err.toString());
			}
		})
		
	},

	render: function(){
		return (
			<div>
				<div className="container">
			
					<UserLoginData loginUserFromServer={ this.loginUserFromServer } />
					<UserSignupData signupUserFromServer={ this.signupUserFromServer }/>
					<LogoutUser logoutUser={ this.logoutUser } />
					
				</div>
			</div>
			)
		}
	});

ReactDOM.render(
	<UserAuth/>,
	document.getElementById('wrapp')
);






