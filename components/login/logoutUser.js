//UserAuth
//  UserLoginData
//    UserLoginForm
//  UserSignupData
//    UserSignupForm
//  UserLogout


var React = require('react');


var LogoutUser = React.createClass({
	render: function(){
		return (
			<div>
				<button className="btn waves-effect waves-light" onClick={ this.props.logoutUser } 
				type="submit" name="action"> S I G N O U T 
  				</button>
			</div>
			)
	}
});

module.exports = LogoutUser;