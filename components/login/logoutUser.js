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
				type="submit" name="action"> Sign-Out
  				</button>
			</div>
			)
	}
});

module.exports = LogoutUser;