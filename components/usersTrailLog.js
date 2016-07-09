//Profile
	//UserTrailLog
		//UserLogData
		//UserLog

var React = require('react'); 
var Link = require('react-router').Link;
var UserLogData = require('./login/userLogData.js');
var UserLog = require('./login/userLog.js');
 
	

	
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

	mapDate: function(){

		var trailDate = this.state.user.trailLog.map(function(item){
			var date = item.date;
			var dateString = date.toString();
			var trimDate = dateString.substring(0,10);

			return ( 
				<div>
					<div className = "userslog">
					<div>
						{trimDate}
					</div>
					</div>
					
				</div>
			)
		})

		return (
			<div>
				{trailDate}
			</div>
		)
	},

	mapTrail: function(){

		var trailName = this.state.user.trailLog.map(function(item){

			return ( 
			
					<div>
						{item.hikeName}
					</div>
				
			)
		})
		return (
			<div>
				{trailName}
			</div>
		)
	},


	mapMiles: function(){

		var trailMiles = this.state.user.trailLog.map(function(item){
			

			return ( 
				<div>
					<div className = "userslog">
					
					<div>
						{item.miles}
					</div>
					</div>
				</div>
			)
		})
		return (
			<div>
				{trailMiles}
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
<center>
      <table className = "centered " >
        <thead>
          <tr className = "tabletitles">
              <th data-field="id">Date</th>
              <th data-field="name">Trail</th>
              <th data-field="price">Miles</th>
          </tr>
        </thead>

        <tbody className = "traillogwords">
          <tr>
            <td>{this.mapDate()}</td>
            <td>{this.mapTrail()}</td>
            <td>{this.mapMiles()}</td>
          </tr>
          
        </tbody>
      </table>
      </center>
            
					
		    </div>
		</div>
	</div>
			
			)

	}

});
module.exports = UsersTrailLog;