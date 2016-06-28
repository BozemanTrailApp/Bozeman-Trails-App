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
var AwareOfUser= require('./login/awareOfUser.js');
// var ShowLogOnData = require ('./login/showLogOnData');

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
			},
			error: function(xhr, status, err){
				console.error('/login', status, err.toString())
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
			},
			error: function(xhr, status, err){
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








