var React = require('react'); 
var Link = require('react-router').Link;
var UserLogData = require('./login/userLogData.js');

var UserLog = require('./login/userLog.js');
var UserLogData = require('./login/userLogData.js');
	

	
var UsersTrailLog= React.createClass({

		getInitialState: function(){
		return { 
			user:{
				trailLog: []
			}
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
	mapper: function(){

		var trailList = this.state.user.trailLog.map(function(item){
			var date = item.date;
			var dateString = date.toString();
			var trimDate = dateString.substring(0,10);

			return ( 
				<div>
					<div className = "userslog">
					<div>
						Date: {trimDate}
					</div>
					<div>
						Trail: {item.hikeName}
					</div>
					<div>
						Miles Logged: {item.miles}
					</div>
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
						<div className= "allLogs">
						{this.mapper()}
						</div>
		    </div>
		</div>
	
			
			)

	}

});
module.exports = UsersTrailLog;