var React = require('react');
// var Link = require('react-router').Link;
// var UserLog = require('./userLog.js');
var UserAuth = require('./login/userAuth.js');
var AwareofUser = require('./login/awareOfUser');
var UserLog = require('./userLog');
//var UserLogData = require('./userLogData.js');



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
	componentDidMount: function(){
		this.getOneUserFromServer();
	},
	render: function(){
			if(this.state.user.user !== "anonymous"){
			return(
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
					 </div>
				</div>

				<UserLog />
				
			</div>
			
			

			)

		} else {

		return(
			<div>
				<div className = "profilecontainer">
			   		<div className = "profile">

			   		 <h1>Please sign-in to view profile</h1>

				     </div>
				</div>
			</div>
			)
		}

	}

});

module.exports = Profile;

