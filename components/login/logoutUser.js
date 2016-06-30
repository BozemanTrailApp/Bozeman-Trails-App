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
				<div className="card small"> 
					<button className="btn btn-primary" onClick={ this.props.logoutUser }>Log out</button>
				</div>
			</div>
			)
	}
});

module.exports = LogoutUser;