//allUserData 
	//userPage
		//userCard

var React = require('react'); 
var AllUserData = require('./allUserData');

var UserCard = React.createClass({

	render:function (){
		return (
			<div>
				<div className="well col-xs-4">
					<h3> Username: {this.props.userName} </h3>
					<h3> Name: {this.props.firstName + " " + this.props.lastName} </h3>
					<h3> Bio: {this.props.bio} </h3>
					<h3> Age: {this.props.age} </h3>
					<h3> Gender: {this.props.gender} </h3>
				</div>
			</div> 


	 )
	}
});

module.exports = UserCard; 