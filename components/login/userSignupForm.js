//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm

var React = require('react');

var UserSignupForm = React.createClass({
	render: function(){
		return (
			<div>
			<h3> Sign Up </h3>
				<form class="form-horizontal" onSubmit={ this.props.handleUserSignupSubmit }>
					<div class="form-group">
						<label class="col-sm-2 control-label">Email</label>
						<div class="col-sm-10">
							<input type="email" onChange={ this.props.onEmailChange } value={ this.props.email } class="form-control" placeholder="Email"/>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">Username</label>
						<div class="col-sm-10">
							<input type="username" onChange={ this.props.onUsernameChange } value={ this.props.username } class="form-control" placeholder="Username"/>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-2 control-label">Password</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" placeholder="Password" onChange={ this.props.onPasswordChange } value={ this.props.password }/>
						</div>
					</div>
					<button className="btn btn-primary">Sign up</button>
				</form>
			</div>
			)
	}
});

module.exports = UserSignupForm;