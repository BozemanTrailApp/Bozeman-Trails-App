var React = require('react');
var Link = require('react-router').Link;
var UserLog = require('./userLog.js');
var UserAuth = require('./userAuth.js');
var UserCard = require('./userCard.js');

var Profile = React.createClass({
	render: function(){
		return (
			<div>
			<div className = "profilecontainer">
			   	<div className = "profile">

				<UserCard />

				     </div>
				</div>
			</div>
			)
	}
});

module.exports = Profile;

