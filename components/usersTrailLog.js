var React = require('react'); 
var Link = require('react-router').Link;
var UserLogData = require('./login/userLogData.js');

var UserLog = require('./login/userLog.js');
var UserLogData = require('./login/userLogData.js');
	

	
var UsersTrailLog= React.createClass({

		getInitialState: function(){
		return { 
			user:""
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
				console.log(self.state.user)
			})

	},
	mapper: function(){
		var trailList = this.state.user.trailLog.map(function(item){
			return (
				<div>
					<div>
						{item.date}
					</div>
					<div>
						{item.hikeName}
					</div>
					<div>
						{item.miles}
					</div>
				</div>
			)
		})
		return (
			<div>
				{trailList}
			</div>
		)
	},
	componentDidMount: function(){
		this.getOneUserFromServer();
	},
	render: function(){
			
		return (	
		<div>
			<div className = "logcontainer">
			   	<div className = "traillogdiv">
					
			   		<h3><u>My Trail Log</u></h3>
					
						</div>
						{this.mapper()}
				

						
			

					



					<h3>stuff</h3>


					
			</div>
		</div>
	
			
			)

	}

});
module.exports = UsersTrailLog;