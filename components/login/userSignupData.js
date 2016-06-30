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
			
			userName: '',
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			age: '', 
			gender: ''

		},
		{ childVisible: false }
	},
    onClick: function() {
    	this.setState({childVisible: !this.state.childVisible});
    },
	onUsernameChange: function(e){
		this.setState({ userName: e.target.value })
	},
	onFirstNameChange: function(e){
		this.setState({ firstName: e.target.value })
	},
	onLastNameChange: function(e){
		this.setState({ lastName: e.target.value })
	},

	onEmailChange: function(e){
		this.setState({ email: e.target.value })
	},

	onPasswordChange: function(e){
		this.setState({ password: e.target.value })
	},

	onPasswordChange: function(e){
		this.setState({ age: e.target.value })
	},
	onPasswordChange: function(e){
		this.setState({ gender: e.target.value })
	},



	handleUserSignupSubmit: function(e){
		e.preventDefault();

		var user = {};

		user.userName = this.state.userName;
		user.firstName = this.state.firstName;
		user.lastName = this.state.lastName;
		user.email = this.state.email;
		user.password = this.state.password;
		user.age = this.state.age;
		user.gender = this.state.gender

		this.props.signupUserFromServer(user);
		this.setState({ userName: '', firstName: '', lastName: '', email: '', username: '', password: '', age: '', gender: '' });
	},

	render: function(){
		return (
			<div>
				<div onClick={this.onClick}>
          		<button className="btn waves-effect waves-light" type="submit" name="action">Create Account
         		</button>
        		</div>
        		<div>
        		{ this.state.childVisible ? <UserSignupForm 
				handleUserSignupSubmit={ this.handleUserSignupSubmit }
				onUsernameChange={ this.onUsernameChange }
				onFirstNameChange={ this.onFirstNameChange }
				onLastNameChange={ this.onLastNameChange }
				onEmailChange={ this.onEmailChange }
				onPasswordChange={ this.onPasswordChange }
				onAgeChange= {this.onAgeChange}
				onGenderChange={this.onGenderChange}

				userName={ this.state.userName }
				firstName={ this.state.firstName }
				lastName={ this.state.lastName }
				email={ this.state.email }
				password={ this.state.password }
				age={this.state.age }
				gender={this.state.gender }
				/>: null }
				</div>
      </div>
			)
	}
});

module.exports = UserSignupData;

