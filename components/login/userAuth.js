//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm
//  UserLogout

var React = require('react');
var ReactDOM = require('react-dom');
const Link = require('react-router').Link;

var UserLoginData = require('./userLoginData.js');
var UserSignupData = require('./userSignupData.js');

var UserAuth = React.createClass({ 

	getInitialState: function(){
		return {
			user: null
		}
	},


	loginUserFromServer: function(user){

		var self = this;

		$.ajax({
			method: 'POST',
			url: '/login',
			data: user,
			success: function(data){
				console.log("Login successful.", data);
				self.setState({ user : data });
				window.location = "http://morning-sea-89915.herokuapp.com/#/profile";

			},
			error: function(xhr, status, err){
				console.error('/login', status, err.toString())
				//alert('No Such Email or Incorrect Password')
			}
		})
	},
	signupUserFromServer: function(user){

		var self = this;

		$.ajax({
			method: 'POST',
			url: '/signup',
			data: user, 
			success: function(data){
				console.log("Signup successful.", data);
				self.setState({ user : data });
				window.location = "http://morning-sea-89915.herokuapp.com/#/profile";
			},
			error: function(xhr, status, err){
				alert('Please fill in all Categories!')
				console.error('/signup', status, err.toString())
			}
		})
	},

	

	render: function(){
			
		return (
			<div>
				<div className="container">
				<div className= "sigintitle">
					<h3> Sign-In </h3>
				</div>
					<div className="loginbuttons">
						<UserLoginData loginUserFromServer={ this.loginUserFromServer } />
						<UserSignupData signupUserFromServer={ this.signupUserFromServer }/>
					</div> 	
				</div>
			</div>
			)
		}
	});

module.exports = UserAuth;








