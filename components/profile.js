var React = require('react');
var Link = require('react-router').Link;
var UserLog = require('./userLog.js');

var Profile = React.createClass({
	render: function(){
		return (
			<div>
			<div className = "profilecontainer">
			   	<div className = "profile">
					<h3>User Profile</h3>

					<h3>User Name: { this.props.userName}</h3>


					<Link to = './profile/userLog'>
						<button className = 'btn btn-default btn-xs'>Log Your Miles</button>
					</Link>
				
					</div>
				</div>
			</div>
			)
	}
});

module.exports = Profile;