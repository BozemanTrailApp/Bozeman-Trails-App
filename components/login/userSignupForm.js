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
				<form className="form-horizontal" onSubmit={ this.props.handleUserSignupSubmit }>
					<div className="form-group">
						<label className="col-sm-2 control-label">User Name</label>
						<div className="col-sm-10">
							<input type="userName" onChange={ this.props.onUsernameChange } value={ this.props.userName } className="form-control" placeholder="User Name"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">First Name</label>
						<div className="col-sm-10">
							<input type="firstName" onChange={ this.props.onFirstNameChange } value={ this.props.firstName } className="form-control" placeholder="First Name"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Last Name</label>
						<div className="col-sm-10">
							<input type="lastName" onChange={ this.props.onLastNameChange } value={ this.props.lastName } className="form-control" placeholder="Last Name"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Email</label>
						<div className="col-sm-10">
							<input type="email" onChange={ this.props.onEmailChange } value={ this.props.email } className="form-control" placeholder="Email"/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" placeholder="Password" onChange={ this.props.onPasswordChange } value={ this.props.password }/>
						</div>
					</div>
					<button className="btn btn-primary">Sign up</button>
				</form>
			</div>
			)
	}
});


module.exports = UserSignupForm;