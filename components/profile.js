var React = require('react');


var Profile = React.createClass({
	render: function(){
		return (
			<div>
			   	<div className = "profile">
					<h3>User Profile</h3>
					<h3>User Name: { this.props.userName}</h3>
					
				</div>
			</div>
			)
	}
});

module.exports = Profile;