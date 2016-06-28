var React = require('react');
var ShowLogForm = require('./showLogForm.js');
// var LogOnDisplay = require('./logOnDisplay.js');

var ShowLogOnData = React.createClass({

		getInitialState: function(){
				return{
					user: []
				}
	},

		UserLogOn: function(){
			var self = this;
				$.ajax({
					method: 'GET',
					url: "/users",
					success: function(data){
					console.log(data);
					self.setState({ user : data })
					}.bind(self),
					error: function(xhr, status, err){
					console.error('/user ', status, err.toString());
					}
				})

			
	},
		componentDidMount: function(){
			this.UserLogOn();
	}, 
		render: function(){
			var UserDisplay = this.state.user.map(function(item){
				return	<ShowLogForm
						userName = {item.userName}
						firstName = {item.firstName}
						lastName = {item.lastName}
						email ={item.email} 
						password = {item.password}
						key = {item._id}
						id = {item._id}
						
							/>
				
			});

		return (
			<div>
			{ UserDisplay }		
			</div>	
		)
	}
});

module.exports = ShowLogOnData;