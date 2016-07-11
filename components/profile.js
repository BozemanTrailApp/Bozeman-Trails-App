var React = require('react');
var Link = require('react-router').Link;

var UsersTrailLog = require('./usersTrailLog');
var UserLog = require('./login/userLog.js');
var UserLogData = require('./login/userLogData.js');

var Profile = React.createClass({
	getInitialState: function(){
		return {
			user: "",
			miles: "",
			totalMiles:""
		}
	},


	addMiles: function(){
		var total = 0;
		for (var i = 0; i < this.state.user.trailLog.length; i++) {
			total += this.state.user.trailLog[i].miles;
		}
		this.setState({ totalMiles : total });
	},

	getOneUserFromServer: function(){ 
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				//console.log(data);
				self.setState({ user: data });
				self.addMiles();
			}) 
	},

	addHikeToUser: function(log){

		var self = this;

		//var miles = user.trailLog.miles;

		var hike = self.state.user.trailLog.push(log);

		//var miles = hike.miles += trailLog.miles;
		

		self.setState({user : hike});

            console.log(self.state.user);
			$.ajax({
			method: 'PUT',
			url: '/user/' + self.state.user._id,
			data: self.state.user,
			success: function(data){
				console.log("Adding Miles", data);
				self.setState({ user : data });
				self.getOneUserFromServer();
				//window.location = "http://localhost:3000/#/profile";
				// window.location.reload(true);
				//alert("Success on Logging your Miles Hiked!");
			},
			error: function(xhr, status, err){
				console.error('Failed to Add Miles', status, err.toString())
				//alert('Please Fill in all Categories!');
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
			   		<h2><u>My Profile</u></h2>
					
						
					<h2> Welcome, <i>{this.state.user.userName}!</i></h2>

					<h3> {this.state.user.firstName + ' ' + this.state.user.lastName} </h3>

					<h3> Age: {this.state.user.age } </h3>

					<h3> Gender: {this.state.user.gender} </h3>
					</div>

					<UserLogData addHikeToUser={this.addHikeToUser} 
								getOneUserFromServer={this.getOneUserFromServer}

								/>

						
					<div className = "recordtraillog">

					

					<h3 className="totalmiles">Total Miles Logged: {this.state.totalMiles} </h3>


					<Link to='/usersTrailLog'> 
						<button className=" btn traillogbutton">My Trail Log</button>
				    </Link>


					</div>
			</div>
		</div>
	</div>
			
			)

	}

});

module.exports = Profile;

