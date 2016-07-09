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


			
			
			<div className="card">	
			<div className="row">
			    <form className="col s12" onSubmit={ this.props.handleUserLoginSubmit }>
			      <div className="row">
			        <div className="input-field col s6">
			          <input type="text" onChange={ this.props.onUserNameChange } className="validate"/>
			          <label>User Name</label>
			        </div>
			        <div className="input-field col s6">
			          <input type="password" onChange={ this.props.onPasswordChange } className="validate"/>
			          <label>Password</label>
			        </div>
			      </div>
			    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
	  			</button>
			    </form>
 			</div>
 			</div>
 		


 			</div>
			)
	}
});

module.exports = UserLoginForm;