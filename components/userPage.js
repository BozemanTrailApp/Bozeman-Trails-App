//allUserData 
	//userPage
		//userCard

var React = require('react'); 
var UserPage = require('./userPage.js')

function AllUsers(props) {
	var user = props.user.map(function(item){
		return <userCard 	userName = {item.userName}
							firstName = {item.firstName}
							lastName = {item.lastName}
							bio = {item.bio}
							age = {item.age}
							gender = {item.gender}
							key = {item._id}
							id = {item._id}
							getId= {props.getId} /> 
	});

	return (
		<div>
		{user}
		</div>
		)
};

module.exports = AllUsers;