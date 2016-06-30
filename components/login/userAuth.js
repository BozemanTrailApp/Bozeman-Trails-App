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
var LogoutUser = require('./logoutUser.js');
var AwareOfUser= require('./awareOfUser.js');


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
				window.location = "http://localhost:8000/#/profile";

			},
			error: function(xhr, status, err){
				console.error('/login', status, err.toString())
				alert('No Such Email or Incorrect Password')
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
				window.location = "http://localhost:8000/#/profile";
			},
			error: function(xhr, status, err){
				alert('No Such Email or Incorrect Password')
				console.error('/signup', status, err.toString())
			}
		})
	},
	logoutUser: function(user){
		var self = this;
		//var user = self.state.user;
		$.ajax({
			url: '/logout',
			method: 'GET', 
			success: function(data){
				$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
				window.location = "http://localhost:8000"
				})
				//self.setState( data );
				//console.log("Logout successful.", data);
			}.bind(self),
			error: function(xhr, status, err){
				console.error('/logout', status, err.toString());
			}
		})
	},
	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
			})
	},
	componentDidMount: function(){
		this.getOneUserFromServer();
	},

	render: function(){
			var user = this.state.user ? <AwareOfUser user={this.state.user} /> : null;
		return (
			<div>
				<div className="container">
						{ user }
					<UserLoginData loginUserFromServer={ this.loginUserFromServer } />
					<UserSignupData signupUserFromServer={ this.signupUserFromServer }/>
					<LogoutUser logoutUser={ this.logoutUser } />
				</div>
			</div>
			)
		}
	});

module.exports = UserAuth;








