var React = require('react');
var Link = require('react-router').Link;


var UserLog = require('./login/userLog.js');
var UserLogData = require('./login/userLogData.js');



var Profile = React.createClass({
	getInitialState: function(){
		return {
			user: ""
		}
	},
	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
			})
	},
	addHikeToUser: function(){
		$.ajax({
			method: 'PUT',
			url: '/user/:id',
			data: user,
			success: function(data){
				console.log("Adding Miles", data);
				self.setState({ user : data });
				alert("Success on Logging your Miles Hiked!");
			},
			error: function(xhr, status, err){
				console.error('Failed to Add Miles', status, err.toString())
				alert('Failed on Logging your Miles!');
			}
		})
	},
	componentDidMount: function(){
		this.getOneUserFromServer();
	},
	render: function(){
			
		return (	
		<div>
			<div className = "profilecontainer">
			   	<div className = "profile">
					<div className = "profilewords">
			   		<h3><u>My Profile</u></h3>
					
						
					<h2> Welcome, {this.state.user.userName}!</h2>

					<h3> {this.state.user.firstName} {this.state.user.lastName} </h3>

					<h3> Age: {this.state.user.age } </h3>

					<h3> Gender: {this.state.user.gender} </h3>
					</div>

					<UserLogData />

					
				</div>
			</div>
		</div>
			
			)

	}

});

module.exports = Profile;

