//UserAuth
//	UserLoginData
//		UserLoginForm
//	UserSignupData
//		UserSignupForm

var React = require('react');

var UserLoginForm = React.createClass({

	render: function(){
			

		return (
			<div>
			<h2> Log in </h2>	
				<form class="form-horizontal" onSubmit={ this.props.handleUserLoginSubmit }>
					<div class="form-group">
						<label class="col-sm-2 control-label">Email</label>
						<div class="col-sm-10">
							<input type="email" onChange={ this.props.onEmailChange } value={ this.props.email } class="form-control" placeholder="Email"/>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-2 control-label">Password</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" placeholder="Password" onChange={ this.props.onPasswordChange } value={ this.props.password }/>
						</div>
					</div>
					<button className="btn btn-primary">Log in</button>
				</form>
			</div>
			)
	}
});

module.exports = UserLoginForm;