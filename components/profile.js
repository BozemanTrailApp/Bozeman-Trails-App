var React = require('react');
var UserAuth = require('./userAuth.js');

var Profile = React.createClass({
	render: function(){
		return (
			<div>
			   	<div className = "profile">
					<h1>This will be the user's profile</h1>
					<UserAuth />
				</div>
			</div>
			)
	}
});

module.exports = Profile;