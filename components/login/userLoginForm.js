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

			<h2> Login </h2>	
				<form className="form-horizontal" onSubmit={ this.props.handleUserLoginSubmit }>
					<div className="form-group">
						<label className="col-sm-2 control-label">User Name</label>
						<div className="col-sm-10">
							<input type="User Name" onChange={ this.props.onUserNameChange } 
							value={ this.props.userName} className="form-control" placeholder="User Name"/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" placeholder="Password" onChange={ this.props.onPasswordChange } value={ this.props.password }/>
						</div>
					</div>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
			)
	}
});

module.exports = UserLoginForm;