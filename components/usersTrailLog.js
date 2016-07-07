var React = require('react'); 
var Link = require('react-router').Link;
	

	
var UsersTrailLog= React.createClass({

	getInitialState: function(){
		return {
			trailLog: []
		}
	},


	getLog: function(){
		var trailLogSchema = this.state.user.trailLogSchema;
		this.setState({ trailLog : trailLogSchema });
	},

	getOneUserFromServer: function(){
		var self = this;
			$.ajax({
				method:'GET',
				url:'/user'
			}).done(function(data){
				console.log(data);
				self.setState({ user: data });
				self.getLog();
			})
	},


		render: function(){
		return(

			<div className = "logcontainer">
			<div>
			

			<h3>TEST</h3>

				{this.state.trailLogSchema} 
				

				</div>
			</div>
				

			
			)
	}
});
module.exports = UsersTrailLog;