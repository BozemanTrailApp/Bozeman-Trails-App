//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm

var React = require('react');
var UserSignupForm = require('./userSignupForm.js');

var UserSignupData = React.createClass({
	getInitialState: function(){
		return {
			email: '',
			username: '',
			password: ''
		}
	},

	onEmailChange: function(e){
		this.setState({ email: e.target.value })
	},

	onUsernameChange: function(e){
		this.setState({ username: e.target.value })
	},

	onPasswordChange: function(e){
		this.setState({ password: e.target.value })
	},

	handleUserSignupSubmit: function(e){
		e.preventDefault();

		var user = {};
		user.email = this.state.email;
		user.username = this.state.username;
		user.password = this.state.password;

		this.props.signupUserFromServer(user);
		this.setState({ email: '', username: '', password: '' });
	},

	render: function(){
		return (
			<div>
				<UserSignupForm handleUserSignupSubmit={ this.handleUserSignupSubmit }
				onPasswordChange={ this.onPasswordChange }
				onUsernameChange={ this.onUsernameChange }
				onEmailChange={ this.onEmailChange }
				username={ this.state.username }
				email={ this.state.email }
				password={ this.state.password }/>
			</div>
			)
	}
});

module.exports = UserSignupData;